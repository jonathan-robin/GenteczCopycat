import React, {useEffect, useState} from 'react'; 
import logo from '../media/Gentecz_logo.png';
import logo2 from '../media/logo-dark.png';
import '../animation.css';
import $ from 'jquery';

function Navigation() {

    // const [isScroll, setIsScroll] = useState(false);


    // window.addEventListener('resize' , function(){
    //     if(window.innerWidth > 1023){
    //         document.getElementById('navBar').style.animation = 'animNav 2s forwards'; 
    //         document.getElementById('menu').style.display = 'flex'; 
    //         $('#navBar').removeClass('h-16');
    //         $('#navBar').addClass('h-20');
    //     }
    //     else{
    //         document.getElementById('navBar').style.animation = 'unAnimNav 0.5s forwards'; 
    //         document.getElementById('menu').style.display = 'none'; 
    //         $('#navBar').removeClass('h-20');
    //         $('#navBar').addClass('h-16');
    //     }
    // })
    // window.addEventListener('scroll', function(){ 
    //     if (window.scrollY === 0 && window.innerWidth > 1023){
    //         setIsScroll(false);
    //         document.getElementById('navBar').style.animation = 'animNav 0.5s forwards'; 
    //         $('#navBar').removeClass('h-16');
    //         $('#navBar').addClass('h-20');
    //         $('#menu').removeClass('text-black-400 -mt-12');
    //         $('#menu').addClass('text-white -mt-8');
    //     }
    //     else{
    //         !isScroll && 
    //         setIsScroll(true);
    //         document.getElementById('navBar').style.animation = 'unAnimNav 0.5 forwards'; 
    //         $('#navBar').removeClass('h-20');
    //         $('#navBar').addClass('h-16');
    //         $('#menu').removeClass('text-white -mt-8');
    //         $('#menu').addClass('text-black-400 -mt-12');
    //     }
    // })

    return (
        <div id='navBar' class="h-16 bg-white bg-opacity-100 top-0 sticky shadow-md z-50">
            <div class='h-16' >
                <img src={logo} class='h-16 align-baseline px-6 pt-5 pb-4'/> 

                {/* <ul id='menu' class='ml-20 justify-center flex inline font-semibold text-white -mt-8'>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Home</li>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Services</li>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Portfolio</li>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Clients</li>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Team</li>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Pricing</li>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Blog</li>
                    <li class='inline px-5 cursor-pointer transition duration-500 ease-in-out hover:text-red-600'>Contact</li>

                    <li class='bg-red px-3 py-2 -mt-1 font-light ml-16 text-sm'>Log In</li>
                </ul> */}

            </div>
        </div>
    )
}

export default Navigation
