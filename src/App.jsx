import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Container className="my-4 contenedorPrincipal">
        <h1 className="text-center display-1">Lista de Tareas</h1>
        <FormularioTareas></FormularioTareas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
