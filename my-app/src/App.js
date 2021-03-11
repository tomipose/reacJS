import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ItemListContainer/>
      </div>
    );
  }
}



export default App;
