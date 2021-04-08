import React from 'react';
import writing from '../media/writing.jpg'; 
import calendar from '../media/calendar.svg';

function Question() {
    return (
        <div>
            <div class='max-w-full'>
                <div class='bg-fixed bg-writing-layout bg-no-repeat bg-center h-96 max-w-screen'>
                     <div class='bg-black-layout top-0 right-0 h-96 max-w-screen'>
                    <div class='pt-16 mx-auto max-w-lg lg:max-w-2xl'>
                         <div class='text-white text-3xl text-center font-light font-title'>We are always with you to make your project Success</div>
                         <div class='mt-8 font-sans text-white text-sm text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                         <button class='mt-8 m-auto flex bg-light-red py-3 font-bold px-8 rounded-3xl text-white font-sans'>CALL (918-375-2675)</button>
                         </div>
                     </div>
                </div>
            </div>

<div class="max-w-lg mx-auto lg:max-w-4xl"  id='Contact'>
            <div class='mx-5 mb-14 pt-12 lg:w-1/2 lg:mx-auto'>
                <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                    <img class='w-24 p-5' src={calendar} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='text-center font-title text-3xl text-black mb-4'>Do you Have Any <div class='inline text-red-light'>Question</div></div>
                <div class='text-center font-sans text-sm text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>

<div class='lg:flex'>
            <div class='mx-4 bg-gray-100 h-96 py-8 px-12 lg:h-1/6 lg:w-1/3'>
                <div class='font-title text-xl font-semibold pb-4'>Contact Info</div>
                <div class='text-red-light font-title pb-2'>Address</div>
                <div class='text-gray-400 text-sm'>742 Hornor Avenue.</div>
                <div class='text-gray-400 text-sm'>Tyron, OK 74875</div>

                <div class='text-red-light font-title pb-2 pt-8'>Mail</div>
                <div class='text-gray-400 text-sm'>Support@mail.com</div>
                <div class='text-gray-400 text-sm'>info@mail.com</div>

                <div class='text-red-light font-title pb-2 pt-8'>Call</div>
                <div class='text-gray-400 text-sm'>(27) 918-374-2675,</div>
                <div class='text-gray-400 text-sm'>(78) 954-261-9459.</div>

            </div>

                <form class='w-full pt-6 pb-16 lg:mx-auto lg:w-1/2'>
                    <input class='mx-4 w-11/12 p-2 rounded my-4 border' type="text" id="fname" name="fname" placeholder='Your Name...'/>
                    <input class='mx-4 w-11/12 p-2 rounded my-4 border' type="text" id="fname" name="fname" placeholder='Your Email...'/>
                    <input class='mx-4 w-11/12 p-2 rounded my-4 border' type="text" id="fname" name="fname" placeholder='Your Subject...'/>
                    <input class='mx-4 w-11/12 p-2 rounded my-4 border' type="text" id="fname" name="fname" placeholder='Your Message...'/>
                    <button class=' mt-4 bg-light-red hover:bg-red px-9 py-3 font-semibold text-white text-sm ml-4'>SEND MESSAGE</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Question
