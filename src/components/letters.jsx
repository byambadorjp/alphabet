import React from 'react';
import { LetterCard } from '../components';

export const Letters = () => {
    return (
        <div className='flex justify-evenly'>
            <LetterCard letter="A" imageUrl="https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png" />
            <LetterCard letter="B" imageUrl="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Bear-icon.png" />
            <LetterCard letter="C" imageUrl="https://www.festivalclaca.cat/pics/b/3/37445_candy-png.png" />
            <LetterCard letter="N" imageUrl="https://cdn2.vectorstock.com/i/1000x1000/51/36/logo-letter-n-glitch-distortion-vector-22855136.jpg"/>
            <LetterCard letter="D" imageUrl="https://w0.pngwave.com/png/676/381/rubber-duck-png-clip-art.png" />
            <LetterCard letter="L" imageUrl="http://pngimg.com/uploads/lizard/lizard_PNG36.png"/> 
        </div>
    )
}