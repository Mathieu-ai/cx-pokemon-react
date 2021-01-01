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
<div>
            <div>
                
                <input className='search_bar' type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
                <div className="search">
                </div>                
            <div className='Pokedex'>
                { this.state.pokemons
                    .filter(pokemon => { return !this.state.value || new RegExp(this.state.value).test( pokemon[NOM] )? true:false})                   
                    .map(pokemon => ( <PokemonCard id={pokemon.Numéro} name={pokemon[NOM]} type={pokemon.Type} image={pokemon.Numéro} /> ))}                
            </div>
            </div>
</div>
        )       
    }    
}

export default Pokedex;