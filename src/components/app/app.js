import React from 'react';
import AppHeader from '../app-header';
import AppJumbotron from '../app-jumbotron';
import AppServices from '../app-services';
import AppPortfolio from '../app-portfolio';
import AppContact from '../app-contact';
import AppFooter from '../app-footer';
import AppCarousel from '../app-carousel';
import './app.css';

const App = () => {
  return(
    <div className="app-css">
      <AppHeader />
      <AppJumbotron />
      <AppCarousel />
      <AppServices />
      <AppPortfolio />
      <AppContact />
      <AppFooter  />
    </div>
  );
}

export default App;
