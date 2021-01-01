import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PokemonCard extends Component {
    render() {
        return (
           
            <div className="Card">
                 <Link to="/details">
            <img className='img' src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.image + '.png'} alt='Undefined' />
                    <div className='pokemon-card' id={this.props.id} >                        
                    <h1 className='h1'>{this.props.name}</h1>
                    <h2 className='h2'> #{this.props.id} </h2>
                    
                </div>
                </Link>
            </div>
           
            
        )
        
    }
}

export default PokemonCard