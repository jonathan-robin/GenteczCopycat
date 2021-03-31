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
        <>
        <div class='h-96 bg-red overflow-hidden'>
            <div class='bg-fond static bg-cover h-3/6 overflow-hidden absolute top-0 left-0 w-full' style={{backgroundImage: `url(${homeImage2})`}}></div>
            <div class='text-white absolute font-medium font-title top-32 left-4 text-2xl'>We are Creative & Digital Agency .</div>
            <div class='text-gray-200 leading-1 absolute font-light font-sans top-44 left-4 text-1xl mr-4'>It is a long established fact that a reader will be distracted by the readable content of a page 
            when looking at its layout readable English.</div> 
            <button class='bg-light-red py-3 px-8 rounded-3xl text-white font-sans top-72 left-4 absolute text-sm hover:bg-red'>GET STARTED</button>   
        </div>

        <div class='relative h-96 flex justify-center'>
            <div class='absolute w-20 top-20 p-4 bg-lightest-red rounded-full'>
                <img src={home} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
            </div>
            <div class='absolute w-86 font-medium top-44 text-black font-title text-3xl'>What Can We Do <div class='inline text-red-light'>For You</div></div>
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

        <div class='mt-5 w-100 px-3 py-8 h-60'>
            <div class='w-100 px-2 mr-4 text-black font-title text-2xl'>
                We Are Digital Business Agency.
            </div>
            <div class='w-100 mt-3 px-2 mr-4 text-black font-title text-xl'>
                Awesome Design.
            </div>  
            <div class='w-100 mt-3 px-2 font-light text-gray-600 leading-5 font-sans text-md'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
            </div>
        </div>


        <div class='h-20 relative flex justify-center'>
            <div class='absolute w-12'>
                <img src={montgolfiere} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute top-14 text-md'>
                Business flow
            </div>
        </div>

        <div class='h-20 mt-12 relative flex justify-center'>
            <div class='absolute w-12'>
                <img src={user} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute top-12 text-md'>
                User Interface
            </div>
        </div>

        <div class='h-20 relative mt-12  flex justify-center'>
            <div class='absolute w-18'>
                <img src={suitcase} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute top-12 text-md'>
                Manage Employee
            </div>
        </div>

        <div class='h-20 relative mt-12 flex justify-center'>
            <div class='absolute w-10'>
                <img src={chart} style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
            </div>
            <div class='absolute top-12 text-md'>
                Monthly Update
            </div>
        </div>

        <div class='mt-12 h-96 flex relative justify-center'>
            <div class='absolute top-4'>
                <button class='bg-light-red hover:bg-red px-9 py-3 text-white text-md'>KNOW MORE</button>
            </div>
            <div class='absolute top-24'>
                <img src={screen} class='p-4 text-white text-md'/>
            </div>
        </div>
        </>
    )
}

export default HomePage
