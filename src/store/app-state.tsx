import { useContext, createContext, useState } from "react";

type AppContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

type AppStateProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useApp = () => useContext(AppContext);

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(localStorage.theme as string);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
