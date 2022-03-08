import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import styledComponents from "styled-components";

const DivContainer = styledComponents.div`
 height: 90vh;
 display: flex;
 justify-content: center;
`;
const DivContainerForm = styledComponents.div`
margin-top: 5em;
background-color: #dcdcdc;
height:65vh;
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 5px;
box-shadow: 1px 1px 10px black;

`;
const FormStyle = styledComponents.form`
margin-top: 0.5em;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.3em;
font-size: 1.2em;
`;
const MessageStyle = styledComponents.span`
font-size: 0.8em;
background-color: rgba(255, 0, 0, 0.473);
// padding: 1px;
font-weight: bolder;
`;
const ButtonStyle = styledComponents.button`
padding: 8px;
width: 100px;
border-radius: 5px;
border: 1px solid white;
cursor: pointer;
transition: 1s;
margin-bottom: 15px;
box-shadow: 1px 1px 4px black;

&:hover {
  border: 1px solid black;
}
`;
const InputStyle = styledComponents.input`
padding: 0.4em;
border-radius: 5px;

`;

const CreateUser = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddUser = (data) => {
    axios
      .post("http://localhost:5000/clients", data)
      .then(() => {
        alert("Cliente cadastrado!");
        navigate("/Home");
      })
      .catch(() => {
        console.log("DEU RUIM");
      });
  };

  return (
    <DivContainer>
      <DivContainerForm>
        <div>
          <h1>Cadastrar Usuário</h1>
        </div>
        <FormStyle onSubmit={handleSubmit(handleAddUser)}>
          {errors.name?.type === "required" && (
            <MessageStyle>Nome Obrigatório</MessageStyle>
          )}
          <label htmlFor="user-name">Nome:</label>
          <InputStyle
            type="text"
            {...register("name", { required: true, maxLength: 50 })}
            name="name"
            id="user-name"
          />

          {errors.email?.type === "required" && (
            <MessageStyle>Email Obrigatório</MessageStyle>
          )}
          <label htmlFor="user-email">Email</label>
          <InputStyle
            type="email"
            {...register("email", { required: true, maxLength: 50 })}
            name="email"
            id="user-email"
          />
          {errors.dn?.type === "required" && (
            <MessageStyle>Data de Nascimento Obrigatória</MessageStyle>
          )}
          <label htmlFor="user-dn">Data de Nascimento:</label>
          <InputStyle
            type="date"
            {...register("dn", { required: true })}
            name="dn"
            id="user-dn"
          />
          <ButtonStyle type="submit">Enviar</ButtonStyle>
        </FormStyle>
        <Link to={"/Home"}>
          <ButtonStyle>Voltar</ButtonStyle>
        </Link>
      </DivContainerForm>
    </DivContainer>
  );
};

export default CreateUser;
