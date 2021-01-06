import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PokemonCard extends Component {
    render() {
        return (
           
            <div className="Card" >
                 <Link to={`/pokemons/${this.props.id}` } style={{ textDecoration: 'none' }}>
                    <img className='img2' src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.image + '.png'} alt='Undefined' />                     
                    <div >
                        <h2>{this.props.name}</h2>
                    </div>
                    <div className="POK_ID">
                        #{this.props.id}
                    </div>
                    
                    <div className = 'Pok_Type'>
                        <small class>{this.props.type}</small>
                    </div>
                </Link>
            </div>  
        ) 
    }
}

export default PokemonCard

