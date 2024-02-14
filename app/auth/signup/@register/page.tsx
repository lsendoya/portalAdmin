'use client';
import { RegisterForm } from '@/components/ui/auth/register-form';

export default function Register() {
  return (
    <main className="grid min-h-screen  grid-cols-1 w-full place-items-center">
      <section className="flex flex-col justify-center items-center w-full max-w-2xl space-y-6">
        <h2 className=" text-3xl font-semibold text-neutral-900">
          Portal Admin Dalas
        </h2>
        <RegisterForm />
      </section>
    </main>
  );
}
