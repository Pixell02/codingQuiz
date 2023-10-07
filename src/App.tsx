import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useSelectedValueContext from "../hooks/useSelectedValueContext";
import "./App.css";
import Add from "./pages/Add/Add";
import Main from "./pages/Main/Main";
import Quiz from "./pages/Quiz/Quiz";

function App() {

  const {selectedValues} = useSelectedValueContext();

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={selectedValues.language ? <Add/> : <Navigate to={"/"} />} />
        <Route path="/quiz" element={selectedValues.language ? <Quiz /> : <Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
