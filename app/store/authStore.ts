import {create} from 'zustand'

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {

    isAuthenticated : boolean;
}


export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated : false,
}));
