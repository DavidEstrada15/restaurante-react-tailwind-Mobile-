import React, { useEffect } from 'react'
import { supabase } from '../supaBaseclient'
import { useState } from 'react'
import icon from "../assets/icon.png"
import Auth from '../components/Auth'
import Getfoods from "../components/Getfoods.jsx"
function Loginandproducts() {
    let [user,setUser] = useState(null)

    useEffect(() =>{
        supabase.auth.getSession().then(({
            data: {session}
        }) =>{
            setUser(session?.user ?? null)
        })

        const {data: listener} = supabase.auth.onAuthStateChange((_event, session) =>{
            setUser(session?.user ?? null)
        })

        return () =>{
            listener.subscription.unsubscribe()
        }
        
       
    })

   
    if (!user) {
        return(
            <>
            <section className='bg-gray-300 h-screen sm:hidden flex flex-col'>
                <article className='flex flex-col p-10 bg-white rounded-2xl'>
                    <img src={icon} className='place-self-center' alt="" />
                    <h2 className='text-2xl'>Inicia sesion con Google</h2>
                </article>
                <article className='flex place-content-center h-[50%]'>
                    <Auth></Auth>
                </article>
            </section>
            </>
        )
    }else{
  return (
    
    <>
    <main className='flex flex-col gap-5 sm:hidden bg-gray-200'>
        <header className='flex justify-between p-10'>
            <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 8.33333H12.9014M1 1H23M1 15.6667H23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

        </header>
        <div className='p-5 flex flex-col gap-5'>
        <h2 className='text-3xl font-bold max-w-50'>Delicious food for you</h2>
        <input className='bg-gray-300 rounded-3xl w-[80%] py-2 place-self-start text-start' type="text" placeholder='Search' />
<Getfoods></Getfoods>
</div>
        <nav className='flex gap-20 place-content-center w-screen overflow-hidden p-2'>
            <svg width="65" height="65" viewBox="0 0 65 65" className='place-self-center scale-[150%]' fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_7_54)">
<path d="M33.4768 14.4538C33.1861 14.1632 32.792 14 32.381 14C31.9699 14 31.5758 14.1632 31.2851 14.4538L20.4351 25.3038C20.1528 25.5962 19.9965 25.9877 20.0001 26.3941C20.0036 26.8005 20.1666 27.1893 20.454 27.4766C20.7414 27.764 21.1301 27.927 21.5365 27.9306C21.9429 27.9341 22.3345 27.7779 22.6268 27.4955L23.081 27.0414V37.2497C23.081 37.6608 23.2443 38.055 23.5349 38.3457C23.8256 38.6364 24.2199 38.7997 24.631 38.7997H27.731C28.142 38.7997 28.5363 38.6364 28.827 38.3457C29.1177 38.055 29.281 37.6608 29.281 37.2497V34.1497C29.281 33.7386 29.4443 33.3443 29.7349 33.0537C30.0256 32.763 30.4199 32.5997 30.831 32.5997H33.931C34.342 32.5997 34.7363 32.763 35.027 33.0537C35.3177 33.3443 35.481 33.7386 35.481 34.1497V37.2497C35.481 37.6608 35.6443 38.055 35.9349 38.3457C36.2256 38.6364 36.6199 38.7997 37.031 38.7997H40.131C40.542 38.7997 40.9363 38.6364 41.227 38.3457C41.5177 38.055 41.681 37.6608 41.681 37.2497V27.0414L42.1351 27.4955C42.4274 27.7779 42.819 27.9341 43.2254 27.9306C43.6318 27.927 44.0205 27.764 44.3079 27.4766C44.5953 27.1893 44.7583 26.8005 44.7619 26.3941C44.7654 25.9877 44.6091 25.5962 44.3268 25.3038L33.4768 14.4538Z" fill="#FA4A0C"/>
</g>
<defs>
<filter id="filter0_d_7_54" x="-3.11902" y="-3.10034" width="71" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="10"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.841667 0 0 0 0 0.219258 0 0 0 0 0 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_54" result="shape"/>
</filter>
</defs>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='place-self-center scale-[150%]' xmlns="http://www.w3.org/2000/svg">
<path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="#ADADAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"  className='place-self-center scale-[150%]'xmlns="http://www.w3.org/2000/svg">
<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#ADADAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#ADADAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="29" height="29" viewBox="0 0 29 29" fill="none"  className='place-self-center scale-[150%]'xmlns="http://www.w3.org/2000/svg">
<g opacity="0.3">
<path d="M15.7084 3.625C12.8241 3.625 10.058 4.77076 8.01859 6.81021C5.97913 8.84967 4.83337 11.6158 4.83337 14.5H1.20837L5.90879 19.2004L5.99337 19.3696L10.875 14.5H7.25004C7.25004 9.82375 11.0321 6.04167 15.7084 6.04167C20.3846 6.04167 24.1667 9.82375 24.1667 14.5C24.1667 19.1763 20.3846 22.9583 15.7084 22.9583C13.3763 22.9583 11.2617 22.0038 9.73921 20.4692L8.02337 22.185C9.03042 23.1976 10.228 24.0008 11.547 24.5483C12.8659 25.0958 14.2803 25.3768 15.7084 25.375C18.5926 25.375 21.3587 24.2292 23.3982 22.1898C25.4376 20.1503 26.5834 17.3842 26.5834 14.5C26.5834 11.6158 25.4376 8.84967 23.3982 6.81021C21.3587 4.77076 18.5926 3.625 15.7084 3.625ZM14.5 9.66667V15.7083L19.6355 18.7533L20.5659 17.1946L16.3125 14.6692V9.66667H14.5Z" fill="black"/>
</g>
</svg>

        </nav>
            </main>
    </>)}
  
}

export default Loginandproducts