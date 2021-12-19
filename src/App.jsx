import "./styles/reset.css";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Inicio from "./components/Inicio";
import Sessoes from "./components/Sessoes";
import Assento from "./components/Assento";
import Sucesso from "./components/Sucesso";

export default function App() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />} ></Route>
                <Route path="/sessoes/:idFilme" element={<Sessoes />} ></Route>
                <Route path="/assento" element={<Assento />} ></Route>
                <Route path="/sucesso" element={<Sucesso />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}