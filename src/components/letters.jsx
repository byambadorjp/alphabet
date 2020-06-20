import React from 'react';
import { LetterCard } from '../components';

export const Letters = () => {
    return (
        <div className='flex justify-evenly flex-wrap'>
            <LetterCard letter="A" imageUrl="https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/256/apple-red-icon.png" />
            <LetterCard letter="B" imageUrl="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Bear-icon.png" />
            <LetterCard letter="C" imageUrl="https://www.festivalclaca.cat/pics/b/3/37445_candy-png.png" />
            <LetterCard letter="F" imageUrl="https://i.ya-webdesign.com/images/refrigerator-transparent-5.png" />
            <LetterCard letter="J" imageUrl="https://www.google.com/imgres?imgurl=https%3A%2F%2Ffiles2.abingcdn.com%2Fbalkaneu.com%2Fuploads%2F2019%2F10%2F21185528%2Fthumbnail-4.jpg&imgrefurl=https%3A%2F%2Fbalkaneu.com%2Fthe-joker-sparks-political-controversy-in-greece%2F&tbnid=WUP-w0smWtu3fM&vet=12ahUKEwi-hMPB7I_qAhUaR5QKHRhOCcMQMygEegUIARCvAQ..i&docid=f3bvkA7G1yZIBM&w=1080&h=1080&q=joker&ved=2ahUKEwi-hMPB7I_qAhUaR5QKHRhOCcMQMygEegUIARCvAQ" />
            
            <LetterCard letter="H" imageUrl="https://static.thenounproject.com/png/582576-200.png" />

            <LetterCard letter="N" imageUrl="https://cdn2.vectorstock.com/i/1000x1000/51/36/logo-letter-n-glitch-distortion-vector-22855136.jpg"/>

            <LetterCard letter="D" imageUrl="https://w0.pngwave.com/png/676/381/rubber-duck-png-clip-art.png" />
            <LetterCard letter="P" imageUrl="https://i7.pngguru.com/preview/637/838/386/airplane-aircraft-plane-thumbnail.https://i.pinimg.com/originals/5f/4b/0c/5f4b0c68d578c109b5d81b53957c96ac.jpg" />
        </div>
    )
}