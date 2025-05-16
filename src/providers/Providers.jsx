"use client";

import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

function Providers({ children }) {
  return <ShoppingCartProvider>{children}</ShoppingCartProvider>;
}

export default Providers;
