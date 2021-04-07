import React, {useEffect} from 'react'; 
import logo from '../media/Gentecz_logo.png';
import logo2 from '../media/logo-dark.png';
import '../animation.css';
import $ from 'jquery';

function Navigation() {

    window.addEventListener('resize' , function(){
        if(window.innerWidth > 1023){
            document.getElementById('navBar').style.animation = 'animNav 2s forwards'; 
            $('#navBar').removeClass('h-16');
            $('#navBar').addClass('h-20');
        }
        else{
            document.getElementById('navBar').style.animation = 'unAnimNav 2s forwards'; 
            $('#navBar').removeClass('h-20');
            $('#navBar').addClass('h-16');
        }
    })

    return (
        <div id='navBar' class="h-16 bg-white bg-opacity-100 top-0 sticky shadow-md z-50">
            <div class='h-16' >
                <img src={logo} class='h-16 align-baseline px-6 pt-5 pb-4'/> 
            </div>
        </div>
    )
}

export default Navigation
