import React, {useEffect, useState} from 'react'; 
import logo from '../media/Gentecz_logo.png';
import logo2 from '../media/logo-dark.png';
import menu from '../media/menu.svg';
import '../animation.css';
import $ from 'jquery';

function Navigation() {

    const [isScroll, setIsScroll] = useState(false);

    var handleClickNav = (data) => { 
        document.getElementById(data).scrollIntoView();
    }
    var handleClickMenu = () => { 
        $('#navBar').toggleClass('h-96');
        $('#nav-Items').toggleClass('hidden');
        $('#firstDiv').toggleClass('-mt-80');
    }

    window.addEventListener('resize' , function(){
        if(window.innerWidth > 1023){
            document.getElementById('navBar').style.animation = 'animNav 2s forwards'; 
            document.getElementById('menu').style.display = 'flex'; 
            $('#nav-Items').addClass('hidden');
            $('#firstDiv').removeClass('-mt-80');
            $('#navBar').removeClass('h-96');
            $('#navBar').removeClass('h-16');
            $('#navBar').addClass('h-20');
        }
        else{
            document.getElementById('navBar').style.animation = 'unAnimNav 0.5s forwards'; 
            document.getElementById('menu').style.display = 'none'; 
            $('#navBar').removeClass('h-20');
            $('#navBar').addClass('h-16');
        }
    })
    window.addEventListener('scroll', function(){ 
        if (window.scrollY === 0 && window.innerWidth > 1023){
            setIsScroll(false);
            document.getElementById('navBar').style.animation = 'animNav 0.5s forwards'; 
            $('#navBar').removeClass('h-16');
            $('#navBar').addClass('h-20');
            $('#menu').removeClass('text-black-400 -mt-12');
            $('#menu').addClass('text-white -mt-8');
        }
        else{
            !isScroll && 
            setIsScroll(true);
            document.getElementById('navBar').style.animation = 'unAnimNav 0.5 forwards'; 
            $('#navBar').removeClass('h-20');
            $('#navBar').addClass('h-16');
            $('#menu').removeClass('text-white -mt-8');
            $('#menu').addClass('text-black-400 -mt-12');
            $('#logIn').addClass('text-white');
        }
    })
    return (

        <div id='navBar' class="h-16 bg-white bg-opacity-100 top-0 sticky shadow-md z-50">
            <div class='h-16' >
                <img src={logo} class='h-16 align-baseline px-6 pt-5 pb-4 cursor-pointer'/> 
                <div id='nav-Items' class='px-6 hidden'>
                    <ul class='text-sm text-gray-500 font-semibold'>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Home')}}>Home</li>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Services')}}>Services</li>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Portfolio')}}>Portfolio</li>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Clients')}}>Clients</li>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Team')}}>Team</li>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Pricing')}}>Pricing</li>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Blog')}}>Blog</li>
                        <li class='hover:text-red-light cursor-pointer pb-2' onClick={() => {handleClickNav('Contact')}}>Contact</li>
                        <li class='bg-red py-2 px-2 font-light text-md w-16 text-white cursor-pointer'>Log In</li>
                    </ul>
                </div>
                <ul id='menu' class='hidden lg:block ml-20 justify-center flex inline font-semibold text-white -mt-8'>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Home')}}>Home</li>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Services')}}>Services</li>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Portfolio')}}>Portfolio</li>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Clients')}}>Clients</li>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Team')}}>Team</li>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Pricing')}}>Pricing</li>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Blog')}}>Blog</li>
                    <li class='inline px-3 cursor-pointer transition duration-500 ease-in-out hover:text-red-600' onClick={() => {handleClickNav('Contact')}}>Contact</li>
                    <li id='logIn' class='bg-red px-3 py-2 -mt-1 font-light ml-16 text-sm cursor-pointer'>Log In</li>
                </ul>
                <div class='lg:hidden absolute top-4 cursor-pointer right-8'>
                    <img src={menu} class='w-8 lg:invisble' onClick={() => {handleClickMenu()}}/>
                </div>
            </div>
        </div>
    )
}

export default Navigation
