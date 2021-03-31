import React from 'react'; 
import logo from '../media/Gentecz_logo.png';
import logo2 from '../media/logo-dark.png';

function Navigation() {
    return (
        <div class="h-16 bg-white bg-opacity-100 top-0 sticky z-50 shadow-md">
            <div class='h-16'>
                <img src={logo} class='h-16 align-baseline px-6 pt-5 pb-4'/> 
            </div>
        </div>
    )
}

export default Navigation
