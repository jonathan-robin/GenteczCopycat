import React, {useEffect} from 'react';
import team from '../media/people.svg';
import ceo1 from '../media/ceo1.jpg';
import ceo2 from '../media/ceo2.jpg';
import ceo3 from '../media/ceo3.jpg';
import facebook from '../media/facebook.svg';
import instagram from '../media/instagram.svg';
import twitter from '../media/twitter.svg';
import google from '../media/google-glass-logo.svg';

function Creative() {

    useEffect(() => { 
        document.getElementById('instagramHover').addEventListener('mouseenter', function(event) { 
            document.getElementById('instagramHover').style.filter = 'invert(89%) sepia(100%) saturate(2%) hue-rotate(4deg) brightness(104%) contrast(101%)';
        })
        document.getElementById('facebookHover').addEventListener('mouseenter', function(event) { 
            document.getElementById('facebookHover').style.filter = 'invert(89%) sepia(100%) saturate(2%) hue-rotate(4deg) brightness(104%) contrast(101%)';
        })
        document.getElementById('twitterHover').addEventListener('mouseenter', function(event) { 
            document.getElementById('twitterHover').style.filter = 'invert(89%) sepia(100%) saturate(2%) hue-rotate(4deg) brightness(104%) contrast(101%)';
        })
        document.getElementById('googleHover').addEventListener('mouseenter', function(event) { 
            document.getElementById('googleHover').style.filter = 'invert(89%) sepia(100%) saturate(2%) hue-rotate(4deg) brightness(104%) contrast(101%)';
        })
        document.getElementById('instagramHover').addEventListener('mouseleave', function(event) { 
            document.getElementById('instagramHover').style.filter = 'invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)';
        })
        document.getElementById('facebookHover').addEventListener('mouseleave', function(event) { 
            document.getElementById('facebookHover').style.filter = 'invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)';
        })
        document.getElementById('twitterHover').addEventListener('mouseleave', function(event) { 
            document.getElementById('twitterHover').style.filter = 'invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)';
        })
        document.getElementById('googleHover').addEventListener('mouseleave', function(event) { 
            document.getElementById('googleHover').style.filter = 'invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)';
        })
})

    return (
        <div>
            <div class='mx-5 mb-20 pt-12'>
                <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                    <img class='w-24 p-5' src={team} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='text-center font-title text-3xl text-black mb-4'>Our Creative <div class='inline text-red-light'>Team</div></div>
                <div class='text-center font-sans text-sm text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>

            <div class='h-1/3 mb-12 w-full text-center'>
                <img class='h-96 m-auto w-96 mb-6' src={ceo1}/>
            <div class='pb-3 font-title font-semibold font-title'>Mr. Charles Ricketts</div>
            <div class='font-title text-sm text-gray-600'>CEO/Founder</div>
            <div class='mx-6 text-gray-400 text-md'>It is a long established fact that a reader will be distracted</div>
            <div class='mt-2 justify-center flex'>
            <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2' id='facebookHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={facebook}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2'  id='googleHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={google}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>

                    <img class='inline p-2' id='twitterHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={twitter}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2' id='instagramHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={instagram}/>
                </div>
            </div>
            </div>
            <div class='h-1/3 mb-12 w-full text-center'>
                <img class='h-96 m-auto w-96 mb-6' src={ceo2}/>
            <div class='pb-3 font-title font-semibold font-title'>Mr. Sylvester Cordova</div>
            <div class='font-title text-sm text-gray-600'>CEO/Founder</div>
            <div class='mx-6 text-gray-400 text-md'>It is a long established fact that a reader will be distracted</div>
            <div class='mt-2 justify-center flex'>
            <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2' id='facebookHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={facebook}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2'  id='googleHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={google}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>

                    <img class='inline p-2' id='twitterHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={twitter}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2' id='instagramHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={instagram}/>
                </div>
            </div>
            </div>
            <div class='h-1/3 mb-12 pb-16 w-full text-center'>
                <img class='h-96 m-auto w-96 mb-6' src={ceo3}/>
            <div class='pb-3 font-title font-semibold font-title'>Mrs. Joyce Provenzano</div>
            <div class='font-title text-sm text-gray-600'>CEO/Founder</div>
            <div class='mx-6 text-gray-400 text-md'>It is a long established fact that a reader will be distracted</div>
            <div class='mt-2 justify-center flex'>
            <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2' id='facebookHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={facebook}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2'  id='googleHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={google}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>

                    <img class='inline p-2' id='twitterHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={twitter}/>
                </div>
                <div class='h-8 w-8 transition duration-500 ease-in-out hover:bg-red cursor-pointer mx-4'>
                    <img class='inline p-2' id='instagramHover' style={{filter: "invert(52%) sepia(0%) saturate(1469%) hue-rotate(218deg) brightness(102%) contrast(93%)"}} src={instagram}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Creative
