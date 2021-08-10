import React from 'react';
import styled from 'styled-components';

interface CardContainerI {
  cardName: string
  src: string
}


const CardContainer: React.FC<CardContainerI> = ({
  cardName,
  src,
}) => {
  return (
    <Container>
      <ImgWrapper>
        <img src={src} alt={cardName} />
      </ImgWrapper>
      <p>Name: {cardName}</p>
    </Container>
  )
}

export default CardContainer

const ImgWrapper = styled.div`
  background-color:blue;
  height:100%;
`

const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  background-color:red;
  width:100%;
  height:100%;
  font-family: 'Roboto', sans-serif;
  font-weight:500;
`
