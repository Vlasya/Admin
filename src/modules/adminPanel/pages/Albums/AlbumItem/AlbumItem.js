import React from 'react';
import './AlbumItem.css'

export function AlbumItem({item}) {
    return (
        <>
            <h4 className='album__item'>{item.title}</h4>
        </>
    );
}
