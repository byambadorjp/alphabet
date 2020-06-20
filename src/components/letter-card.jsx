import React from 'react';

export const LetterCard = (props) => {
    let { letter, imageUrl } = props;

    return (
        <div className='flex justify-between items-start pa-3 w-9 h-8 br-primary-2'>
            <div className='fs-30'>{letter}</div>
            <div className="w100 h100" style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover'
            }}></div>
        </div>
    )
}