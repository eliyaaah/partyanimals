import React, { Component } from 'react';
import './styles/styles.scss';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import VenueList from './components/VenueList.js';
import GuestList from './components/GuestList.js';


class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedVenueId: null
    };
  }

  setSelectedVenue = (venueId) => {
    console.log(venueId);
    this.setState({
      selectedVenueId: venueId
    });
  }

  render() {
    return (
      <div className="appComponent">
        <Header 
          title="Party Animals"
          message="Animals who Party!"
        />
        <main className="wrapper">
          <VenueList setSelectedVenue= { this.setSelectedVenue }/>
          <GuestList selectedVenueId={ this.state.selectedVenueId } />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
