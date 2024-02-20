'use client';
import {CardProduct} from '@/components/ui/products/card';
import {useListProducts} from '@/app/hooks/useProduct';
import {productStore} from '@/app/store/product';
import lodash from 'lodash';
import Loading from '@/components/ui/dashboard/loading';

export function DashboardProducts() {
  const { isLoading } = useListProducts();
  const products = productStore((state) => state.products);

  if (isLoading) {
    return <Loading />;
  }
  if (lodash.isEmpty(products)) {
    return (
      <div className="bg-white shadow rounded-lg p-4 max-w-md mx-auto mt-6 text-center">
        <p className="text-gray-800 font-normal text-md">
          Por el momento no hay productos,
          <span className="font-semibold">cree uno nuevo para listar.</span>
        </p>
      </div>
    );
  }
  return (
    <article
      className={
        'grid w-full py-4 max-w-screen-xl place-items-center mx-auto gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'
      }
    >
      {products.map((product, index) => (
        <CardProduct key={index} product={product} index={index}></CardProduct>
      ))}
    </article>
  );
}
