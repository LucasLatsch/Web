import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./login.css";

const dados = {
  login: "LucasLatsch",
  senha: "123456",
};

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const { parametro } = useParams();

  // function entrar(){} ou
  const entrar = () => {
    console.log("Função entrar");
    if (login == "" || senha == "") {
      console.log("Preencha todos os campos");
    } else if (login == dados.login && senha == dados.senha) {
      console.log("Login realizado com sucesso!");
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);

      localStorage.setItem("info", JSON.stringify(info));

      setLogin("");
      setSenha("");

      navigate("/tarefa");
    } else {
      console.log("Credenciais invalidas, tente novamente!");
    }
  };

  return (
    <div className="main-card">
      <div className="card-left">
        <h1 className="label-login">Espaço para a logo</h1>
      </div>
      <div className="card-rigth">
        <form className="card-login">
          <h1 className="label-login">Bem Vindo!</h1>
          <div className="textfield">
            <label className="label" htmlFor="usuario">
              Usuário
            </label>
            <input
              className="input-login"
              type="text"
              placeholder="Digite seu nome ou email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="textfield">
            <label className="label" htmlFor="senha">
              Senha
            </label>
            <input
              className="input-login"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button className="btn" type="button" onClick={entrar}>
            Entrar
          </button>
        </form>
      </div>
      {/* <Nav /> */}
    </div>
  );
}
