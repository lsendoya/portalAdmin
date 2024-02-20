import {useEffect} from 'react';
import {currentSession} from '@/app/api/auth';
import {useAuthStore, User} from '@/app/store/auth';

export default function useSession() {
  const login = useAuthStore((state) => state.login);
  const setLoading = useAuthStore((state) => state.setLoading);

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
          return;
        }

        const email = idToken.payload['email'] || '';
        const name = idToken.payload['name'] || '';
        const newUser = { name, email } as User;
        login(newUser, accessToken.toString());
        setLoading();
        console.log(newUser);
      } catch (error) {
        console.error('Error al obtener la sesión', error);
      }
    }

    fetchAndLoginSession();
  }, []);

  return;
}
