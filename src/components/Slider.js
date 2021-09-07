import React, { useState } from 'react'
import art from '../images/art.jpg';
import sun from '../images/sun.jpg';
import walk from '../images/walk.jpg';
import flower from '../images/flower.jpg';

const Slider = () => {
    const image = [art, sun, walk, flower]
    let [count, setCount] = useState(0);

    const NextSlider = () => {
        if (count <= 2) {
            setCount(prev => prev + 1)
            console.log(count)

        } else {
            setCount(0);
            console.log(count)
        }

    }
    const PrevSlider = () => {
        if (count === 0) {
            console.log(count)
            setCount(3);
            console.log(count)
        }
        else {
            console.log(count)
            setCount(prev => prev - 1)
            console.log(count)
        }
    }
    return (
        <div className="sliderDiv">
            <img src={image[count]} alt="Art" className="imageTag" />
            <br />
            <button onClick={PrevSlider}>Previous</button>
            <button onClick={NextSlider}>Next</button>
        </div>
    )
}

export default Slider
