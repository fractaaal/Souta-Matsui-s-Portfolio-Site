import React, { Component } from 'react';
import CardAni from './CardAni';
import LogosAnimation from './LogosAnimation'
import twitter from '../images/twitter_favicon.png'
import qiita from '../images/qiita_favicon.png'
import github from '../images/github_favicon.png'
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div class="contactContainer">
                <h2 class="page-title">Follow Me!</h2>
                <LogosAnimation/>
            </div>
        )
    }
}

export default Contact;