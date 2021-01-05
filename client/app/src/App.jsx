import React, { Component} from 'react'
import './App.scss';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Pokedex from './components/Pokedex';
import PokedexDetails from './components/PokedexDetails';



class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <div className="main-route-place">
          <Switch>
            <Route exact path="/" component={Pokemon} />
            <Route path="/pokemons/:id" component={PokedexDetails}/>
          </Switch> 
            {/* <Route exact path="/" component={Pokemon} />
            <Route path="/details" component={PokedexDetails} />
            <Route path="/Pokemons" component={Home} /> */}
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



 
export default App;

// FIN DU PROJECT （っ＾▿＾）