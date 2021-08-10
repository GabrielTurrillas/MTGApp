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
        <li><TitleLi>Name:</TitleLi> {cardName}</li>
        <li><TitleLi>Mana Cost:</TitleLi> {manaCost}</li>
        <li><TitleLi>Type:</TitleLi>{type}</li>
        <li><TitleLi>Rarity:</TitleLi> {rarity}</li>
        <li><TitleLi>Artist:</TitleLi>{artist}</li>
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
const TitleLi = styled.p`
  font-weight:bold;
`

