import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { RootStore } from '../../state/store';
import { getAllSetCards } from '../../state/action-creators'
import CardContainer from '../../components/CardContainer'

interface LocationI {
  code: string
  page: number
}

const SetCardsPage: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation<LocationI>();
  const cards = useSelector((state: RootStore) => state.cardsReducer.cards);
  const cardsHeaders = useSelector((state: RootStore) => state.cardsReducer.headers);
  const { code, page } = location.state;
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0); //Total Count of cards in a Set
  const count = 100 //Count of cards in a Page

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
      pages.push(<Link to={{ pathname: '/cardsSet', state: { code: code, page: i + 1 } }} key={i}>{i + 1}</Link>)
    }
    return pages
  }

  const pages: liType[] = pagination()

  return (
    <Gallery>
      {cards?.cards.map(card => {
        return <Featured>
          <CardContainer
            key={card.id}
            src={card.imageUrl}
            cardName={card.name}
          />
        </Featured>
      })}
      <ul>{pages}</ul>
    </Gallery>
  )
}

export default SetCardsPage

const Gallery = styled.div`
  display:grid;
  gap: 1rem;
  grid-auto-rows: 30rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;

const Featured = styled.div`
  display:flex;
  grid-column:span 2;
  border:2px solid black;
`