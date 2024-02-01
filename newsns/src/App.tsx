import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./LogIn";
import SignUpPage from "./SignUpPage";

function App() {

  return (
    <BrowserRouter>
      <main className="flex justify-center">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="signUP" element={<SignUpPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
