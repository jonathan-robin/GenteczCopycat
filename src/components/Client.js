import React from 'react'; 
import airbnb from '../media/airbnb.png'; 
import dribble from '../media/dribbble.png';
import invision from '../media/invision.png';
import market from '../media/market.png';
import pinterest from '../media/pinterest.png';
import dropbox from '../media/dropbox.png';

function Client() {
    return (
        <div class="w-full mb-20 bg-white shadow-sm rounded-2xl">
            <div class='w-28 p-2 pt-12 m-auto'>
                <img src={market}/>
            </div>
            <div class='w-28 p-2 m-auto'>
                <img src={dribble}/>
            </div>
            <div class='w-28 p-2 m-auto'>
                <img src={dropbox}/>
            </div>
            <div class='w-28 p-2 m-auto'>
                <img src={invision}/>
            </div>
            <div class='w-28 p-2 m-auto'>
                <img src={pinterest}/>
            </div>
            <div class='w-28 p-2 pb-12 m-auto'>
                <img src={airbnb}/>
            </div>
        </div>
    )
}

export default Client
