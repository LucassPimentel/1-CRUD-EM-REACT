import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivStyle = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
const H1DivStyle = styled.div`
  margin-top: 5em;
  margin-bottom: 5em;
`
const ButtonStyle = styled.button`
background-color: #dcdcdc;
padding: 1em;
border-radius: 5px;
font-weight: bolder;
border: 1px solid white;
cursor: pointer;
transition: 1s;
box-shadow: 1px 1px 4px black;


&:hover {
  border: 1px solid black;
}
`

const SpanStyle = styled.span`
background-color: black;
color: white;
padding: 0.2em;
font-size: 1.2em;
border-radius: 5px;
transition: 1s;
box-shadow: 1px 1px 5px black;

`

const Home = () => {
  return (
    <DivStyle>
      <H1DivStyle>
        <h1><SpanStyle>Olá,</SpanStyle> seja bem vindo ao meu primeiro CRUD</h1>
      </H1DivStyle>
      <Link to={"/CreateUser"}>
        <ButtonStyle>Criar novo usuário</ButtonStyle>
      </Link>
    </DivStyle>
  );
};

export default Home;
