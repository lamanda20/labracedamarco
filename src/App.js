import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, ScrollToTop } from './components';
import { LanguageProvider } from './contexts/LanguageContext';
import FullGallery from './container/FullGallery/FullGallery';
import './App.css';
import './restaurant-animations.css';

const HomePage = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    <ScrollToTop />
  </div>
);

const App = () => (
  <LanguageProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/gallery" component={FullGallery} />
      </Switch>
    </Router>
  </LanguageProvider>
);

export default App;
