import React, { Component } from 'react';
import './Card.css';

class Card extends Component{

    render(){
        return(
            <a href={this.props.link} className="card_link" target="_blank" rel="noreferrer noopener">
                <div class="crd-container">
                    <img className="card-img"src={this.props.img} alt={this.props.title} style={this.style}/>
                    <div className="card-container">
                        <div class="card-title">
                            <h2>{this.props.title}</h2>   
                        </div>
                        <div class="card-text">
                            <p>{this.props.text}</p>
                        </div>   
                    </div>  
                </div>
            </a>
        )
    }
}

export default Card;