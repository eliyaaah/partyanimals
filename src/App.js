import React, { Component } from 'react';
import './styles/styles.scss';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <main>
      <Header />
      <Footer />
      </main>
    );
  }
}

export default App;
