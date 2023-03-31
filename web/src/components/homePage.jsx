import React from 'react';
import ftProduct from '../image/lipStickc.svg'

export default function Home(){
    return(
        <>
        <div className='homePage'>
            <div className='cont'>
                <div className='tagLine'>
                    <h1>NEW AND DARK</h1>
                    <h1>LAKME YORK</h1>
                    <button type="submit">Pre-Order</button>
                </div>
                <div className='image'>
                <object type="image/svg+xml" aria-label="pcImage" data={ftProduct}></object>
                </div>
                <div className='slider'>
                <h1>NEW AND DARK</h1>
                    <h1>LAKME YORK</h1>
                    <button type="submit">Pre-Order</button>
                </div>
            </div>
        </div>

        </>
    )
}