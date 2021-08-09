import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './state/store';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { getAllSets, getAllSetCards } from './state/action-creators';
import SetsPage from './pages/SetsPage'
import { SetsType } from './state/actions';

const App: React.FC = () => {
  const dispatch = useDispatch()
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
    <Router>
      <Switch>
        <Route exact path='/'>
          <SetsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

