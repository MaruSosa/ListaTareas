import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
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
    </section>
  );
};

export default FormularioTareas;
