import { create } from 'zustand';

const useCommonStore = create((set) => ({
    isFormOpen:false,
    isAlert:false,
    handleFormToggle:()=>set(state=>({isFormOpen:!state.isFormOpen})),
    handleAlertToggle:()=>set(state=>({isAlert:!state.isAlert})),
}))

export default useCommonStore;