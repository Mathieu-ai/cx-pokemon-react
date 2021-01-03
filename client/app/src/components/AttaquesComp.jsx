import React, { Component } from 'react';
import "./Styles/AttaquesComp.scss";

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
class Identity extends Component {
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

            <h4>Horizontal Flip</h4>
                <div class="flip">
                    <div class="front" >
                        <h1 class="text-shadow">MOUNTAIN</h1>
                    </div>
                        <div class="back">
                            <h2>Angular</h2>
                                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                        </div>
                </div>
                <div class="flip">
                    <div class="front" >
                        <h1 class="text-shadow">MOUNTAIN</h1>
                    </div>
                        <div class="back">
                            <h2>Angular</h2>
                                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                        </div>
                </div>
                <div class="flip">
                    <div class="front" >
                        <h1 class="text-shadow">MOUNTAIN</h1>
                    </div>
                        <div class="back">
                            <h2>Angular</h2>
                                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                        </div>
                </div>
                
                <h4>Vertical Flip</h4>
<div class="flip flip-vertical">
    <div class="front">
       <h1 class="text-shadow">FOREST</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
<div class="flip flip-vertical">
    <div class="front" >
       <h1 class="text-shadow">TRACK</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
<div class="flip flip-vertical">
    <div class="front" >
       <h1 class="text-shadow">SWAMP</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
            </div>
            
            
            <div className='Attaques'>
            <Attaques list ={ this.state.pokemon.Attaques || [] }/>
        </div>
</div>
    
        )       
    }    
}

export default Identity;
