import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function PokemonCard({ id, name, image }) {
  return (
    <Link to={`/detalle/${id}`}>
      <CardStyled>
        <TitleStyled>
          {id}: {name}
        </TitleStyled>
        <ImageStyled src={image} alt={name}></ImageStyled>
      </CardStyled>
    </Link>
  );
}
//contenedor
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  /* height: 200px; */
  margin: 1rem;
  border: 1px solid rgb(250, 250, 250);
  overflow: hidden;
  padding: 10px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

// titulo
const TitleStyled = styled.h1`
  font-size: 1.5rem;
`;

//
const ImageStyled = styled.img`
  object-fit: cover;
  width: 200px;
`;
