const NewTask = ({
  cadastrar,
  setNovaTarefa,
  novaTarefa,
  setNovaDescricao,
  novaDescricao,
  setNovaPrioridade,
  novaPrioridade,
}) => {
  return (
    <>
      <input
        placeholder="Titulo"
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <input
        placeholder="Descrição"
        type="text"
        value={novaDescricao}
        onChange={(e) => setNovaDescricao(e.target.value)}
      />
      <input
        placeholder="Prioridade"
        type="text"
        value={novaPrioridade}
        onChange={(e) => setNovaPrioridade(e.target.value)}
      />
      <button className="btn-task" onClick={cadastrar}>
        Cadastrar
      </button>
    </>
  );
};

export default NewTask;
