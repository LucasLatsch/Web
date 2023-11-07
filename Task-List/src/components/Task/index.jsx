import { FaTrashAlt } from "react-icons/fa";

const Task = ({ item, excluirTarefa }) => {
  return (
    <div className="task-field">
      <div>
        <h3 className="item-task">{item.title}</h3>
        <h3 className="item-task">{item.description}</h3>
        <h3 className="item-task">{item.prioridade}</h3>
      </div>
      <button className="btn-delete" onClick={() => excluirTarefa(item.id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Task;
