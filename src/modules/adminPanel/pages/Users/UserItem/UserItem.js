import React from 'react';
import './UserItem.css'

export function UserItem({item}) {
    const {
        name,
        username,
        email,
        address: {street, suite, city, zipcode},
        phone,
        website,
        company
    } = item

    return (
        <div className='item__wrapper'>
            <div className='item__user'>
                <span>{name}</span>
                <span>{username}</span>
            </div>

            <div className='item__info'>
            <div className='item__block'>
                <div className='subtitle'>
                    <p > Email :<span>{email}</span></p>
                    <p > Phone :<span>{phone}</span></p>

                </div>
                <div className='subtitle'>
                    <p > Website :<span>{website}</span></p>
                    <p > Company :<span>{company.name}</span></p>
                </div>
            </div>

            <div className='item__block'>
                <div className='subtitle'>
                    <p > City :<span>{city}</span></p>
                    <p > Street :<span>{street}</span></p>
                </div>
                <div className='subtitle'>
                    <p > Suite :<span>{suite}</span></p>
                    <p > Zipcode :<span>{zipcode}</span></p>
                </div>
            </div>
            </div>
        </div>
    )
}

