import { create } from 'zustand';

const useStore = create((set) => ({
  signedIn: false,
  setSignedIn: () => set((state) => ({ signedIn: !state.signedIn})),
}));

export default useStore;