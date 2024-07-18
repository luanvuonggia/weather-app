import { SearchState } from './search.types';
import { create } from 'zustand';

const useSearchStore = create<SearchState>((set) => ({
  currentSearch: "Ho Chi Minh City",
  histories: {
  },
  setCurrentSearch: (search: any) => set(() => ({ currentSearch: search })),
  setHistories: (histories: any) => set(() => ({ histories: histories })),
}))

export default useSearchStore;
