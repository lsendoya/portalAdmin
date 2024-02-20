import {useRouter} from 'next/navigation';

export function DeniedAccess() {
  const router = useRouter();
  const onLoginRedirect = () => {
    router.push('/auth');
  };

  return (
    <div className={'grid grid-cols-1 place-items-center w-full h-screen'}>
      <div className="flex max-w-lg w-full flex-col items-center justify-center p-6 m-6 rounded-lg shadow-lg bg-neutral-50 text-center shadow-xl">
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Acceso Denegado
        </h2>
        <p className="mb-4 text-gray-600">
          Necesitas iniciar sesión para acceder a esta página.
        </p>
        <button
          onClick={onLoginRedirect}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
