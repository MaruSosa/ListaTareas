import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map(() => (
        <ItemTarea></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
