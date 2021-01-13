import React from 'react';
import Home from './Home';
import About from './About';
import {useSpring, animated} from 'react-spring'
 
export function Fade() {
        const props = useSpring({
        opacity: 1,
        from: {opacity: 0, color: 'white'},
        config: {
                tension:100
        }
        })

        const AnimatedDiv = animated(About)

        return (
        <animated.div style={props}><AnimatedDiv/></animated.div>
        )
}

 
export default Fade;