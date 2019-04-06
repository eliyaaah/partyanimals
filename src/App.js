import React, { Component } from 'react';
import './styles/styles.scss';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import VenueList from './components/VenueList.js'

class App extends Component {
  render() {
    return (
      <div className="appComponent">
        <Header 
          title="Party Animals"
          message="Animals who Party!"
        />
        <main className="wrapper">
          <VenueList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
