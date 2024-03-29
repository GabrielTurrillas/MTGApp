import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BounceLoader } from 'react-spinners'
import { css } from '@emotion/core'

import { RootStore } from '../../state/store';
import { getAllSetCards } from '../../state/action-creators'
import CardContainer from '../../components/CardContainer'

interface LocationI {
  code: string
  setName: string
  page: number
}

const SetCardsPage: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<LocationI>();
  const { cards, loading } = useSelector((state: RootStore) => state.cardsReducer);
  const cardsHeaders = useSelector((state: RootStore) => state.cardsReducer.headers);
  const { code, page, setName } = location.state;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0); //Total Count of cards in a Set
  const count = 100  //Count of cards in a Page

  useEffect(() => {
    dispatch(getAllSetCards(code, page))
  }, [code, page, dispatch])


  //Pagination TotalCount / Count trunkated + 1
  useEffect(() => {
    if (cardsHeaders) {
      setTotalCount(cardsHeaders?.['total-count'])
    }
    if (cardsHeaders && totalCount % count !== 0) {
      console.log(cardsHeaders, '!== 0')
      setNumberOfPages(Math.trunc(totalCount / count) + 1)
    } else if (cardsHeaders && totalCount % count === 0) {
      setNumberOfPages(totalCount / count)
    } else {
      console.log(cardsHeaders, '0')
      setNumberOfPages(0)
    }
  }, [cardsHeaders, totalCount])


  type liType = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

  const pagination = (): liType[] => {
    let pages: liType[] = []
    for (let i = 0; i < numberOfPages; i++) {
      pages.push(<PageButton
        to={{
          pathname: '/cardsSet',
          state: {
            code: code,
            page: i + 1,
            setName: setName
          }
        }}
        key={i}>{i + 1}</PageButton>)
    }
    return pages
  }

  const loaderCss = css`
    justify-self:center;
    margin-top:8rem;
  `

  const pages: liType[] = pagination()

  return (
    <Container>
      <TitleWrapper>
        <Title>{setName}</Title>
      </TitleWrapper>
      {loading ?
        <BounceLoader css={loaderCss} size={400} loading /> :
        <>
          <Gallery>
            {cards?.cards.map(card => {
              return <Featured key={card.id} >
                <CardContainer
                  src={card.imageUrl}
                  cardName={card.name}
                  manaCost={card.manaCost}
                  type={card.type}
                  rarity={card.rarity}
                  artist={card.artist}
                />
              </Featured>
            })}
          </Gallery>
          <PaginationWrapper>
            {pages}
          </PaginationWrapper>
        </>
      }
    </Container>
  )
}

export default SetCardsPage

const Title = styled.h1`
  text-align:center;
  padding:2rem 0;
  border-radius:10px;
  width:25rem;
  box-shadow: 0 8px 8px 4px lightblue;
`

const TitleWrapper = styled.div`
  display:flex;
  justify-content:center;
  padding:2rem;
  `

const Container = styled.div`
  display:grid;
  padding:0 4rem;
  @media (max-width: 1300px){
    padding:0rem 0rem;
  }
`

const Gallery = styled.div`
  display:grid;
  gap: 1rem;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 5fr));
`;

const Featured = styled.div`
  display:flex;
  grid-column:span 2;
  border-radius:10px;
  box-shadow: 0 8px 8px 4px lightblue;
`

const PaginationWrapper = styled.div`
  display:grid;
  column-gap: 3rem;
  padding:4rem 0;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(auto-fill, minmax(1rem, 2fr));
`

const PageButton = styled(Link)`
  padding-top:16px;
  padding-bottom:16px;
  padding-right:30px;
  padding-left:21px;
  border-radius:3px;
  text-decoration:none;
  color:black;
  box-shadow: 0 8px 8px 4px lightblue;
  transition:0.2s;
  &:hover{
    transform: scale(1.1);
    &:active{
      transform: scale(0.9)
    }
  }
`