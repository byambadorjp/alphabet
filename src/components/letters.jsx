import React from 'react';
import { LetterCard } from '../components';

export const Letters = () => {
    return (
        <div className='flex justify-evenly'>
            <LetterCard letter="A" imageUrl="https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png" />
            <LetterCard letter="B" imageUrl="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Bear-icon.png" />
            <LetterCard letter="C" imageUrl="https://www.festivalclaca.cat/pics/b/3/37445_candy-png.png" />
            <LetterCard letter="H" imageUrl="https://i.pinimg.com/236x/1b/46/12/1b4612ce21e5aec16f82f7f527838690--safety-icons.jpg" />
            <LetterCard letter="N" imageUrl="https://cdn2.vectorstock.com/i/1000x1000/51/36/logo-letter-n-glitch-distortion-vector-22855136.jpg"/>
            <LetterCard letter="D" imageUrl="https://w0.pngwave.com/png/676/381/rubber-duck-png-clip-art.png" />
            <LetterCard letter="Y" imageUrl="https://www.clipartmax.com/png/middle/317-3178553_yoyo-clipart-png-yoyo-clipart.png" />
            <LetterCard letter="E" imageUrl="http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/128/22275-eagle-icon.png" />
        </div>
    )
}