import React, { Component } from 'react';

import MainForm from './components/searchForm/MainForm';

class App extends Component {
  render() {
    return (
    	<div style={{width: '70%', margin: '0 auto'}}>
        <MainForm />
        </div>
    );
  }
}

export default App;
