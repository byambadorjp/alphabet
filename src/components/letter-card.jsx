import React from 'react';

export const LetterCard = (props) => {
    let { letter, imageUrl } = props;

    return (
<<<<<<< HEAD
        <div className='flex justify-between items-start pa-3 w-9 h-9 br-primary-2 br-10 ma-3'>
=======
        <div className='flex justify-between items-start pa-3 w-7 h-7 br-primary-2 br-10'>
>>>>>>> zebra added
            <div className='fs-30'>{letter}</div>
            <div className="w100 h100" style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover'
            }}></div>
        </div>
    )
}