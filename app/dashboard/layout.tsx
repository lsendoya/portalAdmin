import type {Metadata} from 'next';
import '@/app/globals.css';
import NavBar from '@/components/ui/dashboard/navbar';
import {ProtectedProvider} from '@/components/ui/auth/auth';
import {Navigation} from '@/components/ui/dashboard/menuBar';
import {DialogCreateProduct} from '@/components/ui/products/create-dialog';

export const metadata: Metadata = {
  title: 'Dashboard',
 };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedProvider>
      <nav className={'flex flex-col'}>
        <NavBar />
        <div className={'flex justify-between items-center h-12 p-2'}>
          <Navigation />
          <DialogCreateProduct />
        </div>
      </nav>

      {children}
    </ProtectedProvider>
  );
}
