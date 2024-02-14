import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LogIn from "./LogIn";
import SignUpPassword from "./SignUpPassword";

function App() {
  return (
    <BrowserRouter>
      <main className="w-full flex max-w-md min-w-sm justify-center h-full">
        <Routes>
          <Route path="logIn" element={<LogIn />}></Route>
          <Route path="signUp" element={<SignUpPage />}></Route>
          <Route path="signUpPassword" element={<SignUpPassword />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
