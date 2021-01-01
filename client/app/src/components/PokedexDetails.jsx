import React, { Component } from 'react';


function IdentityAttribute(props) {
    const pokemon = props.data; 
    let listItems = Object.keys(pokemon)
    .filter(p => p !== 'Attaques')
    .filter(p => p !== 'Nom')
    .filter(p => p !== 'Numéro')
    .filter(p => p !== 'Talent')
    
    
    //.map( <PokemonAttribute name={p} value={this.state.pokemon[p]} />)
        .map( p =>  
            <div className='pokemonAttribute'>
                <span className="AttributeName"> {p} </span>
                <span className="AttributeValue"> {pokemon[p]} </span>
            </div>
        );
    return (
      listItems
    );
   
}

function AttaqueAttribute(props) {
    const attaque = props.data;
    let listItems = Object.keys(attaque||{})
        .map( p =>  
            <div className='ATTAQUES'>
                <span className="pAtt"> {p} </span>
                <span className="AttaqueP"> {attaque[p]} </span>
            </div>
        );
    return (
      <ul>{listItems}</ul>
    );
}
// 
function Attaques( { list } ) {
    return (
        <div>
          {list.map( (attaque) => (
            <div className="AttTemp">
                <AttaqueAttribute data={attaque}/>
            </div>
          ))}
        </div>
      );
}

const NOM = "Nom (FR)"
class PokedexDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {pokemon: {} , nom:"vide"}        
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/pokemons/001')
        const pokemon = await response.json()

        this.setState( {pokemon} );
        this.setState( { nom : pokemon[NOM] } );
    }
// 
//<AttaquesAttribute data={this.state.pokemon.attaques && this.state.pokemon.attaques[0]} 2/>
    render() {
        return (
<div>            
            <div>  
                <div>
                </div>
                <svg viewBox="0 0 960 300">
	                <symbol id="s-text">
		                <text textAnchor="middle" x="50%" y="80%">{this.state.pokemon[NOM]}</text>
	                </symbol>

	            <g className = "g-ants">
		            <use xlinkHref="#s-text" className="text-copy"></use>
		            <use xlinkHref="#s-text" className="text-copy"></use>
		            <use xlinkHref="#s-text" className="text-copy"></use>
		            <use xlinkHref="#s-text" className="text-copy"></use>
		            <use xlinkHref="#s-text" className="text-copy"></use>
	            </g>
                </svg>
            </div>

            <div className='Numéro'>
                <main>
                    <span>
                        <p>
                            #{this.state.pokemon.Numéro}
                        </p>
                    </span>
                </main>                
            </div>

            <div className="TABLE">
                <table class="container">
	                <thead>
		                <tr>
			                <th><h1>Identité</h1></th>
		                </tr>
	                </thead>
	                    <tbody>
	    	                <tr>
			                    <td className="TD"><IdentityAttribute data={this.state.pokemon}/></td>
		                    </tr>
	                    </tbody>
                </table>
            </div>

            <div className='imgDetails'>
                        < img id="imagePok" src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' 
                        + this.state.pokemon.Numéro + '.png'} alt='Undefined' />
            </div>
            
                <div className='Attaques'>
                    <Attaques list ={ this.state.pokemon.Attaques || [] }/>
                </div>
            
                    
                
</div>
    
        )       
    }    
}

export default PokedexDetails;

/*
                { 
                    Object.keys(this.state.pokemon).filter(p => p !== 'attaques').map
                        //( <PokemonAttribute name={p} value={this.state.pokemon[p]} />)
                        ( p =>  p + '= ' + this.state.pokemon[p]).join()
                         )
                } 

                
            <div>{ (this.state.pokemon.attaques || []).map(attaque =>  
                Object.keys(attaque || {}).map
                    ( p =>  p + '= ' + attaque[p]).join() ).join() }
            </div>    
                */