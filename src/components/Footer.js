import React from 'react'; 
import Gentecz from '../media/Gentecz_logo.png';
import facebook from '../media/facebook.svg';
import instagram from '../media/instagram.svg';
import twitter from '../media/twitter.svg';
import google from '../media/google-glass-logo.svg';

function Footer() {
    return (
        <div class='bg-black-footer h-full w-full pt-20 pb-20'>
            <div class='h-16 justify-center flex'>
                <img src={Gentecz} class='h-16 align-baseline px-6 pt-5 pb-4'/> 
            </div>
            <div class='text-white font-bold font-title ml-4 mb-2'>SERVICES</div>
            <div class='text-gray-500 ml-5 mt-2'>About Us</div>
            <div class='text-gray-500 ml-5 mt-2'>Social Media</div>
            <div class='text-gray-500 ml-5 mt-2'>General Question</div>
            <div class='text-gray-500 ml-5 mt-2'>Services</div>
            <div class='text-gray-500 ml-5 mt-2'>Privacy</div>

            <div class='text-white font-bold font-title ml-4 mt-8 mb-2'>RESOURCE</div>
            <div class='text-gray-500 ml-5 mt-2'>Blog</div>
            <div class='text-gray-500 ml-5 mt-2'>Review</div>
            <div class='text-gray-500 ml-5 mt-2'>Tutorials</div>

            <div class='text-white font-bold font-title ml-4 mt-8 mb-2'>HELP</div>
            <div class='text-gray-500 ml-5 mt-2'>Help Desk</div>
            <div class='text-gray-500 ml-5 mt-2'>Multipurpose</div>

        <div class='flex justify-center text-sm mt-12 text-gray-500'>2019 c Gentecz. Design by Saptavarana.</div>


        <div class='mt-4 justify-center flex'>
            <div class='h-8 w-8 transition duration-500 ease-in-out cursor-pointer mx-4'>
                    <img class='inline p-2 border rounded-full' id='facebookHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={facebook}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out  cursor-pointer mx-4'>
                    <img class='inline p-2  border rounded-full'  id='googleHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={google}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out cursor-pointer mx-4'>

                    <img class='inline p-2  border rounded-full' id='twitterHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={twitter}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out cursor-pointer mx-4'>
                    <img class='inline p-2  border rounded-full' id='instagramHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={instagram}/>
                </div>
            </div>


        </div>
    )
}

export default Footer
