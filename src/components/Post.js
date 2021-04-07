import React from 'react'; 
import tag from '../media/tag.svg'; 
import blog from '../media/blog.jpg';
import blog2 from '../media/blog-2.jpg';
import blog3 from '../media/blog-3.jpg';
import portrait from '../media/portrait.svg'; 
import alarm from '../media/reveil.svg'; 
import agenda from '../media/agenda.svg';

function Post() {
    return (
        <div class='pb-24 max-w-lg mx-auto'>
              <div class='mx-5 mb-20 pt-12'>
                <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                    <img class='w-24 p-5' src={agenda} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='text-center font-title text-3xl text-black mb-4'>Our Latest <div class='inline text-red-light'>Post</div></div>
                <div class='text-center font-sans text-sm text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>

            <div class='mx-4 mt-12 mb-2'>
                <img src={blog} class='rounded mb-8'/>
            </div>
            <div class='text-xs font-semibold ml-12 text-red-light tracking-widest'>Business Tips</div>
            <div class='text-gray-700 text-xl font-title ml-8 mt-4'>Aliquem erat Volupat</div>
            <div class='text-gray-500 text-sm ml-8 mt-1 mr-4'>It is a long established fact that a reader will be distracted by the readable content.</div>
               <div class='flex ml-8 mt-5' >
               <img src={portrait} class='h-4'/> <span class='ml-2 text-gray-600 text-sm mr-4'>Admin</span>
               <img src={alarm} class='h-4'/> <span class='ml-2 text-gray-600 text-sm'>26 Dec</span>
                   </div> 
            <div class='text-sm font-semibold mt-4 ml-8 text-red-light tracking-widest'>Read More</div>

            <div class='mx-4 mt-12 mb-2'>
                <img src={blog2} class='rounded mb-8'/>
            </div>
            <div class='text-xs font-semibold ml-12 text-red-light tracking-widest'>Workflow</div>
            <div class='text-gray-700 text-xl font-title ml-8 mt-4'>Contrary to popular Volupat erat Volupat</div>
            <div class='text-gray-500 text-sm ml-8 mt-1 mr-4' >It is a long established fact that a reader will be distracted by the readable content.</div>
               <div class='flex ml-8 mt-5' >
               <img src={portrait} class='h-4'/> <span class='ml-2 text-gray-600 text-sm mr-4'>Admin</span>
               <img src={alarm} class='h-4'/> <span class='ml-2 text-gray-600 text-sm'>21 Dec</span>
                   </div> 
            <div class='text-sm font-semibold mt-4 ml-8 text-red-light tracking-widest'>Read More</div>

            <div class='mx-4 mt-12 mb-2'>
                <img src={blog3} class='rounded mb-8'/>
            </div>
            <div class='text-xs font-semibold ml-12 text-red-light tracking-widest'>Popular Tips</div>
            <div class='text-gray-700 text-xl font-title ml-8 mt-4'>Change Business Today</div>
            <div class='text-gray-500 text-sm ml-8 mt-1  mr-4'>It is a long established fact that a reader will be distracted by the readable content.</div>
               <div class='flex ml-8 mt-5' >
               <img src={portrait} class='h-4'/> <span class='ml-2 text-gray-600 text-sm mr-4'>Admin</span>
               <img src={alarm} class='h-4'/> <span class='ml-2 text-gray-600 text-sm'>20 Dec</span>
                   </div> 
            <div class='text-sm font-semibold mt-4 ml-8 text-red-light tracking-widest'>Read More</div>

        </div>
    )
}

export default Post
