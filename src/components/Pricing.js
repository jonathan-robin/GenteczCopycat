import React from 'react'; 
import tag from '../media/tag.svg'

function Pricing() {
    return (
        <div>
                <div class='mx-5 mb-20 pt-12'>
                <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                    <img class='w-24 p-5' src={tag} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='text-center font-title text-3xl text-black mb-4'>Our Princing <div class='inline text-red-light'>Plan</div></div>
                <div class='text-center font-sans text-sm text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>
        </div>
    )
}

export default Pricing
