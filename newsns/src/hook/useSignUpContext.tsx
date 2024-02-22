import {
  ReactNode,
  Dispatch,
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SignUpForm {
  nickname: string;
  email: string;
}

interface SignUpContextType {
  signUpValue: SignUpForm;
  setSignUpValue: Dispatch<SetStateAction<SignUpForm>>;
}

interface SignUpProviderProps {
  children: ReactNode;
}

const SignUpContext = createContext<SignUpContextType>({
  signUpValue: {
    email: "",
    nickname: "",
  },
  setSignUpValue: () => {},
});

export const useSignUpContext = () => useContext(SignUpContext);

export const SignUpProvider = ({ children }: SignUpProviderProps) => {
  const [ signUpValue, setSignUpValue ] = useState<SignUpForm>({
    email: "",
    nickname: "",
  });

  return <SignUpContext.Provider value={{
    setSignUpValue, 
    signUpValue
  }}>{children}</SignUpContext.Provider>;
};
