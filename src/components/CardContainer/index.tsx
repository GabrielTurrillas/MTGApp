import React from 'react';
import styled from 'styled-components';

interface CardContainerI {
  cardName: string
  src: string
  manaCost: string
  type: string
  rarity: string
  artist: string
}


const CardContainer: React.FC<CardContainerI> = ({
  cardName,
  src,
  manaCost,
  type,
  rarity,
  artist,
}) => {
  return (
    <Container>
      <ImgWrapper>
        <img src={src} alt={cardName} />
      </ImgWrapper>
      <InfoUl>
        <li><TitleP>Name:</TitleP> {cardName}</li>
        <li><TitleP>Mana Cost:</TitleP> {manaCost}</li>
        <li><TitleP>Type:</TitleP>{type}</li>
        <li><TitleP>Rarity:</TitleP> {rarity}</li>
        <li><TitleP>Artist:</TitleP>{artist}</li>
      </InfoUl>
    </Container>
  )
}

export default CardContainer

const ImgWrapper = styled.div`
  height:100%;
`

const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  grid-column-gap:1rem;
  width:100%;
  height:100%;
  font-weight:500;
  @media (max-width: 460px){
    font-size: .5rem;
  }
  `

const InfoUl = styled.ul`
  margin-top:1rem;
  list-style:none;
`
const TitleP = styled.p`
  font-weight:bold;
`

