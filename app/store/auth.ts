import {create} from 'zustand';

export interface User {
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  email: string;
  login: (user: User | null, token: string) => void;
  logout: () => void;
  setRegister: (value: boolean) => void;
  isRegister: boolean;
  setLoading: () => void;
  setEmail: (email: string) => void;
  setAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  isRegister: false,
  email: '',
  isSignedIn: false,
  isLoading: true,
  setLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  setRegister: (value: boolean) => set({ isRegister: value }),
  login: (user, token) =>
    set({ user: user || null, isAuthenticated: true, token }),
  logout: () => set({ user: null, isAuthenticated: false, token: null }),
  setEmail: (email: string) => set({ email: email }),
  setAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
}));
