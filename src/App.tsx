import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './state/store';
import { getAllSets, getAllSetCards } from './state/action-creators';

const App: React.FC = () => {

  const dispatch = useDispatch()
  //const sets = useSelector((state: RootStore) => state.setsReducer.sets);
  const cards = useSelector((state: RootStore) => state.cardsReducer.cards);
  const cardsHeaders = useSelector((state: RootStore) => state.cardsReducer.headers)

  useEffect(() => {
    dispatch(getAllSets());
    dispatch(getAllSetCards('lea'))
  }, [dispatch])

  let pageNumber: number = 0

  cardsHeaders ? pageNumber = cardsHeaders['total-count'] / cardsHeaders.count : pageNumber = 0
  cardsHeaders && cardsHeaders['total-count'] % cardsHeaders.count !== 0 ? pageNumber = Math.trunc(pageNumber) + 1 : pageNumber += 0

  type liType = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

  const pagination = (): liType[] => {
    let pages: liType[] = []
    for (let i = 0; i < pageNumber; i++) {
      pages.push(<li key={i}>{i + 1}</li>)
    }
    return pages
  }

  return (
    <div className="App">
      {cards?.cards.map(card => {
        return <img src={card.imageUrl} alt={card.name} />
      })}
      {<ul>{pagination()}</ul>}
    </div>
  );
}

export default App;

//{sets?.sets.map(set => {
//  return <p key={set.code}>{set.name} {set.code}</p>
//})}
//Limited Edition Alpha LEA
