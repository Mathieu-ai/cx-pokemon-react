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
                <br></br>
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
                <div className='AttAttributs'>
                    <div className='AttProps'> {p} </div>
                    <div > {attaque[p]} </div>
                </div>
        );
    return (
      <div>{listItems}</div>
    );
}

function Attaques( { list } ) {
    return (
            <div className="AttAttaques">
                {list.map( (attaque) => (
                    <div className="AttAttaque">
                        <AttaqueAttribute data={attaque}/>
                    </div>
                ))}
            </div>
        
      );
}

const NOM = "Nom (FR)"
const NOM2 = "Nom (EN)"
const NOM3 = "Nom (JA)"
const NOM4 = "Nom (TM)"
const NOM5 = "Nom (DE)"
const espece = "Espèce"
const taille = "Taille"
const poids = "Poids"
const type = "Type"
const couleur = "Couleur"
const forme = "Forme"
class PokedexDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {pokemon: {} , nom:"vide"}        
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await fetch('http://localhost:8080/pokemons/'+id)
        const pokemon = await response.json()
        
        this.setState( {pokemon} );
        this.setState( { nom : pokemon[NOM] } );
    }



//<AttaquesAttribute data={this.state.pokemon.attaques && this.state.pokemon.attaques[0]} 2/>
    render() {
        return (
<div>        

    <div >
                  
        <div class="headingWrapper">
            <a href="" class="header header--pushDown header--shadow" title="INCROYABLE NON?">{this.state.pokemon[NOM]}</a>
            <div className="ID">
                <h6 data-heading="#">{this.state.pokemon.Numéro}</h6>
            </div> {/*DIV DE POKEMON_ID*/}
        </div>
    </div>
    <div class = "gallery">
            <div class="clipped-border">
                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
                    + this.state.pokemon.Numéro + '.png'} id="clipped" alt='Undefined' ></img>
            </div>
        </div>  
    

            
    <div>
        <p className="Text_Attributs">Attributs</p>
        <hr class="shine_Attributs"></hr>
        <table class="TABLE_PARENT_ATTRIBUTS">	        
	    <tbody>
		    <tr>
		    	<td className="QUESTION">NOM (FR)</td>
		    	<td className="ANSWER">{this.state.pokemon[NOM]}</td>
		    	<td className="QUESTION">Éspèce</td>
		    	<td className="ANSWER">{this.state.pokemon[espece]}</td>
		    </tr>
		    <tr>
		    	<td className="QUESTION">NOM (EN)</td>
		    	<td className="ANSWER">{this.state.pokemon[NOM2]}</td>
		    	<td className="QUESTION">Taille</td>
		    	<td className="ANSWER">{this.state.pokemon[taille]}</td>
		    </tr>
		    <tr>
		    	<td className="QUESTION">NOM (JA)</td>
		    	<td className="ANSWER">{this.state.pokemon[NOM3]}</td>
		    	<td className="QUESTION">Poids</td>
		    	<td className="ANSWER">{this.state.pokemon[poids]}</td>
		    </tr>
            <tr>    
		    	<td className="QUESTION">NOM (TM)</td>
		    	<td className="ANSWER">{this.state.pokemon[NOM4]}</td>
		    	<td className="QUESTION">Type</td>
		    	<td className="ANSWER">{this.state.pokemon[type]}</td>
		    </tr>
            <tr>    
		    	<td className="QUESTION">NOM (DE)</td>
		    	<td className="ANSWER">{this.state.pokemon[NOM5]}</td>
		    	<td className="QUESTION">Couleur</td>
		    	<td className="ANSWER">{this.state.pokemon[couleur]}</td>
		    </tr>
            <tr>    
		    	<td> </td>
		    	<td> </td>
		    	<td className="QUESTION">Forme</td>
		    	<td className="ANSWER">{this.state.pokemon[forme]}</td>
		    </tr>
	    </tbody>
    </table>
    </div>
    
    <div>
        <p className="Text_Attaques">Attaques</p>  
        <hr class="shine_Attaques"></hr>      
        <div className="Div_Render_Attaques">
        <Attaques list ={ this.state.pokemon.Attaques || [] }/>
        </div>
    </div>     
    <div>
         
    </div>   
</div> 


    
        )       
    }    
}

export default PokedexDetails;

