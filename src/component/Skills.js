import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component{
    render(){
        return(
            <div>
                <div class="container-sk">
                    <h2 class="page-title">Skills</h2>
                    <div class="container-skills">
                        <div class="ht">
                            <h2>HTML5&CSS</h2>
                            <p>Web開発の最も基本であるため一番最初に学習しました。</p>
                        </div>
                        <div class="ja">
                            <h2>JavaScript</h2>
                            <p>モダンなWebサービス開発を行うために習得。</p>
                        </div>
                        <div class="re">
                            <h2>React.js</h2>
                            <p>高速なWEBサービスを開発するために習得。このポートフォリをサイトはReactで作成。</p>
                        </div>
                        <div class="ru">
                            <h2>Ruby,Rails</h2>
                            <p>独自Webアプリ「Cafeshira」の開発に使用。</p>
                        </div>
                        <div class="py">
                            <h2>Python,OpenCV</h2>
                            <p>趣味で数値計算やAIの学習などに利用。OpenCVは画像処理アプリ開発に利用。</p>
                        </div>
                        <div class="ma">
                            <h2>Math</h2>
                            <p>趣味で数学を嗜んでいます。Qiitaに数学とプログラミングに関する記事を載せていきたいです。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;