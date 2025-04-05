"use client";
import { createContext, useContext, useState } from "react";

const SwitchContext = createContext<{
  isEnglish: boolean;
  toggleLanguage: () => void;
} | null>(null);

export const SwitchWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [isEnglish, setIsEnglish] = useState(true);

  const toggleLanguage = () => setIsEnglish(!isEnglish);
  const value = {
    isEnglish,
    toggleLanguage,
  };
  return (
    <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>
  );
};

export const useSwitch = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalWrapper");
  }
  return context;
};
