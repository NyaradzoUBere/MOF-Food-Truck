import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home'

class App extends React.Component {

  componentDidMount() {
    document.title = "Muzo on Fire";
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
