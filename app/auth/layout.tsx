'use client';
import { Inter } from 'next/font/google';
import { useAuthStore } from '@/app/store/authStore';
import { initConfig } from '@/utils/amplify';

const inter = Inter({ subsets: ['latin'] });

initConfig();

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

  }>) {
  let isRegister = useAuthStore((state) => state.isRegister);
  console.log(isRegister);
  return (
    <html lang="en">
      <body >
        
      </body>
    </html>
  );
}
