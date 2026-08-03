import { createContext, useContext, useState, ReactNode } from 'react';

type PopupType = 'product' | 'education' | 'serve' | 'story' | null;

interface PopupContextType {
  activePopup: PopupType;
  openPopup: (popup: PopupType) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [activePopup, setActivePopup] = useState<PopupType>(null);

  const openPopup = (popup: PopupType) => {
    setActivePopup(popup);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = '';
  };

  return (
    <PopupContext.Provider value={{ activePopup, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
}
