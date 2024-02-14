
import {ReactNode} from "react";
import {useAuthStore} from "@/app/store/authStore";


interface AuthProviderProps {
    children: ReactNode;
}
const ProtectedComponent = ({ children }: AuthProviderProps) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        // Si no está autenticado, muestra un mensaje de acceso denegado
        return <div>Acceso denegado. Debes iniciar sesión.</div>;
    }

    // Si está autenticado, muestra el contenido protegido
    return <>{children}</>;
};



const LogoutComponent = () => {
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout(); // Llama a la función de cierre de sesión definida en la tienda de Zustand
    };

    return (
        <button onClick={handleLogout}>Cerrar sesión</button>
    );
};



const LoginComponent = () => {
    const login = useAuthStore((state: { login: any; }) => state.login);

    const handleLogin = () => {
        // Suponiendo que estos son los datos del usuario autenticado y el token obtenido
        const user = { id: '123', name: 'John Doe' };
        const token = 'some-auth-token';

        // Llama a la función de inicio de sesión definida en la tienda de Zustand
        login(user, token);
    };

    return (
        <button onClick={handleLogin}>Iniciar sesión</button>
    );
};
