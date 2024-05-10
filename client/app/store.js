import { create } from 'zustand';

const useStore = create((set) => ({
  openModal: false,
  setOpenModal: () => set((state) => ({ openModal: !state.openModal}))
}));

export default useStore;