// import logo from './logo.svg';
import React from 'react';

import './App.css';

import Header from './Header.jsx';
import Content from './Content.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <> 
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
