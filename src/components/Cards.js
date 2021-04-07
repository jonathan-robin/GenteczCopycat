import React from 'react'
import fleche from '../media/fleche-droite.svg';

function Cards() {
    return (
        <div class='max-w-md mx-auto lg:flex lg:max-w-4xl lg:max-w-4/6 lg:max-h-screen lg:justify-center lg:pb-24'>

            <div class='mt-24 mx-4 rounded-xl leading h-64 px-14 py-12 bg-green-pastel m-auto lg:mt-4 lg:h-3/6 lg:max-w-5/6'>
                <div class='text-white text-2xl font-title text-semibold pb-4'>
                    Branding
                </div>
                <div class='text-white text-md font-sans font-light pb-4 lg:pb-8'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa consectetuer adipiscing.
                </div>
                <div class='m-auto p-4 rounded-full -mt-2 bg-white w-14 cursor-pointer'><img src={fleche} class='w-12 m-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                </div>
            </div>

            <div class='mt-4 mx-4 rounded-xl leading h-64 px-14 py-12 bg-purple-pastel m-auto lg:mt-4 lg:h-3/6 lg:max-w-5/6' >
                <div class='text-white text-2xl font-title text-semibold pb-4'>
                    Agencies
                </div>
                <div class='text-white text-md font-sans font-light pb-4 lg:pb-8'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa consectetuer adipiscing.
                </div>
                <div class='m-auto p-4 rounded-full -mt-2 bg-white w-14 cursor-pointer'><img src={fleche} class='w-12 m-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                </div>
            </div>
            <div class='mt-4 mx-4 rounded-xl leading h-64 px-14 py-12 bg-lightest-red m-auto lg:mt-4 lg:h-3/6 lg:max-w-5/6'>
                <div class='text-white text-2xl font-title text-semibold pb-4'>
                    Commerce
                </div>
                <div class='text-white text-md font-sans font-light pb-4 lg:pb-8'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa consectetuer adipiscing.
                </div>
                <div class='m-auto p-4 rounded-full -mt-2 bg-white w-14 cursor-pointer '><img src={fleche} class='w-12 m-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                </div>
            </div>
            <div class='flex justify-center lg:mr-84 lg:absolute lg:mt-96'>
            <button class='mt-12 bg-light-red hover:bg-red px-9 py-3 font-light text-white text-md mb-24 lg:flex'>VIEW ALL SERVICES</button>
            </div>
        </div>
    )
}

export default Cards
