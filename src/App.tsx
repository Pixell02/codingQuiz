import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./pages/Add/Add";
import Main from "./pages/Main/Main";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add/>} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
