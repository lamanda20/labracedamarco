import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LanguageProvider } from './contexts/LanguageContext';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import './App.css';
import './restaurant-animations.css';

const App = () => (
  <LanguageProvider>
    <Router>
      <Switch>
        {/* Show a single "Under Construction" page for the whole site while building */}
        <Route component={UnderConstruction} />
      </Switch>
    </Router>
  </LanguageProvider>
);

export default App;
