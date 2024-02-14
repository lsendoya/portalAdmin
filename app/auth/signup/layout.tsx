'use client';
import { Inter } from 'next/font/google';
import { useAuthStore } from '@/app/store/authStore';

const inter = Inter({ subsets: ['latin'] });

export default function SignUPLayout({
  confirm,
  register,
}: Readonly<{
  confirm: React.ReactNode;
  register: React.ReactNode;
}>) {
  let isRegister = useAuthStore((state) => state.isRegister);
  console.log(isRegister);
  return <div>{!isRegister ? register : confirm}</div>;
}
