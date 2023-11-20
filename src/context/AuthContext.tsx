import { useContext, createContext, ReactNode } from "react";

interface AuthContextProps {
  children: ReactNode;
  value: any;
}

const AuthContext = createContext<any | undefined>(undefined);

export function AuthProvider({ children, value }: AuthContextProps) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthValue deve ser usado dentro de um AuthProvider");
  }
  return context;
}
