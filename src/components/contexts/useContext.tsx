import { createContext, useContext } from 'react';

export type GlobalContent = {
  copy: string,
  setCopy: (c: string) => void,
};

export const GlobalContext = createContext<GlobalContent>({
  copy: 'Valor Default',
  setCopy: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
