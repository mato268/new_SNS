import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LogIn from "./LogIn";

function App() {
  return (
    <BrowserRouter>
      <main className="flex justify-center h-screen">
        <Routes>
          <Route path="LogIn" element={<LogIn />}></Route>
          <Route path="signUP" element={<SignUpPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
