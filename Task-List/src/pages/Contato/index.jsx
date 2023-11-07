import { useNavigate } from "react-router-dom";

function Contato() {
  const navigate = useNavigate();
  const parametro = "Eu sou um Parametro";
  const handleClick = () => {
    navigate("/login/" + parametro);
  };
  return (
    <>
      <h1>Pagina de contatos</h1>
      <button className="item-login" onClick={handleClick}>
        Testar
      </button>
    </>
  );
}

export default Contato;
