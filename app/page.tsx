'use client';
import Link from 'next/link';
import {initConfig} from '@/utils/amplify';
import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    initConfig();
  }, []);
  return (
    <main className="grid min-h-screen grid-cols-1 w-full place-items-center">
      <section className="flex flex-col justify-center items-center w-full max-w-2xl space-y-6">
        <h2 className="text-3xl font-semibold text-neutral-900">
          Bienvenidos al Portal Admin Dalas
        </h2>

        <div className="flex space-x-4">
          <Link
            href="/auth"
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition ease-in-out duration-150 cursor-pointer"
          >
            Iniciar Sesión
          </Link>

          <Link
            href="/auth/signup"
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-700 transition ease-in-out duration-150 cursor-pointer"
          >
            Registro
          </Link>
        </div>
      </section>
    </main>
  );
}
