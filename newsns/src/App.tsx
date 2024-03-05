import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import Home from "./Home";
import SignUpPassword from "./SignUpPassword";
import { SignUpProvider } from "./hook/useSignUpContext";
import { TokenProvider, LogIn } from "./LogIn";
import { MainPage } from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <SignUpProvider>
        <TokenProvider>
          <main className="w-full flex max-w-md min-w-sm justify-center h-full">
            <Routes>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/logIn" element={<LogIn />}></Route>
              <Route path="/signUp" element={<SignUpPage />}></Route>
              <Route
                path="/signUp/password"
                element={<SignUpPassword />}
              ></Route>
              <Route path="/" element={<MainPage />}></Route>
            </Routes>
          </main>
        </TokenProvider>
      </SignUpProvider>
    </BrowserRouter>
  );
}

export default App;
