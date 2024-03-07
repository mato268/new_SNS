import {
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
  } from "react";

interface TokenForm {
    accessToken: string;
  }
  
  interface TokenProviderProps {
    children: ReactNode;
  }
  
  interface TokenContextType {
    token: TokenForm;
    setToken: Dispatch<SetStateAction<TokenForm>>;
  }
  
  const TokenContext = createContext<TokenContextType>({
    token: { accessToken: ""},
    setToken: () => {},
  });
  
  export const TokenProvider = ({ children }: TokenProviderProps) => {
    const [token, setToken] = useState<TokenForm>({
      accessToken: "",
    });
  
    return (
      <TokenContext.Provider value={{ token, setToken }}>
        {children}
      </TokenContext.Provider>
    );
  };
  
  export const useToken = () => useContext(TokenContext);