import React from 'react'; 
import cloud from '../media/reseau-cloud.svg';
import screen from '../media/monitor.svg'; 
import chart from '../media/business-and-finance.svg';
import grade from '../media/padlock.svg';
import platform from '../media/platform.svg';

function StayTune() {
    return (
        <>
        <div class='mx-5 mb-8 pt-12 max-w-md mx-auto'>
            <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                <img class='w-24 p-4' src={cloud} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
            </div>
            <div class='text-center font-title text-3xl text-black mb-4'>Stay <div class='inline text-red-light'>Updated</div></div>
            <div class='text-center font-sans text-md text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        </div>

<div class='lg:flex lg:pb-24 lg:pt-12 lg:mx-16'>
        <div class='mx-10 mb-2 pt-12 lg:border-r lg:pr-8'>
                <img class='w-20 p-4 m-auto' src={screen} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            <div class='text-center font-title text-xl text-black mb-1'>Work on all devices</div>
            <div class='text-center font-sans text-md text-gray-500 mb-4'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated.</div>
        </div>

        <div class='mx-10 mb-2 pt-12 lg:border-r lg:pr-8'>
                <img class='w-20 p-4 m-auto' src={grade} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            <div class='text-center font-title text-xl text-black mb-1'>Automated Update</div>
            <div class='text-center font-sans text-md text-gray-500 mb-4'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated.</div>
        </div>

        <div class='mx-10 mb-2 pt-12 lg:border-r lg:pr-8'>
                <img class='w-20 p-4 m-auto' src={chart} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            <div class='text-center font-title text-xl text-black mb-1'>Real time analytics</div>
            <div class='text-center font-sans text-md text-gray-500 mb-4'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated.</div>
        </div>

        <div class='mx-10 mb-24 pt-12'>
                <img class='w-20 p-4 m-auto' src={platform} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            <div class='text-center font-title text-xl text-black mb-1'>Work in best platform</div>
            <div class='text-center font-sans text-md text-gray-500 mb-4'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated.</div>
        </div>
</div>
        </>
    )
}

export default StayTune
