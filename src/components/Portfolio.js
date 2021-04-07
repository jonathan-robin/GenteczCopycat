import React from 'react'; 
import cubes from '../media/sugar-cubes.svg';

function Portfolio() {
    return (
        <div class='max-w-md mx-auto'>
            <div class='mx-5 mb-8 pt-12 '>
                <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                    <img class='w-24 p-4' src={cubes} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='text-center font-title text-3xl text-black mb-4'>Our Awesome <div class='inline text-red-light'>Portfolio</div></div>
                <div class='text-center font-sans text-md text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>
            <div class='row mt-5'>
                <ul class='mx-16 text-center'>
                    <li class='inline-block px-4 py-2 rounded-md m-2 hover:bg-lightest-red hover:text-white cursor-pointer font-semibold'>ALL</li>
                    <li class='inline-block px-4 py-2 rounded-md m-2 hover:bg-lightest-red hover:text-white cursor-pointer font-semibold'>SEO</li>
                    <li class='inline-block px-4 py-2 rounded-md m-2 hover:bg-lightest-red hover:text-white cursor-pointer font-semibold'>WEBDESIGN</li>
                    <li class='inline-block px-4 py-2 rounded-md m-2 hover:bg-lightest-red hover:text-white cursor-pointer font-semibold'>WORK</li>
                    <li class='inline-block px-4 py-2 rounded-md m-2 hover:bg-lightest-red hover:text-white cursor-pointer font-semibold'>WORDPRESS</li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio
