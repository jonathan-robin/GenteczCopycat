import React from 'react';
import business from '../media/business_choose.jpg';

function Choose() {
    return (
        <div class='lg:flex lg:max-w-5xl lg:m-auto'>
        {/* <div class='max-w-lg mx-auto lg:flex'> */}
                        <div class='max-w-lg mx-auto'>
                    <div class='mt-16 px-4 text-2xl text-black font-normal'>Why Choose Us...</div>
                    <div class='mt-4 px-4 text-sm text-gray-500 font-light'>Sed ut perspicatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam inventore veritatis et quasi architecto beatae explicabo.</div>
                    <div class='h-28 pb-2 pt-8 px-8 flex'>
                        <div class='rounded-full h-12 w-12 bg-light-red text-white text-2xl pt-1 font-semibold text-center'>1</div>
                        <div class='ml-8 h-12 mt-1 text-black text-xl pt-1 font-normal text-center font-title'>Your branding</div>
                    </div>
                    <div class='h-20 pt-2 px-8 flex'>
                        <div class='rounded-full h-12 w-12 bg-light-red text-white text-2xl pt-1 font-semibold text-center'>2</div>
                        <div class='ml-8 h-12 text-black text-xl pt-1 font-normal text-center font-title'>SSL Certificate</div>
                    </div>
            {/* <div class='lg:float-left lg:ml-20'> */}
                        <div class='h-20 pt-2 px-8 flex '>
                <div class='rounded-full h-12 w-12 bg-light-red text-white text-2xl pt-1 font-semibold text-center'>3</div>
                <div class='ml-8 h-12 mt-1 text-black text-xl pt-1 font-normal text-center font-title'>Responsive Design</div>
            </div>
            <div class='h-20 pt-2 px-8 flex'>
                <div class='rounded-full h-12 w-12 bg-light-red text-white text-2xl pt-1 font-semibold text-center'>4</div>
                <div class='ml-8 h-12 mt-1 text-black text-xl pt-1 font-normal text-center font-title'>Managing System</div>
            </div>
            <button class='bg-light-red text-white text-sm ml-8 mt-4 text-normal rounded-full px-6 py-3 font-normal'>READ MORE</button>
            {/* </div> */}
            {/* </div> */}
            </div>
        <div class='w-full h-92 mb-20'><img src={business} class='lg:m-auto lg:mt-16 p-4 m-auto'/></div>
 </div>
    )
}

export default Choose
