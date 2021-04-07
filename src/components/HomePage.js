import React from 'react'; 
import homeImage from '../media/black_red_polygon.jpg'; 
import homeImage2 from '../media/fond.png';
import home from '../media/abri.svg'; 
import ampoule from '../media/ampoule.svg'
import square from '../media/combine.svg'
import monitor from '../media/monitor.svg'
import montgolfiere from '../media/hot-air-balloon.svg';
import user from '../media/group-of-users-interface-symbol.svg';
import suitcase from '../media/black-suitcase.svg';
import chart from '../media/business-and-finance.svg'; 
import screen from '../media/about_buss.png';

function HomePage() {
    return (
        <div>
        <div class='h-96 lg:h-screen overflow-hidden'>
            <div class='bg-fond static pl-4 bg-cover absolute top-0 h-1/2 lg:h-screen overflow-hidden w-full' style={{backgroundImage: `url(${homeImage2})`}}>
                <div class='mx-auto max-w-lg md:max-w-xl  md:ml-12 lg:max-w-3xl lg:ml-auto'>
            <div class=' mt-16 pb-6 text-white font-medium font-title md:text-3xl text-2xl lg:mt-60 lg:text-5xl pt-12'>We are Creative & Digital Agency .</div>
            <div class='text-gray-200 pr-2 leading-1 font-light font-sans md:text-xl text-md lg:max-w-4xl'>It is a long established fact that a reader will be distracted by the readable content of a page 
            when looking at its layout readable English.</div> 
            <button class='flex float-left mt-10 bg-light-red py-3 px-8 rounded-3xl text-white font-sans text-sm hover:bg-red'>GET STARTED</button>   
        </div></div>
        </div>

        <div class='relative h-96 flex justify-center'>
            <div class='absolute w-20 top-20 p-4 bg-lightest-red rounded-full'>
                <img src={home} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
            </div>
            <div class='absolute w-86 font-medium top-44 text-black font-title text-3xl max-w-96'>What Can We Do <div class='inline text-red-light'>For You</div></div>
            <div class='absolute w-100 px-2 font-light top-56 text-gray-400 font-sans text-md text-center max-w-lg'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.</div>
        </div>

        <div class='mx-4 lg:flex'>
        <div class=' mt-4 relative border border-dotted border-gray border-w-4 px-6 py-8 h-60 max-w-xl mx-auto lg:h-72 lg:w-1/4 lg:max-w-sm lg:mr-2'>
            <img src={ampoule} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='ml-4 h-8 w-8'/>
            <div class='absolute w-100 px-2 font-light mr-4 top-24 text-black font-title text-2xl lg:relative lg:top-0 lg:mt-6'>
                Creative Design
            </div>
        <div class='lg:pt-2 absolute w-100 px-2 font-light mr-4 top-36 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.
            </div>
        </div>

        <div class='mt-4 relative border border-dotted border-gray border-w-4 px-6 py-8 h-60 max-w-xl mx-auto lg:h-72 lg:w-1/4 lg:max-w-sm lg:mx-0'>
            <img src={square} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='ml-4 h-8 w-8'/>
            <div class='absolute w-100 px-2 font-light mr-4 top-24 text-black font-title text-2xl lg:relative lg:top-0 lg:mt-6'>
                We Make Best Result
            </div>
        <div class='absolute w-100 px-2 font-light mr-4 top-36 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.
            </div>
        </div>

        <div class='mt-4 relative border border-dotted border-gray border-w-4 px-6 py-8 h-60 max-w-xl mx-auto lg:h-72 lg:w-1/4 lg:max-w-sm lg:ml-2'>
            <img src={monitor} style={{filter: 'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}} class='ml-4 h-8 w-8'/>
            <div class='absolute w-100 px-2 font-light mr-4 top-24 text-black font-title text-2xl lg:relative lg:top-0 lg:mt-6'>
                Best Platform
            </div>
        <div class='absolute w-100 px-2 font-light mr-4 top-36 text-gray-400 font-sans text-md'>It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking as its layout.
            </div>
        </div>
        </div>

<div class='mx-auto max-w-6xl'>
        <div class='mt-5 w-100 px-3 py-8 h-60 max-w-lg mx-auto lg:ml-28'>
            <div class='w-100 px-2 mr-4 text-black font-title text-2xl'>
                We Are Digital Business Agency.
            </div>
            <div class='w-100 mt-3 px-2 mr-4 text-black font-title text-xl'>
                Awesome Design.
            </div>  
            <div class='w-100 mt-3 px-2 font-light text-gray-600 leading-5 font-sans text-md lg:mr-20'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </div>
        </div>
        <div class='lg:flex'>
        <div class='h-20 relative mt-14 flex justify-center lg:ml-32 lg:inline lg:h-12 lg:w-12 lg:-mt-2'>
            <div class='absolute w-12 lg:relative'>
                <img src={montgolfiere} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute lg:relative top-14 text-md lg:-mt-12 lg:text-center lg:text-sm lg:flex lg:justify-center'>
                Business flow
            </div>
        </div>
        <div class='h-20 mt-12 relative flex justify-center lg:ml-16 lg:inline lg:h-12 lg:w-12 lg:-mt-2'>
            <div class='absolute w-12 lg:relative'>
                <img src={user} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute top-12 text-md lg:relative lg:-mt-10 lg:text-center lg:text-sm lg:flex lg:justify-center'>
                User Interface
            </div>
        </div>
        <div class='h-20 relative mt-12 flex justify-center lg:ml-16 lg:inline lg:h-12 lg:w-12 lg:-mt-2'>
            <div class='absolute w-18  lg:relative'>
                <img src={suitcase} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute top-12 text-md lg:relative lg:-mt-6 lg:text-center lg:text-sm lg:flex lg:justify-center'>
                Manage Employee
            </div>
        </div>
        <div class='h-20 relative mt-12 flex justify-center lg:ml-16 lg:inline lg:h-12 lg:w-12 lg:-mt-2'>
            <div class='absolute w-10  lg:relative'>
                <img src={chart} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute top-12 text-md lg:relative lg:-mt-6 lg:text-center lg:text-sm lg:flex lg:justify-center'>
                Monthly Update
            </div>
        </div>
        </div>
        <div class='mt-12 h-96 flex relative justify-center lg:mt-24 lg:ml-32 lg:justify-start'>
            <div class='absolute top-4'>
                <button class='bg-light-red hover:bg-red px-9 py-3 text-white text-md'>KNOW MORE</button>
            </div>
            </div>

            <div class='absolute top-24 lg:relative lg:-top-80 lg:float-right lg:-mt-96'>
                <img src={screen} class='p-4 text-white text-md max-h-60 lg:h-72 lg:max-h-96 '/>
            </div>
        </div>
        </div>
    )
}

export default HomePage
