import React, { Component } from 'react';
import "./Styles/slider.scss"


class Slider extends Component {

    render() {
        return (
<div>
    
                <div class="slider">
                    <div class="card">
                        <div class="face face1"> 
                            <div class="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true " alt="undifined"></img>
                                    <h3>Design</h3>
                            </div>
                        </div>

                        <div class="face face2">
                            <div class="content">
                                <p className="text">at.</p>
                                <button>Perform action</button>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true " alt="undifined"></img>
                                    <h3>Code</h3>
                            </div>
                        </div>
                            <div class="face face2">
                                <div class="content">
                                    <p className="text">at.</p>
                                    <button>Perform action</button>
                                </div>
                            </div>
                    </div>

                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" alt=""></img>
                                    <h3>Launch</h3>
                            </div>
                        </div>

                            <div class="face face2">
                                <div class="content">
                                    <p className="text"> at.</p>
                                    <button>Perform action</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
        )       
    }    
}
    


export default Slider;




