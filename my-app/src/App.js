import { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import Appfunc from './funcionapp/Appfunc'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <Appfunc/>
      </div>
    );
  }
}



export default App;
