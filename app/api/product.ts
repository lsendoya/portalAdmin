import {MessageResponse} from '@/utils/types/response';

export async function listProducts() {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL_API as string}/api/v1/public/products`;
    const response = await fetch(url);
    const res: MessageResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error al listar productos: ${JSON.stringify(res.errors)}`
      );
    }

    return res.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getProduct(id: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL_API as string}/api/v1/public/products/${id}`;
    const response = await fetch(url);
    const res: MessageResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error al obtener el producto ${id}: ${JSON.stringify(res.errors)}`
      );
    }

    return res.data;
  } catch (error) {
    console.error(error);
  }
}
export async function updateProduct(id: string, token: string, product: any) {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL_API as string}/api/v1/admin/products/${id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify(product),
    });
    const res: MessageResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error al actualizar el producto ${JSON.stringify(res.errors)}`
      );
    }

    return res.data;
  } catch (error) {
    console.error(error);
  }
}
export async function deleteProduct(id: string, token: string) {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL_API as string}/api/v1/admin/products/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    });
    const res: MessageResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error al eliminar el producto ${JSON.stringify(res.errors)}`
      );
    }
  } catch (error) {
    console.error(error);
  }
}

export async function createProduct(token: string, formData: FormData) {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL_API as string}/api/v1/admin/products`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    const res: MessageResponse = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error al enviar el formulario ${JSON.stringify(res.errors)}`
      );
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
