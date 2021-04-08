import React from 'react'; 
import alarm from '../media/reveil.svg'; 
import paste from '../media/paste.svg'; 
import client from '../media/portrait.svg'; 
import team from '../media/group.svg';

function Numbers() {
    return (
        <div class='max-w-full lg:flex'>
            
        <div class='bg-fixed bg-working-layout bg-no-repeat bg-center max-w-screen lg:flex lg:w-screen'>
             <div class='bg-black-layout top-0 right-0 max-w-screen lg:flex lg:w-full'>
            
            <div class='pt-20 pb-6 max-w-lg mx-auto lg:flex lg:w-full lg:max-w-full lg:pt-9 lg:justify-center'>

            <div class='h-44 bg-white pb-8 mx-4 rounded shadow-lg pt-4 mb-3'>
                         <img src={alarm} class='h-16 p-4 mx-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                <div class='justify-center flex text-4xl font-title pt-1 numbers'></div>
                <div class='justify-center text-center mx-20 flex text-black'>Working hours</div>
            </div>

            <div class='h-44 bg-white pb-8 mx-4 rounded shadow-lg pt-4 mb-3'>
                         <img src={paste} class='h-16 p-4 mx-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                <div class='justify-center flex text-4xl font-title pt-1 numbers2'></div>
                <div class='justify-center text-center mx-20 flex text-black'>Completed Projects</div>
            </div>

              <div class='h-44 bg-white pb-8 mx-4 rounded shadow-lg pt-4 mb-3'>
                         <img src={client} class='h-16 p-4 mx-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                <div class='justify-center flex text-4xl font-title pt-1 numbers3'></div>
                <div class='justify-center text-center mx-20 flex text-black'>No. of Clients</div>
            </div>

            <div class='h-44 bg-white pb-8 mx-4 rounded shadow-lg pt-4 mb-3'>
                         <img src={team} class='h-16 p-4 mx-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                <div class='justify-center flex text-4xl font-title pt-1 numbers4'></div>
                <div class='justify-center text-center mx-20 flex text-black'>Team Member</div>
            </div>



             
                 </div>
             </div>
        </div>
    </div>
    )
}

export default Numbers
