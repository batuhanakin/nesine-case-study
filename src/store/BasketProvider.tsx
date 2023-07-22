import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export interface ContextType {
  items: any[];
  addBetToBasket: ({ bet }: any) => void;
}

const Context = createContext<ContextType | null>(null);

export const BasketProvider = ({ children }: PropsWithChildren<Object>) => {
  const [items, setValue] = useState<Array<any>>(() => []);

  const addBetToBasket = useCallback(
    ({ bet }: { bet: any }) =>
      setValue((items) => {
        return items.concat(bet);
      }),
    []
  );
  return (
    <Context.Provider value={{ items, addBetToBasket }}>
      {children}
    </Context.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(Context);
  if (!context) return;
  return context;
};
