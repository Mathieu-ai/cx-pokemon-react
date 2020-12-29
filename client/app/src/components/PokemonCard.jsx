import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PokemonCard extends Component {
    render() {
        return (
            <Link to="/details">
                <div>
                <img className='img' src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.image + '.png'} alt='Undefined' />
                </div>
            <div className="Card">
                    <div className='pokemon-card' id={this.props.id} >                        
                    <h1 className='h1'> {this.props.name}</h1>
                    <h2 className='h2'> #{this.props.id} </h2>
                    
                </div>
            </div>
            </Link>
            
        )
        
    }
}

export default PokemonCard