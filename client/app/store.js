import { create } from 'zustand';

const useStore = create((set) => ({
  openOnboardingModal: false,
  openSignInModal: true,
  activeChat: 0,
  setOpenOnboardingModal: () => set((state) => ({ openOnboardingModal: !state.openOnboardingModal})),
  setOpenSignInModal: () => set((state) => ({ openSignInModal: !state.openSignInModal})),
  setActiveChat: (index) => set(() => ({ activeChat: index })),
  list: [
    {name: "Ishaan", date: '24 April', description: 'abcsefwdcf', about: '000vwmeiofnfviowem viofwemfioewnmewiovn ewiov ewiov erwioj evwapo v aeivpiajewuv eruiwv newiuvnerwiungveiuniugrn'},
    {name: "Khullar", date: '24 April', description: 'abcscwdvnovnefwdcf', about: '111vwmeiofnfviowem viofwemfioewnmewiovn ewiov ewiov erwioj evwapo v aeivpiajewuv eruiwv newiuvnerwiungveiuniugrn'},
    {name: "xyz", date: '24 April', description: 'abcscwdvnovnefwdcf', about: '222vwmeiofnfviowem viofwemfioewnmewiovn ewiov ewiov erwioj evwapo v aeivpiajewuv eruiwv newiuvnerwiungveiuniugrn'},
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