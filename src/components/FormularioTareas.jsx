// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import {Button, Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormularioTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Ingresa tus Tareas:</Form.Label> */}
          <Form.Control type="text" placeholder="Ej: tarea1" minLength={3} maxLength={50} />
          <Button variant='info'className='mx-2' type='submit'>Agregar</Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
