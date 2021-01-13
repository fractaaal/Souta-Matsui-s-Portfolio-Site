import ReactDOM from 'react-dom'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'
import twitter from '../images/twitter_favicon.png'
import qiita from '../images/qiita_favicon.png'
import github from '../images/github_favicon.png'
import './LogosAnimation.css'

const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function LogosAnimation() {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  return (
    <div class="logos">
        <animated.div key={0} className="script-bf-box" style={{ transform: radians.interpolate(interp(0)) }}>
            <div class="twitter">
                <a href="https://twitter.com/Ovtp0orX1oymGDg" target="_blank" rel="noreferrer noopener"><img src={twitter} alt="Twitter"/></a>
            </div>
        </animated.div>
        <animated.div key={1} className="script-bf-box" style={{ transform: radians.interpolate(interp(1)) }}>
            <div class="qiita">
                <a href="https://qiita.com/Sota_Matsui" target="_blank" rel="noreferrer noopener"><img src={qiita} alt="qiita"/></a>
            </div>
        </animated.div>
        <animated.div key={2} className="script-bf-box" style={{ transform: radians.interpolate(interp(2)) }}>
            <div class="github">
                <a href="https://github.com/fractaaal" target="_blank" rel="noreferrer noopener"><img src={github} alt="github"/></a>
            </div>
        </animated.div>
    </div>
    )
}