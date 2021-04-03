import React from 'react';
import './List.css';

export function List({data, renderContent}) {
    return (
        <ul>
            {data.length && data.map((item,index) => <li key={index}> {renderContent(item)}</li>)}
        </ul>
    );
}
