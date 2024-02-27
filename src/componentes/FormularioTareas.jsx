// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import ListaTareas from "./ListaTareas";
const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('desde el evento submit')
    // tareas.push(asd)
    setTareas([...tareas,tarea])
    //limpiar el formulario
    setTarea('');
  }
  const borrarTarea= (nombreTarea)=>{
    const copiaTareas= tareas.filter((tarea)=>tarea !== nombreTarea); //conserva todas las tareas menos la tarea que quiero borrar
    setTareas(copiaTareas);
  
  }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          {/* <Form.Label>Ingresa tus Tareas:</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Ej: tarea1"
            minLength={3}
            maxLength={50}
            onChange={(e)=>setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="info" className="mx-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
