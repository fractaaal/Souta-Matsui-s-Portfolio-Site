import React, { Component } from 'react';
import Card from './Card';
import CardAni from './CardAni';
import cafeshira from '../images/cafeshira_picture.jpg'
import mosaic from '../images/mosaic.jpg'
import mask from '../images/mask.jpg'
import './Portfolio.css';

class Portfolio extends Component{
    render(){
        return(
            <div>
                <div class="container">
                    <h2 class="page-title">Portfolio</h2>
                    <div class="portfolio-container">
                        <CardAni component={<Card img={cafeshira} title= "Cafeshira" text="Railsによるカフェの投稿、口コミ情報参照Webアプリ" link="https://cafeshira.herokuapp.com/"/>}/>
                        <CardAni component={<Card img={mosaic} title= "Mosaic Camera" text="OpenCVを用いた画像処理を行い、LiveCameraに映った人物の顔を自動検知してモザイクをかけます。" link="https://github.com/fractaaal/fractaaal.github.io"/>}/>
                        <CardAni component={<Card img={mask} title= "Mask Camera" text="人物を検出しマスク処理を行い背景に任意の画像を返します。" link="https://github.com/fractaaal/fractaaal.github.io"/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;