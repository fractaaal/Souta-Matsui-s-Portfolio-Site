import React, { Component } from 'react';
import './Background.css';


class Background extends Component{
    
    constructor(props){
        super(props);
        this.image = props.image
        this.img = {
            backgroundImage:"url("+this.image+")"
        };        
    }
    

    render(){
        return(
            <div class="container" style={this.img}>
                <div className="background-container">
                    <div>
                        <h2 class="background-title" >
                            {this.props.title}
                        </h2>
                    </div>
                    <div>
                        <p class="background-text">
                            {this.props.text1}
                        </p>
                    </div>
                    <div>
                        <p class="background-text">
                            {this.props.text2}
                        </p>
                    </div>
                </div>  
            </div>
        )

    }
}

export default Background;