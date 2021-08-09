import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SetsPage from './pages/SetsPage'
import SetCardsPage from './pages/SetCardsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SetsPage} />
        <Route exact path='/cardsSet' component={SetCardsPage} />
      </Switch>
    </Router>
  );
}

export default App;

