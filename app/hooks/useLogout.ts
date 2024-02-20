import {useRouter} from 'next/navigation';
import {useAuthStore} from '@/app/store/auth';
import {handleSignOut} from '@/app/api/auth';

export default function useLogout() {
  const router = useRouter();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const login = useAuthStore((state) => state.login);

  const handleLogout = async () => {
    try {
      await handleSignOut();
      setAuthenticated(false);
      login(null, '');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLogout,
  };
}
