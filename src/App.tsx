import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SetsPage from './pages/SetsPage'
import SetCardsPage from './pages/SetCardsPage';
import { createGlobalStyle } from 'styled-components';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={SetsPage} />
        <Route exact path='/cardsSet' component={SetCardsPage} />
      </Switch>
    </Router>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
} 
#root {
  margin:0 auto;
}
`

