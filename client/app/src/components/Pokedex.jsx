import React, { Component } from 'react';

import PokemonCard from './PokemonCard';

const NOM = "Nom (FR)"

class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {pokemons: [], value: ''}
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/pokemons')
        const pokemons = await response.json()

        this.setState({ pokemons })
    }

    render() {
        return (
<div >

    <div className="SEARCH-PARENT">
        <div className="SEARCH_CHILD">
            <div class="SEARCH_BOX">
                <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange}></input>
                    <div class="search">
                    </div>
            </div>
        </div>
    </div>


    <div className="ALL_POK">    
        <body className="BODY_POK">
            <div className='Pokedex'>
                { this.state.pokemons
                    .filter(pokemon => { return !this.state.value || new RegExp(this.state.value).test( pokemon[NOM] )? true:false})                   
                    .map(pokemon => ( <PokemonCard id={pokemon.Numéro} name={pokemon[NOM]} type={pokemon.Type} image={pokemon.Numéro} /> ))}                
            </div>
        </body>
    </div>
</div>
            

        )       
    }    
}

export default Pokedex;

// FIN DU PROJECT (👍≖‿‿≖)👍 👍(≖‿‿≖👍)