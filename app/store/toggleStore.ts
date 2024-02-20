import { create } from 'zustand';

interface ToggleState {
  toggleCreate: boolean;
  setToggleCreate: () => void;
  toggleUpdate: boolean;
  setToggleUpdate: () => void;
}

export const toggleStore = create<ToggleState>((set) => ({
  toggleCreate: false,
  toggleUpdate: false,
  setToggleUpdate: () =>
    set((state) => ({ toggleUpdate: !state.toggleUpdate })),
  setToggleCreate: () =>
    set((state) => ({ toggleCreate: !state.toggleCreate })),
}));
