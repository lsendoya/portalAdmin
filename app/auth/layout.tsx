'use client';
import {useAuthStore} from '@/app/store/auth';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isRegister = useAuthStore((state) => state.isRegister);
  console.log(isRegister);
  return <section>{children}</section>;
}
