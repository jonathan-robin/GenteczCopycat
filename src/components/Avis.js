import React,{useEffect} from 'react'; 
import play from '../media/play.svg'; 
import man1 from '../media/man1.jpg';
import man2 from '../media/man2.jpg';
import woman from '../media/woman1.jpg';
import star from '../media/star.svg';
import $ from 'jquery';
import '../animation.css';

function Avis() {
    var handleClickOwl = (owl) => { 
        $('#active1').removeClass('bg-light-red opacity-100 w-8');
        $('#active1').addClass('bg-lightest-red opacity-50 w-4');
        $('#active2').removeClass('bg-light-red opacity-100 w-8');
        $('#active2').addClass('bg-lightest-red opacity-50 w-4');
        $('#active3').removeClass('bg-light-red opacity-100 w-8');
        $('#active3').addClass('bg-lightest-red opacity-50 w-4');
        $('#'+owl).removeClass('bg-lightest-red opacity-50');
        $('#'+owl).addClass('bg-light-red opacity-100 w-8');
        
        // console.log(owl)
        //         switch (owl){
        //             case "active1": 
        //             $('#testimonial').css('animation', 'translateX(0)');
        //             break;
        
        //             case "active2": 
        //             $('#testimonial').css('transform', 'translateX(-100vw)');
        //             console.log("active2 case switch")
        
        //             break;
        //             case "active3": 
        //             $('#testimonial').css('transform', 'translateX(-200vw)');
        //             console.log("active3 case switch")
        
        //             break;
        //         }
        
    }
    
    useEffect(() => { 
        setInterval(()=> {
            // console.log(document.getElementById('testimonial').lastChild);
            
        },500)
    })
    
    return (
        <div class='mt-20 h-screen mb-10'>
            <div class='bg-fixed bg-working-people bg-no-repeat bg-center h-3/5 max-w-screen'>
                <div class='bg-black-layout top-0 right-0 h-full max-w-screen w-full flex justify-center'>  
                    <div class='h-96 w-full mx-auto my-auto inputAvis'>
                        <input type='radio' name='radio-btn' id='radio1'/>
                        <input type='radio' name='radio-btn' id='radio2'/>
                        <input type='radio' name='radio-btn' id='radio3'/>
                        <div class='overflow-hidden' id='testimonial' >
                            <div class='grid grid-flow-col auto-cols-max oneAnimation'>
            
                                <div class='w-screen' id='active1-div' >
                                    <div class='m-auto mt-4 bg-man1 bg-no-repeat bg-center bg-cover border-white border-4 rounded-full h-28 w-28'></div> 
                                    <div class='pt-8 text-sm mx-6 mr-12 text-white font-normal text-center font-sans '>
                                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                    </div> 
                                    <div class='pt-4 text-md text-white font-normal text-center font-sans'>
                                        <ul class='flex flex-row justify-center'>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/></li>
                                        </ul>
                                    </div> 
                                    <div class='pt-4 text-md text-white font-normal text-center font-sans'>
                                        Steven Wagner, Envato
                                    </div> 
                                    <div class='text-xs pt-2 text-white font-normal text-center font-title'>
                                        Marketor
                                    </div> 
                                </div>

                                <div class='w-screen'>
                                    <div class='m-auto mt-4 bg-man2 bg-no-repeat bg-center bg-cover border-white border-4 rounded-full h-28 w-28'></div> 
                                    <div class='pt-8 text-sm mx-6 mr-12 text-white font-normal text-center font-sans'>
                                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                    </div> 
                                    <div class='pt-4 text-md text-white font-normal text-center font-sans'>
                                        <ul class='flex flex-row justify-center'>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/></li>
                                            <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/></li>
                                        </ul>
                                    </div> 
                                    <div class='pt-4 text-md text-white font-normal text-center font-sans'>
                                        Daniel Searcy, Envato
                                    </div> 
                                    <div class='text-xs pt-2 text-white font-normal text-center font-title'>
                                        Marketor
                                    </div> 
                                </div>

                                <div class='w-screen '>
                                    <div class='m-auto mt-4 bg-woman1 bg-no-repeat bg-center bg-cover border-white border-4 rounded-full h-28 w-28'></div> 
                                    <div class='pt-8 text-sm mx-6 mr-12 text-white font-normal text-center font-sans'>
                                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                                    </div> 
                                    <div class='pt-4 text-md text-white font-normal text-center font-sans'>
                                    <ul class='flex flex-row justify-center'>
                                        <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                        <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                        <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/></li>
                                        <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/></li>
                                        <li class='mx-2'><img src={star} class="h-6 w-6" style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/></li>
                                    </ul>
                                    </div> 
                                    <div class='pt-4 text-md text-white font-normal text-center font-sans'>
                                        Stephanie Green, Envato
                                    </div> 
                                    <div class='text-xs pt-2 text-white font-normal text-center font-title'>
                                        Manager
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div class='h-8 mt-8'>
                            <ul class='flex flex-row justify-center'>
                                <label for='radio1'>
                                    <li class='mx-1 cursor-pointer' >
                                        <div id='active1' class='h-2 w-4 bg-lightest-red opacity-50 rounded-md hover:bg-light-light-red active:opacity:100 hover:opacity-100 active:w-24 active:bg-light-red' onClick={() => {handleClickOwl("active1")}}>
                                            {"\n"}
                                        </div>
                                    </li>
                                </label>
                                <label for='radio2'>
                                    <li class='mx-1 cursor-pointer' >
                                        <div id='active2' class='h-2 w-4 bg-lightest-red opacity-50 rounded-md hover:bg-light-light-red active:opacity:100 hover:opacity-100 active:w-24 active:bg-light-red' onClick={() => {handleClickOwl("active2")}}>
                                            {"\n"}
                                        </div>
                                    </li>
                                </label>
                                <label for='radio3'>
                                    <li class='mx-1 cursor-pointer' >
                                        <div id='active3' class='h-2 w-4 bg-lightest-red opacity-50 rounded-md hover:bg-light-light-red active:opacity:100 hover:opacity-100 active:w-24 active:bg-light-red' onClick={() => {handleClickOwl("active3")}}>
                                            {"\n"}
                                        </div>
                                    </li>
                                </label>
                                {/* <li class='mx-1 cursor-pointer'><label for='radio2'><div id='active2' class='h-2 w-4 bg-lightest-red opacity-50 rounded-md hover:bg-light-light-red active:opacity:100 hover:opacity-100 active:w-24 active:bg-light-red' onClick={() => {handleClickOwl("active2")}}></div></label></li>
                                <li class='mx-1 cursor-pointer'><label for='radio3'><div id='active3' class='h-2 w-4 bg-lightest-red opacity-50 rounded-md hover:bg-light-light-red active:opacity:100 hover:opacity-100 active:w-24 active:bg-light-red' onClick={() => {handleClickOwl("active3")}}></div></label></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
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
            </div>
            </div>
        </div>
        )
    }
    
    export default Avis
    