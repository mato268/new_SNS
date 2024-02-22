import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import Home from "./Home";
import SignUpPassword from "./SignUpPassword";
import { SignUpProvider } from "./hook/useSignUpContext";

function App() {
  return (
    <BrowserRouter>
      <SignUpProvider>
        <main className="w-full flex max-w-md min-w-sm justify-center h-full">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route>
              <Route path="/signUp" element={<SignUpPage />}></Route>
              <Route
                path="/signUp/password"
                element={<SignUpPassword />}
              ></Route>
            </Route>
          </Routes>
        </main>
      </SignUpProvider>
    </BrowserRouter>
  );
}

export default App;
