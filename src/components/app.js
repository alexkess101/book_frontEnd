import React, { Component } from 'react';
import BookIndex from './bookIndex';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp react starter</h1>
        <BookIndex />
        
      </div>
    );
  }
}
