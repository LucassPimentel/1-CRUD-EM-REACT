import React, { useEffect } from "react";
import styledComponents from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

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
gap: 1em;
font-size: 1.2em;

`;
const MessageStyle = styledComponents.span`
font-size: 0.8em;
background-color: rgba(255, 0, 0, 0.473);
padding: 1px;
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
`

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    //PEGANDO AS INFORMAÇÕES PARA QUE AS MESMAS APAREÇAM NOS INPUTS
    axios.get(`http://localhost:5000/clients/${id}`).then((response) => {
      reset(response.data);
      // RESET PASSA OS DADOS PARA O INPUT DO CLIENTE QUE FOI CLICADO!
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleUpdateUser = (data) => {
    // ALTERANDO INFORMAÇÕES DO CLIENTE
    axios
      .put(`http://localhost:5000/clients/${id}`, data)
      .then(() => {
        alert("Cliente alterado!");
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
          <h1>Alterar usuário</h1>
        </div>
        <FormStyle onSubmit={handleSubmit(handleUpdateUser)}>
          {errors.name?.type === "required" && (
            <MessageStyle>Nome Obrigatório</MessageStyle>
          )}
          <label htmlFor="user-name">Nome:</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 50 })}
            name="name"
            id="user-name"
          />

          {errors.email?.type === "required" && (
            <MessageStyle>Email Obrigatório</MessageStyle>
          )}
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            {...register("email", { required: true, maxLength: 50 })}
            name="email"
            id="user-email"
          />
          {errors.dn?.type === "required" && (
            <MessageStyle>Data de Nascimento Obrigatória</MessageStyle>
          )}
          <label htmlFor="user-dn">Data de Nascimento:</label>
          <input
            type="date"
            {...register("dn", { required: true })}
            name="dn"
            id="user-dn"
          />
          <ButtonStyle type="submit">Alterar</ButtonStyle>
        </FormStyle>
        <Link to={"/Home"}>
          <ButtonStyle>Voltar</ButtonStyle>
        </Link>
      </DivContainerForm>
    </DivContainer>
  );
};
export default Edit;
