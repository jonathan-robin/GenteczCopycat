import React, {useEffect} from 'react'
import photo1 from '../media/photo-1.jpg';
import photo2 from '../media/photo-2.jpg';
import photo3 from '../media/photo-3.jpg';
import photo4 from '../media/photo-4.jpg';
import $ from 'jquery';

function Caroussel() {


    var animatePhoto = (PhotoToAnimate) => {
        document.getElementById(PhotoToAnimate).style.visibility = 'visible';
        $("#"+PhotoToAnimate).addClass('transition duration-500 ease-in-out transform hover:-translate-y-6');
    }
    var DesanimatePhoto = (PhotoToDesanimate) => { 
            document.getElementById(PhotoToDesanimate).style.visibility = 'hidden';
    }

    useEffect(() => {
        document.getElementById('hover-photo-1').addEventListener('mouseenter', function(event){
            animatePhoto('text-photo-1');
        })
        document.getElementById('hover-photo-2').addEventListener('mouseenter', function(event){
            animatePhoto('text-photo-2');
        })
        document.getElementById('hover-photo-3').addEventListener('mouseenter', function(event){
            animatePhoto('text-photo-3');
        })
        document.getElementById('hover-photo-4').addEventListener('mouseenter', function(event){
            animatePhoto('text-photo-4');
        })
        document.getElementById('hover-photo-5').addEventListener('mouseenter', function(event){
            animatePhoto('text-photo-5');
        })
        document.getElementById('hover-photo-6').addEventListener('mouseenter', function(event){
            animatePhoto('text-photo-6');
        })

        document.getElementById('hover-photo-1').addEventListener('mouseleave', function(event){
            DesanimatePhoto('text-photo-1');
        })
        document.getElementById('hover-photo-2').addEventListener('mouseleave', function(event){
            DesanimatePhoto('text-photo-2');
        })
        document.getElementById('hover-photo-3').addEventListener('mouseleave', function(event){
            DesanimatePhoto('text-photo-3');
        })
        document.getElementById('hover-photo-4').addEventListener('mouseleave', function(event){
            DesanimatePhoto('text-photo-4');
        })
        document.getElementById('hover-photo-5').addEventListener('mouseleave', function(event){
            DesanimatePhoto('text-photo-5');
        })
        document.getElementById('hover-photo-6').addEventListener('mouseleave', function(event){
            DesanimatePhoto('text-photo-6');
        })

        // for (var i=1; i <=4; i++){ 
        //     var j = i.toString();
        //     document.getElementById(`hover-photo-${j}`).addEventListener('mouseenter', function(event){
                // document.getElementById(`text-photo-${j}`).style.visibility = 'visible';
        //         $(`#text-photo-${j}`).addClass('transition duration-500 ease-in-out transform hover:-translate-y-6');
        //     })
        //     document.getElementById(`hover-photo-${j}`).addEventListener('mouseleave', function(event){
        //         document.getElementById(`text-photo-${j}`).style.visibility = 'hidden';
        //     })
        // }
        // document.getElementById('hover-photo-1').addEventListener('mouseenter', function(event){
        //     document.getElementById('text-photo-1').style.visibility = 'visible';
        //     $('#text-photo-1').addClass('transition duration-500 ease-in-out transform hover:-translate-y-6');
        // })
        // document.getElementById('hover-photo-1').addEventListener('mouseleave', function(event){
        //     document.getElementById('text-photo-1').style.visibility = 'hidden';
        // })
    })

    return (
        <div class='pt-16 mx-5 pb-16'>
            <div id='hover-photo-1' class='z-50 mb-5 rounded-md overflow-hidden max-h-screen'>
                <div class='bg-photo-1 bg-center bg-no-repeat bg-cover max-h-screen max-w-screen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer'>
                    <div class="transition duration-300 ease-in-out background hover:bg-light-black-layout top-0 right-0 h-96 max-w-screen rounded-md">
                        <div id='text-photo-1' class='pt-48 h-96 invisible'>
                            <div class='text-white text-center font-semibold text-gray-300 font-sans'>Creative & Art</div>
                            <div class='font-title text-white text-2xl text-center'>Technology</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='hover-photo-2' class='z-50 mb-5 rounded-md overflow-hidden max-h-screen'>
                <div class='bg-photo-2 bg-center bg-no-repeat bg-cover max-h-screen max-w-screen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer'>
                    <div class="transition duration-300 ease-in-out background hover:bg-light-black-layout top-0 right-0 h-96 max-w-screen rounded-md">
                        <div id='text-photo-2' class='pt-48 h-96 invisible'>
                            <div class='text-white text-center font-semibold text-gray-300 font-sans'>Studio & Art</div>
                            <div class='font-title text-white text-2xl text-center'>Bubble</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='hover-photo-3' class='z-50 mb-5 rounded-md overflow-hidden max-h-screen'>
                <div class='bg-photo-3 bg-center bg-no-repeat bg-cover max-h-screen max-w-screen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer'>
                    <div class="transition duration-300 ease-in-out background hover:bg-light-black-layout top-0 right-0 h-96 max-w-screen rounded-md">
                        <div id='text-photo-3' class='pt-48 h-96 invisible'>
                            <div class='text-white text-center font-semibold text-gray-300 font-sans'>Creative & Art</div>
                            <div class='font-title text-white text-2xl text-center'>Into blue</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='hover-photo-4' class='z-50 mb-5 rounded-md overflow-hidden max-h-screen'>
                <div class='bg-photo-4 bg-center bg-no-repeat bg-cover max-h-screen max-w-screen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer'>
                    <div class="transition duration-300 ease-in-out background hover:bg-light-black-layout top-0 right-0 h-96 max-w-screen rounded-md">
                        <div id='text-photo-4' class='pt-48 h-96 invisible'>
                            <div class='text-white text-center font-semibold text-gray-300 font-sans'>Studio & Art</div>
                            <div class='font-title text-white text-2xl text-center'>Creativity</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='hover-photo-5' class='z-50 mb-5 rounded-md overflow-hidden max-h-screen'>
                <div class='bg-photo-5 bg-center bg-no-repeat bg-cover max-h-screen max-w-screen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer'>
                    <div class="transition duration-300 ease-in-out background hover:bg-light-black-layout top-0 right-0 h-96 max-w-screen rounded-md">
                        <div id='text-photo-5' class='pt-48 h-96 invisible'>
                            <div class='text-white text-center font-semibold text-gray-300 font-sans'>UI Elements, media</div>
                            <div class='font-title text-white text-2xl text-center'>Console Activity</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='hover-photo-6' class='z-50 mb-5 rounded-md overflow-hidden max-h-screen'>
                <div class='bg-photo-6 bg-center bg-no-repeat bg-cover max-h-screen max-w-screen transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer'>
                    <div class="transition duration-300 ease-in-out background hover:bg-light-black-layout top-0 right-0 h-96 max-w-screen rounded-md">
                        <div id='text-photo-6' class='pt-48 h-96 invisible'>
                            <div class='text-white text-center font-semibold text-gray-300 font-sans'>Illustrations, Graphics</div>
                            <div class='font-title text-white text-2xl text-center'>Shake it !</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caroussel
