import * as z from 'zod';
import { productSchema } from '@/utils/schemas/createProduct';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toggleStore } from '@/app/store/toggleStore';
import { useAuthStore } from '@/app/store/auth';
import { productStore } from '@/app/store/product';
import {
  createProduct,
  getProduct,
  listProducts,
  updateProduct,
} from '@/app/api/product';
import { useEffect, useState } from 'react';
import lodash from 'lodash';
import { productSchemaUpdate } from '@/utils/schemas/updateProduct';

type FormValuesProducts = z.infer<typeof productSchema>;

export function useCreateProduct() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const setToggle = toggleStore((state) => state.setToggleCreate);
  const setActionProduct = productStore((state) => state.setActionProduct);
  const token = useAuthStore((state) => state.token);

  const form = useForm<FormValuesProducts>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      available: false,
      color: '',
      name: '',
    },
  });
  setLoading(!isLoading);
  async function onCreateProduct(values: FormValuesProducts) {
    try {
      const product = await createProduct(
        String(token),
        createFormData(values)
      );

      if (!lodash.isNull(product)) {
        setActionProduct();
      }
    } catch (e) {
      console.error(e);
    } finally {
      form.reset();
      setToggle();
    }
  }

  return {
    form,
    onCreateProduct,
    isLoading,
  };
}

function createFormData(values: FormValuesProducts) {
  const formData = new FormData();

  formData.append('name', values.name);
  formData.append('description', values.description);
  formData.append('price', values.price);
  formData.append('color', values.color);
  formData.append('available', String(values.available));

  let size = {
    size2_4: values.size2_4,
    size6_8: values.size6_8,
    size10_12: values.size10_12,
    size14_16: values.size14_16,
  };

  formData.append('size', JSON.stringify(size));

  if (values.imageFiles) {
    values.imageFiles.forEach((file, index) => {
      console.log(`imageFiles[${index}]`, file);
      formData.append(`imageFiles`, file);
    });
  }

  return formData;
}

export function useListProducts() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const setProducts = productStore((state) => state.setProducts);
  const didActionProduct = productStore((state) => state.didActionProduct);

  useEffect(() => {
    const list = async () => {
      const products = await listProducts();
      if (!lodash.isNull(products)) {
        console.log('no is null');
        setLoading(false);
      }
      setProducts(products);
    };
    list().then((r) => r);
  }, [didActionProduct]);

  return {
    isLoading,
  };
}

export function useSelectProduct(index: number) {
  const setToggle = toggleStore((state) => state.setToggleUpdate);
  const setProductIDs = productStore((state) => state.setProductIDs);
  const productsIDs = productStore((state) => state.productsIDs);
  const setProductToEdit = productStore((state) => state.setProductToEdit);
  const products = productStore((state) => state.products);
  let productsIDsItems = [...productsIDs];
  const handleEdit = (id: string) => {
    productsIDsItems[index] = id;
    setProductIDs(productsIDsItems);
    const productSelected = products.filter(
      (product) => product.id === productsIDsItems[index]
    );
    console.log('product selected--', productSelected);
    setProductToEdit(productSelected[0]);
    setToggle();
  };

  return {
    handleEdit,
  };
}

export function useUpdateProduct() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const setActionProduct = productStore((state) => state.setActionProduct);
  const token = useAuthStore((state) => state.token);
  const setToggle = toggleStore((state) => state.setToggleUpdate);
  const productSelected = productStore((state) => state.productSelected);

  const form = useForm<FormValuesProducts>({
    resolver: zodResolver(productSchemaUpdate),
    defaultValues: {
      ...productSelected,
      price: String(productSelected.price),
      size6_8: String(productSelected.size?.size6_8),
      size2_4: String(productSelected.size?.size2_4),
      size14_16: String(productSelected.size?.size14_16),
      size10_12: String(productSelected.size?.size10_12),
    },
  });

  async function onUpdateProduct(values: FormValuesProducts) {
    const { description, name, color, price, available } = values;

    const size = {
      size2_4: values.size2_4,
      size6_8: values.size6_8,
      size10_12: values.size10_12,
      size14_16: values.size14_16,
    };

    const priceFloat = parseFloat(price);
    const payload = {
      size,
      name,
      color,
      price: priceFloat,
      available,
      description,
    };
    console.log('payload--', payload);
    setLoading(!isLoading);
    try {
      const product = await updateProduct(
        productSelected.id,
        String(token),
        payload
      );

      if (!lodash.isNull(product)) {
        setActionProduct();
      }
    } catch (e) {
      console.error(e);
    } finally {
      form.reset();
      setToggle();
    }
  }

  return {
    form,
    onUpdateProduct,
    isLoading,
  };
}
export function useGetProduct() {
  let product;
  useEffect(() => {
    const list = async () => {
      product = await getProduct('');
    };
    list().then((r) => r);
  }, []);

  return {
    product,
  };
}
