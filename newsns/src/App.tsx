import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import Home from "./Home";
import SignUpPassword from "./SignUpPassword";
import { SignUpProvider } from "./hook/useSignUpContext";
import { LogIn } from "./LogIn";
import { MainPage } from "./MainPage";
import { useToken } from "./hook/useTokenContext";

function App() {
  const { accessToken } = useToken();
  console.log(accessToken);

  return (
    <BrowserRouter>
      <SignUpProvider>
        <main className="w-full flex max-w-md min-w-sm justify-center h-full">
          <Routes>
            <Route path="/logInMain" element={<Home />}></Route>
            <Route path="/logIn" element={<LogIn />}></Route>
            <Route path="/signUp" element={<SignUpPage />}></Route>
            <Route path="/signUp/password" element={<SignUpPassword />}></Route>
            <Route path="/Home" element={<MainPage />}></Route>
          </Routes>
        </main>
      </SignUpProvider>
    </BrowserRouter>
  );
}

export default App;
