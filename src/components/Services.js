import React from 'react'; 
import camera from '../media/camera.svg'; 

function Services() {
    return (
        <div class='max-w-md mx-auto '>
            <div class='relative h-72 flex justify-center'>
                <div class='absolute w-20 top-20 p-4 bg-lightest-red rounded-full'>
                    <img src={camera} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='absolute w-86 font-medium top-44 text-black font-title text-3xl'>
                    Get Our Excellent
                    <div class='inline text-red-light'>
                        {"\n"}Services
                    </div>
                </div>
                <div class='absolute w-100 px-2 font-light top-56 text-gray-500 font-sans text-md text-center'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking as its layout.
                </div>
            </div>
            <div class='mt-5 w-100 px-3 py-8 h-60 lg:-ml-60 lg:mr-20 lg:row lg:max-w-4xl lg:w-screen'>
                <div class='w-100 px-2 mr-4 text-black font-title text-2xl'>
                    Work for Any Type Of Business
                </div>
                <div class='w-100 mt-3 px-2 text-gray-500 leading-5 font-sans text-md lg:mr-48'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't 
                anything embarrassing hidden in the middle of text.
                </div>
                <button class='mt-6 bg-light-red hover:bg-red px-9 py-3 font-light text-white text-md lg:float-right lg:ml-96 lg:-mt-20'>USE CASES</button>
            </div>
        </div>

    )
}

export default Services
