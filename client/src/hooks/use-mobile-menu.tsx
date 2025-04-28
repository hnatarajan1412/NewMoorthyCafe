import { useState, createContext, useContext } from "react";

interface MobileMenuContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggle, close, open }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  
  if (context === undefined) {
    // Create a local version if no provider is present
    const [isOpen, setIsOpen] = useState(false);
    
    return {
      isOpen,
      toggle: () => setIsOpen(!isOpen),
      close: () => setIsOpen(false),
      open: () => setIsOpen(true),
    };
  }
  
  return context;
}
