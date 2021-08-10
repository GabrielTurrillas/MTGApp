import React from 'react';
import styled from 'styled-components';

interface CardContainerI {
  cardName: string
  src: string
  manaCost: string
  type: string
  rarity: string
  artist: string
  originalText: string
}


const CardContainer: React.FC<CardContainerI> = ({
  cardName,
  src,
  manaCost,
  type,
  rarity,
  artist,
  originalText,
}) => {
  return (
    <Container>
      <ImgWrapper>
        <img src={src} alt={cardName} />
      </ImgWrapper>
      <ul>
        <li>Name: {cardName}</li>
        <li>Mana Cost: {manaCost}</li>
        <li>Type: {type}</li>
        <li>Rarity: {rarity}</li>
        <li>Artist: {artist}</li>
        <li>Original Text: {originalText}</li>
      </ul>
    </Container>
  )
}

export default CardContainer

const ImgWrapper = styled.div`
  //background-color:blue;
  height:100%;
`

const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  //background-color:red;
  width:100%;
  height:100%;
  font-family: 'Roboto', sans-serif;
  font-weight:500;
`
