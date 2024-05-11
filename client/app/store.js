import { create } from 'zustand';

const useStore = create((set) => ({
  openOnboardingModal: false,
  openSignInModal: true,
  openCreateDiet: false,
  setOpenOnboardingModal: () => set((state) => ({ openOnboardingModal: !state.openOnboardingModal})),
  setOpenSignInModal: () => set((state) => ({ openSignInModal: !state.openSignInModal})),
  setOpenCreateDiet: () => set((state) => ({ openCreateDiet: !state.openCreateDiet})),
}));

export default useStore;