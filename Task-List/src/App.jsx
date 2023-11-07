import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import TaskList from "./pages/TaskList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tarefa" element={<TaskList />} />
        <Route path="*" element={<h1>Pagina nao encontrada</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
