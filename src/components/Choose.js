import React from 'react';
import business from '../media/business_choose.jpg';

function Choose() {
    return (
        <>
                        <div class='h-20 pt-2 px-8 flex'>
                <div class='rounded-full h-12 w-12 bg-light-red text-white text-2xl pt-1 font-semibold text-center'>3</div>
                <div class='ml-8 h-12 mt-1 text-black text-xl pt-1 font-normal text-center font-title'>Responsive Design</div>
            </div>
            <div class='h-20 pt-2 px-8 flex'>
                <div class='rounded-full h-12 w-12 bg-light-red text-white text-2xl pt-1 font-semibold text-center'>4</div>
                <div class='ml-8 h-12 mt-1 text-black text-xl pt-1 font-normal text-center font-title'>Managing System</div>
            </div>
            <button class='bg-light-red text-white text-sm ml-8 mt-4 text-normal rounded-full px-6 py-3 font-normal'>READ MORE</button>

        <div class='w-full h-92 mb-20'><img src={business} class='p-4 m-auto'/></div>



 </>
    )
}

export default Choose
