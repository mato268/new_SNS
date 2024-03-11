import {
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";

export interface TokenForm {
  accessToken: string;
}

interface TokenProviderProps {
  children: ReactNode;
}

interface TokenContextType {
  accessToken: TokenForm;
  setAccessToken: Dispatch<SetStateAction<TokenForm>>;
}

const TokenContext = createContext<TokenContextType>({
  accessToken: { accessToken: "" },
  setAccessToken: () => {},
});

export const TokenProvider = ({ children }: TokenProviderProps) => {
  const [accessToken, setAccessToken] = useState<TokenForm>({
    accessToken: "",
  });

  return (
    <TokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
