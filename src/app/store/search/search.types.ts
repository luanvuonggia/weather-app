export interface SearchState {
  currentSearch: string;
  histories: any;
  setCurrentSearch: (search: any) => void;
  setHistories: (histories: any) => void;
}