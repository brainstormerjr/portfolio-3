"use client";
import { createContext, useContext, useEffect, useState } from "react";

const IconListContext = createContext<string[]>([]);

export function IconListProvider({ children }: { children: React.ReactNode }) {
  const [iconList, setIconList] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/icons`) // Replace with your actual endpoint
      .then((res) => res.json())
      .then((data) => setIconList(data.icons));
  }, []);

  return (
    <IconListContext.Provider value={iconList}>
      {children}
    </IconListContext.Provider>
  );
}

export function useIconList() {
  return useContext(IconListContext);
}
