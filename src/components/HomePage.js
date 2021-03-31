import React from 'react'; 
import homeImage from '../media/black_red_polygon.jpg'; 
import homeImage2 from '../media/fond.png';
import home from '../media/abri.svg'; 
import ampoule from '../media/ampoule.svg'
import square from '../media/combine.svg'
import monitor from '../media/monitor.svg'

function HomePage() {
    return (
        <>
        <div class='h-96 relative'>
            <div class='bg-fond static bg-cover h-96' style={{backgroundImage: `url(${homeImage2})`}}></div>
            <div class='text-white absolute font-medium font-title top-16 left-4 text-3xl'>We are Creative & Digital Agency .</div>
            <div class='text-gray-200 leading-1 absolute font-light font-sans top-32 left-4 text-1xl mr-4'>It is a long established fact that a reader will be distracted by the readable content of a page 
            when looking at its layout readable English.</div> 
            <button class='bg-red py-3 px-8 rounded-3xl text-white font-sans top-60 left-4 absolute text-sm'>GET STARTED</button>   
        </div>
        <div class='relative h-96 flex justify-center'>
            <div class='absolute w-20 top-20 p-4 bg-light-red rounded-full'>
                <img src={home} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
            </div>
            <div class='absolute w-86 font-medium top-44 text-black font-sans text-3xl'>What Can We Do <div class='inline text-red-light'>For You</div></div>
            <div class='absolute w-100 px-2 font-light top-56 text-gray-400 font-sans text-md text-center'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.</div>
        </div>

        <div class='relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60'>
            <img src={ampoule} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='ml-4 h-10 w-10'/>
            <div class='absolute w-100 px-2 font-light mr-4 top-24 text-black font-title text-2xl'>
                Creative Design
            </div>
        <div class='absolute w-100 px-2 font-light mr-4 top-36 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.
            </div>
        </div>

        <div class='mt-4 relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60'>
            <img src={square} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='ml-4 h-8 w-8'/>
            <div class='absolute w-100 px-2 font-light mr-4 top-24 text-black font-title text-2xl'>
                We Make Best Result
            </div>
        <div class='absolute w-100 px-2 font-light mr-4 top-36 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.
            </div>
        </div>

        <div class='mt-4 relative w-100 mx-4 border border-dotted border-gray border-w-4 px-6 py-8 h-60'>
            <img src={monitor} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='ml-4 h-8 w-8'/>
            <div class='absolute w-100 px-2 font-light mr-4 top-24 text-black font-title text-2xl'>
                Best Platform
            </div>
        <div class='absolute w-100 px-2 font-light mr-4 top-36 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.
            </div>
        </div>
        </>
    )
}

export default HomePage
