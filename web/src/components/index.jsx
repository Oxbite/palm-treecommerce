import React from 'react';
import ftProduct from '../image/lipStickc.svg';
import arrow from '../image/arroow.svg';


export default function Home(){ 
    return(
        <>
        <div className='homePage'>
            <div className='cont'>
                <div className='tagLine'>
                    <h1>NEW AND DARK</h1>
                    <h1>LAKME YORK</h1>
                    <button type="submit" className='btn'>ORDER NOW</button>
                </div>
                <div className='image'>
                <object type="image/svg+xml" aria-label="pcImage" data={ftProduct}></object>
                </div>

                <div className='slider'>
                    <object type="image/svg+xml"  className="rightBtn" aria-label="arrow" data={arrow} width={"200px"}></object>

                    <div className='imgSlider'>
                        <object type="image/svg+xml" aria-label="pcImage" data={ftProduct}></object>
                    </div>
                    <object type="image/svg+xml" className="leftBtn" aria-label="arrow" data={arrow}></object>
                </div>

               
            </div>
        </div>

        </>
    )
}