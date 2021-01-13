import React, { Component } from 'react';
import Background from './Background'
import kanazawa from '../images/kanazawa1.jpg'
import machine from '../images/machine.jpg'
import gurume from '../images/gurume.jpg'
import math from '../images/math.jpg'
import './About.css';

class About extends Component{
    render(){
        return(
            <div>
                <div class= "container-about">
                    <Background className="kanazawa" image={kanazawa} title="I live in Ishikawa" text1="里山、里海のめぐみが豊富な石川で育ちました。" />
                    <Background className="machne" image={machine} title="I was a mechanical engineer" text1="機械系の大学を卒業して地元機械メーカーに就職。" text2="夢を諦めきれず、プログラマーへの転身を決意。"/>
                    <Background className="gurume" image={gurume} title="Sushi, Italian, French..." text1="週に一回は外食に行きます。特にイタリアン。"/>
                    <Background className="math" image={math} title="I like Math" text1="珍しいですが数学が趣味です。" text2="トップページの図形は、数学のめり込むきっかっけとなったマンデルブロ集合という図形です。"/>
                </div>  
            </div>
        )
    }
}

export default About;