import React from 'react';
import { CardsType } from '../../state/actions'

const SetCardsPage: React.FC<CardsType> = ({
  cards
}) => {
  return (
    <div>
      {cards.map(card => <img src={card.imageUrl} />)}
    </div>
  )
}

export default SetCardsPage
