import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styledComponents from "styled-components";
const DivContainer = styledComponents.div`
height: 100vh;
margin: auto 60px 10px 60px;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;
const DivStyle = styledComponents.div`
  height: 210px;
  width: 350px;
  background-color: #dcdcdc;
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  gap: 0.5em;
  border-radius: 5px;
  box-shadow: 1px 1px 10px black;

`;
const DivButton = styledComponents.div`
display: flex;
justify-content: center;
gap: 1em;
`;
const Button = styledComponents.button`
padding: 8px;
width: 100px;
border-radius: 5px;
border: 1px solid white;
cursor: pointer;
transition: 1s;
box-shadow: 1px 1px 4px black;

&:hover {
  border: 1px solid black;
}
`;
const SpanStyle = styledComponents.span`
font-size: 1.3em;
margin: 6px;
`;

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // FUNÇÃO QUE SÓ SERÁ EXECUTADA DEPOIS QUE O COMPONENTE FOR RENDERIZADO
    axios
      .get("http://localhost:5000/clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => console.log("DEU RUIM"));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/clients/${id}`);

    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <DivContainer>
      {clients.length === 0 && <h1>Não há clientes cadastrados...</h1>}

      {clients.map((client) => {
        return (
          <DivStyle key={client.id}>
            <SpanStyle>Cliente: {client.name}</SpanStyle>
            <SpanStyle>Email: {client.email} </SpanStyle>
            <SpanStyle>Data de Nascimento: {client.dn}</SpanStyle>
            <DivButton>
              <Link to={{ pathname: `/Edit/${client.id}` }}>
                <Button>Alterar</Button>
              </Link>
              <Button onClick={() => deleteUser(client.id)}>Excluir</Button>
            </DivButton>
          </DivStyle>
        );
      })}
    </DivContainer>
  );
};

export default Clients;
