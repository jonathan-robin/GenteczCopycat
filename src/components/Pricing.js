import React from 'react'; 
import tag from '../media/tag.svg'; 
import sun from '../media/sun.svg'; 
import angular from "../media/fake_angular.svg";
import justify from "../media/justify.svg";

function Pricing() {
    return (
        <div class='mb-16'>
                <div class='mx-5 mb-20 pt-12'>
                <div class=' m-auto rounded-full w-20 bg-lightest-red mb-4'>
                    <img class='w-24 p-5' src={tag} style={{filter:'invert(100%) sepia(0%) saturate(2%) hue-rotate(329deg) brightness(111%) contrast(101%)'}}/>
                </div>
                <div class='text-center font-title text-3xl text-black mb-4'>Our Princing <div class='inline text-red-light'>Plan</div></div>
                <div class='text-center font-sans text-sm text-gray-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </div>

            <div class='h-2/3 bg-white pb-8 mx-4 rounded shadow-lg'>
                <div class='justify-center flex text-2xl font-title pt-8'>Basic Plan</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-m pt-3'>It is a long established fact that a reader will be distracted.</div>
                <div class='justify-center flex text-gray-400 text-m mt-6 h-12'>
                    <div class='h-16 bg-gray-200 rounded-full'>
                         <img src={angular} class='h-16 p-4' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                    </div>
                </div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-10'>Additional Features</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>Free Email Support</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>10 Domain</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>24/7 Support</div>
                
                <div class='mb-0 justify-center flex text-5xl font-title pt-8'>
                    <sup class='mt-7'>$</sup>99
                    <span class='text-sm font-bold mt-6'>/Mo</span>
                </div>
                <button class='justify-center flex bg-light-red text-white text-sm mx-auto mt-9 text-normal rounded-full px-8 py-3 font-normal'>GET PURCHASE</button>
            </div>

            
            <div class='h-2/3 bg-white pb-8 mx-4 mt-4 rounded shadow-lg'>
                <div class='justify-center flex text-2xl font-title pt-8'>Basic Plan</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-m pt-3'>It is a long established fact that a reader will be distracted.</div>
                <div class='justify-center flex text-gray-400 text-m mt-6 h-12'>
                    <div class='h-16 bg-gray-200 rounded-full'>
                         <img src={angular} class='h-16 p-4' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                    </div>
                </div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-10'>Additional Features</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>Free Email Support</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>10 Domain</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>24/7 Support</div>
                
                <div class='mb-0 justify-center flex text-5xl font-title pt-8'>
                    <sup class='mt-7'>$</sup>99
                    <span class='text-sm font-bold mt-6'>/Mo</span>
                </div>
                <button class='justify-center flex bg-light-red text-white text-sm mx-auto mt-9 text-normal rounded-full px-8 py-3 font-normal'>GET PURCHASE</button>
            </div>

            
            <div class='h-2/3 bg-white pb-8 mt-4 mx-4 rounded shadow-lg'>
                <div class='justify-center flex text-2xl font-title pt-8'>Basic Plan</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-m pt-3'>It is a long established fact that a reader will be distracted.</div>
                <div class='justify-center flex text-gray-400 text-m mt-6 h-12'>
                    <div class='h-16 bg-gray-200 rounded-full'>
                         <img src={angular} class='h-16 p-4' style={{filter:'invert(46%) sepia(42%) saturate(2742%) hue-rotate(320deg) brightness(110%) contrast(101%)'}}/>
                    </div>
                </div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-10'>Additional Features</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>Free Email Support</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>10 Domain</div>
                <div class='justify-center text-center mx-20 flex text-gray-400 text-sm pt-3'>24/7 Support</div>
                
                <div class='mb-0 justify-center flex text-5xl font-title pt-8'>
                    <sup class='mt-7'>$</sup>99
                    <span class='text-sm font-bold mt-6'>/Mo</span>
                </div>
                <button class='justify-center flex bg-light-red text-white text-sm mx-auto mt-9 text-normal rounded-full px-8 py-3 font-normal'>GET PURCHASE</button>
            </div>
        </div>

    )
}

export default Pricing
