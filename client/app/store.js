import { create } from 'zustand';

const useStore = create((set) => ({
  openOnboardingModal: false,
  openSignInModal: true,
  setOpenOnboardingModal: () => set((state) => ({ openOnboardingModal: !state.openOnboardingModal})),
  setOpenSignInModal: () => set((state) => ({ openSignInModal: !state.openSignInModal})),
  
  list: [
    {name: "Ishaan", date: '24 April', description: 'abcsefwdcf'},
    {name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf'},
    {name: "xyz", date: '24 April', description: 'abcscwdvnovnefwdcf'},
  ],
  addItem: (item) => set((state) => ({ list: [...state.list, item] })),
  updateItem: (index, newItem) => set((state) => ({
    list: state.list.map((item, i) => (i === index ? newItem : item)),
  })),
  removeItem: (index) => set((state) => ({
    list: state.list.filter((_, i) => i !== index),
  })),

}));

export default useStore;