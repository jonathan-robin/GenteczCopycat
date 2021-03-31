import React from 'react'
import layout from '../media/working-layout.jpg'

function Parallax() {
    return (
        <>
        <div class='max-w-full'>
                <div class='bg-fixed bg-working-layout bg-no-repeat bg-center h-96 max-w-screen'>
                     <div class='bg-black-layout top-0 right-0 h-96 max-w-screen'>
                    <div class='pt-16'>
                         <div class='text-white text-3xl text-center font-light font-title'>Become a part of Gentecz business community today.</div>
                         <div class='mt-8 font-sans text-white text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                         <button class='mt-8 m-auto flex bg-light-red py-3 px-8 rounded-3xl text-white font-sans'>CONTACT US</button>
                         </div>
                     </div>
                </div>
            </div>
            </>
    )
}

export default Parallax
