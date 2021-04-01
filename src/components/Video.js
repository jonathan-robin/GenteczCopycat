import React from 'react'; 
import play from '../media/play.svg';
import liste from '../media/liste.svg';
import fleche from '../media/fleche-droite.svg';
import target from '../media/crosshair.svg'; 
import stack from '../media/stacked-files.svg';
import checked from '../media/checked.svg'; 
import stars from '../media/christmas-stars.svg'; 
import molecular from '../media/molecular.svg'; 

function Video() {
    return (
        <>
        <div class='max-w-full mb-12'>
                <div class='bg-fixed bg-office-layout bg-no-repeat bg-center h-96 max-w-screen'>
                     <div class='bg-black-layout top-0 right-0 h-96 max-w-screen'>
                    <div class='pt-16'>
                         <div class='text-white text-3xl text-center font-light font-title'>Video Presentation</div>
                         <div class='mt-2 font-sans text-white text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                        
                         <div class='mt-16 w-20 m-auto bg-lightest-red rounded-full'>
                             <img src={play} class='w-20 p-8' style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                         </div>
                         </div>
                     </div>
                </div>
            </div>

            <div class='mx-5 mb-20 pt-8'>
                <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                    <img class='w-24 p-4' src={liste} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='text-center font-title text-3xl text-black mb-2'>Our Awesome <div class='inline text-red-light'>Features</div></div>
                <div class='text-center font-sans text-md text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>
            
            <div class='relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60 mb-4'>
                <div class='inline w-100 px-2 font-light mr-4 text-black font-title text-2xl'>
                    <img src={target} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class=' inline mr-4 h-6 w-6'/>
                    Account Activate
                </div>
                <div class='w-100 mt-3 mb-4 ml-10 px-2 font-light mr-4 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using has normal distribution.
                </div>
                <div class='ml-12 inline text-red-light font-semibold cursor-pointer'>Learn More 
                <img src={fleche} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='inline h-3 ml-2'/>
                </div>
            </div>

            <div class='relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60 mb-4'>
                <div class='inline w-100 px-2 font-light mr-4 text-black font-title text-2xl'>
                    <img src={stack} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class=' inline mr-4 h-6 w-6'/>
                    Creadit Card Or Invoice
                </div>
                <div class='w-100 mt-3 mb-4 ml-10 px-2 font-light mr-4 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using has normal distribution.
                </div>
                <div class='ml-12 inline text-red-light font-semibold cursor-pointer'>Learn More 
                <img src={fleche} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='inline h-3 ml-2'/>
                </div>
            </div>

            <div class='relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60 mb-4'>
                <div class='inline w-100 px-2 font-light mr-4 text-black font-title text-2xl'>
                    <img src={molecular} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class=' inline mr-4 h-6 w-6'/>
                    Marketplace Editor
                </div>
                <div class='w-100 mt-3 mb-4 ml-10 px-2 font-light mr-4 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using has normal distribution.
                </div>
                <div class='ml-12 inline text-red-light font-semibold cursor-pointer'>Learn More 
                <img src={fleche} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='inline h-3 ml-2'/>
                </div>
            </div>

            <div class='relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60 mb-4'>
                <div class='inline w-100 px-2 font-light mr-4 text-black font-title text-2xl'>
                    <img src={checked} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class=' inline mr-4 h-4 w-4'/>
                    Automatic Payout
                </div>
                <div class='w-100 mt-3 mb-4 ml-10 px-2 font-light mr-4 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using has normal distribution.
                </div>
                <div class='ml-12 inline text-red-light font-semibold cursor-pointer'>Learn More 
                <img src={fleche} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='inline h-3 ml-2'/>
                </div>
            </div>

            <div class='relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60 mb-4'>
                <div class='inline w-100 px-2 font-light mr-4 text-black font-title text-2xl'>
                    <img src={stars} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class=' inline mr-4 h-6 w-6'/>
                    Sales Analytics
                </div>
                <div class='w-100 mt-3 mb-4 ml-10 px-2 font-light mr-4 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using has normal distribution.
                </div>
                <div class='ml-12 inline text-red-light font-semibold cursor-pointer'>Learn More 
                <img src={fleche} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='inline h-3 ml-2'/>
                </div>
            </div>
            <button class=' mt-4 bg-light-red hover:bg-red px-9 py-3 font-light text-white text-md ml-12'>VIEW MORE FEATURES</button>
            </>
    )
}

export default Video
