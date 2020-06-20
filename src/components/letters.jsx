import React from 'react';
import { LetterCard } from '../components';

export const Letters = () => {
    return (
        <div className='flex justify-evenly wrap'>
            <LetterCard letter="A" imageUrl="https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png" />
            <LetterCard letter="B" imageUrl="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Bear-icon.png" />
            <LetterCard letter="C" imageUrl="https://www.festivalclaca.cat/pics/b/3/37445_candy-png.png" />
            <LetterCard letter="J" imageUrl="https://files2.abingcdn.com/balkaneu.com/uploads/2019/10/21185528/thumbnail-4.jpg" />
            <LetterCard letter="E" imageUrl="https://files2.abingcdn.com/balkaneu.com/uploads/2019/10/21185528/thumbnail-4.jpg" />
            
            <LetterCard letter="H" imageUrl="https://i.pinimg.com/236x/1b/46/12/1b4612ce21e5aec16f82f7f527838690--safety-icons.jpg" />

        </div>
    )
}