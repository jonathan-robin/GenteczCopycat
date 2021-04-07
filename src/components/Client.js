import React from 'react'; 
import airbnb from '../media/airbnb.png'; 
import dribble from '../media/dribbble.png';
import invision from '../media/invision.png';
import market from '../media/market.png';
import pinterest from '../media/pinterest.png';
import dropbox from '../media/dropbox.png';

function Client() {
    return (
        <div class="w-100 max-w-md mx-auto mb-20 bg-white shadow-sm rounded-2xl lg:flex lg:-mt-48 lg:max-w-5xl">
            <div class='w-28 p-2 pt-12 m-auto lg:row lg:pt-0'>
                <img src={market}/>
            </div>
            <div class='w-28 p-2 m-auto lg:row'>
                <img src={dribble}/>
            </div>
            <div class='w-28 p-2 m-auto lg:row'>
                <img src={dropbox}/>
            </div>
            <div class='w-28 p-2 m-auto lg:row'>
                <img src={invision}/>
            </div>
            <div class='w-28 p-2 m-auto lg:row'>
                <img src={pinterest}/>
            </div>
            <div class='w-28 p-2 pb-12 m-auto lg:row lg:pb-0 lg:p-2'>
                <img src={airbnb}/>
            </div>
        </div>
    )
}

export default Client
