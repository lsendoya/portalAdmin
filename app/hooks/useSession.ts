import {useEffect} from 'react';
import {currentSession} from '@/app/api/auth';
import {useAuthStore, User} from '@/app/store/auth';
import {useRouter} from 'next/navigation';

export default function useSession() {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  useEffect(() => {
    async function fetchAndLoginSession() {
      try {
        const session = await currentSession();
        if (!session) {
          console.error('No se pudo obtener la sesión');
          return;
        }

        const { idToken, accessToken } = session;
        if (!idToken || !accessToken) {
          console.error('Tokens no encontrados');
          router.refresh();
          return;
        }

        const newUser = {
          name: idToken.payload['name'],
          email: idToken.payload['email'],
        } as User;
        login(newUser, accessToken.toString());

        console.log(newUser);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAndLoginSession().then();
  }, []);

  return;
}
