import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import LogIn from "./LogIn";

function App() {
  return (
    <BrowserRouter>
      <body className="flex justify-center">
        <main className="flex justify-center w-screen h-screen">
          <Routes>
            <Route path="LogIn" element={<LogIn />}></Route>
            <Route path="signUP" element={<SignUpPage />}></Route>
          </Routes>
        </main>
      </body>
    </BrowserRouter>
  );
}

export default App;
