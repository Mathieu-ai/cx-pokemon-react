import React, { Component } from 'react';

function IdentityAttribute(props) {
    const pokemon = props.data; 
    let listItems = Object.keys(pokemon)
    .filter(p => p !== 'attaques')
    .filter(p => p !== 'nom')
    .filter(p => p !== 'numéro')
    
    
    //.map( <PokemonAttribute name={p} value={this.state.pokemon[p]} />)
        .map( p =>  
            <li>
                {p + ' = ' + pokemon[p]}
            </li>
        );
    return (
      <ul>{listItems}</ul>
    );
   
}

function AttaqueAttribute(props) {
    const attaque = props.data;
    let listItems = Object.keys(attaque||{})
        .map( p =>  
            <li>
                {p + '= ' + attaque[p]}
            </li>
        );
    return (
      <ul>{listItems}</ul>
    );
}
// 
function Attaques( { list } ) {
    return (
        <div>
          {list.map( (attaque,indice) => (
            <div>
                <h1>{indice+1}</h1>
                <AttaqueAttribute data={attaque}/>
            </div>
          ))}
        </div>
      );
}


class PokedexDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {pokemon: {} , nom:"vide"}        
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/pokemons/001')
        const pokemon = await response.json()

        this.setState( {pokemon} );
        this.setState( { nom : pokemon.nom } );
    }
// 
//<AttaquesAttribute data={this.state.pokemon.attaques && this.state.pokemon.attaques[0]}/>
    render() {
        return (
<div>            
            
            <div>
                <svg viewBox="0 0 960 300">
	                <symbol id="s-text">
		                <text text-anchor="middle" x="50%" y="80%">{this.state.pokemon.nom}</text>
	                </symbol>

	            <g class = "g-ants">
		            <use xlinkHref="#s-text" class="text-copy"></use>
		            <use xlinkHref="#s-text" class="text-copy"></use>
		            <use xlinkHref="#s-text" class="text-copy"></use>
		            <use xlinkHref="#s-text" class="text-copy"></use>
		            <use xlinkHref="#s-text" class="text-copy"></use>
	            </g>
                </svg>
            </div>

            <div>


                
            </div>

            <div className='imgDetails'>
                        < img id="imagePok" src= {'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' 
                        + this.state.pokemon.numéro + '.png'} alt='Undefined' />
            </div>
            

                <div className='Identity'>
                    <IdentityAttribute data={this.state.pokemon}/>
                </div>
                <div className='Attaques'>
                    <Attaques list ={ this.state.pokemon.attaques || [] }/>
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