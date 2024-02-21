import {useRouter} from 'next/navigation';
import {useAuthStore} from '@/app/store/auth';
import {handleSignOut} from '@/app/api/auth';

export default function useLogout() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await handleSignOut();
      logout();
      router.push('/auth');
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleLogout,
  };
}
