import React from 'react';

export default function Wish({wish}) {

    return (
        <div>
            <span className="wish-item">{wish.text}</span>
        </div>
    )
}