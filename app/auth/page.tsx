import { LoginForm } from '@/components/ui/auth/login-form';

export default function Login() {
  return (
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
  );
}
