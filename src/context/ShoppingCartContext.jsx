"use client";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import { createContext, useContext } from "react";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useLocalStorageState("SHOPPINGCART", []);
  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (context === undefined)
    throw new Error(
      "ShoppingCartContext was used outside of ShoppingCartProvider"
    );
  return context;
}
