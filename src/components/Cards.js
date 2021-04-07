import React from 'react'
import fleche from '../media/fleche-droite.svg';

function Cards() {
    return (
        <div>
            <div class='mt-24 mx-4 rounded-xl leading h-64 px-14 py-12 bg-green-pastel m-auto'>
                <div class='text-white text-2xl font-title text-semibold pb-4'>
                    Branding
                </div>
                <div class='text-white text-md font-sans font-light pb-4'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa consectetuer adipiscing.
                </div>
                <div class='m-auto p-4 rounded-full -mt-4 bg-white w-14'><img src={fleche} class='w-12 m-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                </div>
            </div>
            <div class='mt-4 mx-4 rounded-xl leading h-64 px-14 py-12 bg-purple-pastel m-auto'>
                <div class='text-white text-2xl font-title text-semibold pb-4'>
                    Agencies
                </div>
                <div class='text-white text-md font-sans font-light pb-4'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa consectetuer adipiscing.
                </div>
                <div class='m-auto p-4 rounded-full -mt-4 bg-white w-14'><img src={fleche} class='w-12 m-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                </div>
            </div>
            <div class='mt-4 mx-4 rounded-xl leading h-64 px-14 py-12 bg-lightest-red m-auto'>
                <div class='text-white text-2xl font-title text-semibold pb-4'>
                    E-commerce
                </div>
                <div class='text-white text-md font-sans font-light pb-4'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor Aenean massa consectetuer adipiscing.
                </div>
                <div class='m-auto p-4 rounded-full -mt-4 bg-white w-14'><img src={fleche} class='w-12 m-auto' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                </div>
            </div>
            <div class='flex justify-center'>
            <button class='mt-12 bg-light-red hover:bg-red px-9 py-3 font-light text-white text-md mb-24'>VIEW ALL SERVICES</button>
            </div>
        </div>
    )
}

export default Cards
