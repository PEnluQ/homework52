import React from 'react';
import './Numbers.css';

function Numbers(props) {
    return(
        <div className='numbers-block'>
            <p className='number'>{props.number}</p>
        </div>
    )
}

export default Numbers;