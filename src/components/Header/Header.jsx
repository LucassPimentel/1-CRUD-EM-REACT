import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyle = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 2px 10px black;
`;

const UlStyle = styled.ul`
  display: flex;
  gap: 10em;
  list-style: none;
`;

const TittleStyle = styled.h1`
background-color: black;
padding: 0.3em;
color: white;
border-radius: 5px;
transition: 1s;
font-size: 2em;

&:hover {
  background-color: white;
  color: black;
}

`

const Header = () => {
  return (
    <header>
      <NavStyle>
        <Link to="/Home">
          <TittleStyle>CRUD</TittleStyle>
        </Link>
        <UlStyle>
          <Link to="/Home">
            <li>Início</li>
          </Link>
          <Link to="/Clients">
            <li>Clientes</li>
          </Link>
        </UlStyle>
      </NavStyle>
    </header>
  );
};

export default Header;
