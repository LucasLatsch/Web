import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Task from "../../components/Task";
import NewTask from "../../components/NewTask";

const url = "https://6542c27001b5e279de1f8a8c.mockapi.io/tasklist";

const TaskList = () => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novaPrioridade, setNovaPrioridade] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(false);

  const cadastrar = async () => {
    const task = {
      title: novaTarefa,
      description: novaDescricao,
      prioridade: novaPrioridade,
      done: false,
    };
    try {
      const { data } = await axios.post(url, task);
      console.log(data);
      setTarefas([...tarefas, data]);
      setNovaTarefa("");
      setNovaDescricao("");
      setNovaPrioridade("");
    } catch (err) {
      console.log(err);
    }
  };

  const excluirTarefa = async (id) => {
    console.log("Excluir tarefa: ", id);
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      console.log(data);
      const novoArray = tarefas.filter((item) => item.id != id);
      setTarefas(novoArray);
    } catch (err) {
      console.log(err);
    }
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setTarefas(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  if (loading) return <h1 className="loading">Carregando.....</h1>;

  return (
    <>
      <div className="main">
        <section className="save-task">
          <h1 className="label-card">Cadastre sua tarefa</h1>
          <NewTask
            cadastrar={cadastrar}
            setNovaTarefa={setNovaTarefa}
            novaTarefa={novaTarefa}
            setNovaDescricao={setNovaDescricao}
            novaDescricao={novaDescricao}
            setNovaPrioridade={setNovaPrioridade}
            novaPrioridade={novaPrioridade}
          />
        </section>
        <section className="show-task">
          <h2>Lista de Tarefas</h2>
          <div className="task">
            {tarefas.map((item) => (
              <Task
                key={item.id}
                item={item}
                excluirTarefa={excluirTarefa}
              ></Task>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default TaskList;
