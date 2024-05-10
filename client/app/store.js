import { create } from 'zustand';

const useStore = create((set) => ({
  openOnboardingModal: false,
  openSignInModal: true,
  setOpenOnboardingModal: () => set((state) => ({ openOnboardingModal: !state.openOnboardingModal})),
  setOpenSignInModal: () => set((state) => ({ openSignInModal: !state.openSignInModal})),
}));

export default useStore;