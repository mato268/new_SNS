import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import SignUpPage from "./SignUpPage";

function App() {
  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {}

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="signUP" element={<SignUpPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
