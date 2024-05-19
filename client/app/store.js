import { create } from 'zustand';

const useStore = create((set) => ({
  dummyData: [
    {id: 1, name: "Ishaan", date: '24 April', description: 'abcsefwdcf'},
    {id: 2, name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
  ],
  openOnboardingModal: false,
  openSignInModal: true,
  setOpenOnboardingModal: () => set((state) => ({ openOnboardingModal: !state.openOnboardingModal})),
  setOpenSignInModal: () => set((state) => ({ openSignInModal: !state.openSignInModal})),
  addToDummyData: (newData) =>
    set((state) => ({ dummyData: [...state.dummyData, newData] })),
}));

export default useStore;