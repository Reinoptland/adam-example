import React, { Component } from 'react';

import MainForm from './components/searchForm/MainForm';
import SearchResults from './components/SearchResults';

class App extends Component {
  render() {
    return (
    	<div style={{width: '70%', margin: '0 auto'}}>
        <MainForm />
        <SearchResults />
        </div>
    );
  }
}

export default App;
