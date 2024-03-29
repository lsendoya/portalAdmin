'use client';
import {ReactNode} from 'react';
import {useAuthStore} from '@/app/store/auth';
import {DeniedAccess} from '@/components/ui/auth/unauthorized';
import useSession from '@/app/hooks/useSession';

interface AuthProviderProps {
  children: ReactNode;
}
export const ProtectedProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  useSession();
  if (!isAuthenticated) {
    return <DeniedAccess />;
  }

  return <>{children}</>;
};
