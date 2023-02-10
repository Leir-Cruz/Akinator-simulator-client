import { createContext, useContext } from 'react';

export type GlobalContent = {
  copy: string;
  setCopy: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContent | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);
