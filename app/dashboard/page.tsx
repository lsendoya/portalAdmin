'use client';
import useSession from '@/app/hooks/useSession';
import {useAuthStore} from '@/app/store/auth';
import {DashboardProducts} from '@/components/ui/products/dashboard';
import {DialogUpdateProduct} from '@/components/ui/products/update-dialog';
import Loading from '@/components/ui/dashboard/loading';
import {Suspense} from 'react';

export default function Dashboard() {
  useSession();
  const token = useAuthStore((state) => state.token);
  console.log('token---', token?.toString());

  return (
    <main
      className={
        'grid w-full h-full min-h-screen place-items-center bg-gray-50 pt-6'
      }
    >
      <section className={'container mx-auto px-4'}>
        <article className="flex w-full flex-col  items-center max-w-screen-xl">
          <Suspense fallback={<Loading />}>
            <DashboardProducts />
          </Suspense>
        </article>
        <article className={'mt-8 w-full max-w-screen-lg mx-auto'}>
          <DialogUpdateProduct />
        </article>
      </section>
    </main>
  );
}
