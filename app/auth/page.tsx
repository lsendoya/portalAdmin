'use client';
import {redirect} from 'next/navigation';
import {LoginForm} from '@/components/ui/auth/login-form';
import useSession from '@/app/hooks/useSession';
import {useAuthStore} from '@/app/store/auth';

export default function Auth() {
  useSession();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (isAuthenticated) {
    redirect('/dashboard');
  }
  return (
    <>
      {!isAuthenticated && (
        <main className="grid min-h-screen  grid-cols-1 w-full place-items-center">
          <section
            className={
              'flex flex-col  justify-center items-center w-full max-w-2xl space-y-6'
            }
          >
            <h2 className=" text-3xl font-semibold text-neutral-900">
              Portal Admin Dalas
            </h2>
            <LoginForm />
          </section>
        </main>
      )}
    </>
  );
}
