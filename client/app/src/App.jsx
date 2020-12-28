import React, { Component} from 'react'
import './App.css';
import { BrowserRouter, Route,} from "react-router-dom";
import Pokedex from './components/Pokedex';
import PokedexDetails from './components/PokedexDetails';



class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <div className="main-route-place">
            <Route exact path="/" component={Pokemon} />
            <Route path="/details" component={PokedexDetails} />
            <Route path="/Pokemons" component={Home} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}
class Pokemon extends Component {
  render() {
    return (
      <Pokedex/>
    )
  }
} 
class Home extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}
 
class About  extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}



 
export default App;
