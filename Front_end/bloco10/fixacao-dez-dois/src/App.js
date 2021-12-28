// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Image from './image.js'

class App extends React.Component {
  render() {
    return (
      <>
        <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='gatinho'/>
      </>
    );
  }
}

export default App;
