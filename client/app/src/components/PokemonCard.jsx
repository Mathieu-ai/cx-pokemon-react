import React, { Component } from 'react'
import { Link } from "react-router-dom";

class PokemonCard extends Component {
    render() {
        return (
           
            <div className="Card">
                 <Link to="/details">
                    <img className='img2' src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + this.props.image + '.png'} alt='Undefined' />                     
                    <div >
                        <h2>{this.props.name}</h2>
                    </div>
                    <div className="POK_ID">
                    <p className='caption'> <small>#{this.props.id}</small> </p>
                    </div>
                    <div className="POK_TYPE">
                        <h5>{this.props.type}</h5>
                    </div>
                    
                
                </Link>
            </div>
           
            
        )
        
    }
}

export default PokemonCard