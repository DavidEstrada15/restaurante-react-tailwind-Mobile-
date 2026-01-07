import React from 'react'
import icon from "../assets/icon.png"
import mister from "../assets/mister.png"
import miss from "../assets/miss.png"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <section className='bg-orange-600 h-screen p-5 flex flex-col gap-10 sm:hidden'>
        <img className='bg-white rounded-4xl w-20' src={icon} alt="" />
        <h2 className='text-white text-6xl font-bold'>Food for Everyone</h2>
        <div className='flex'>
        <img className='w-full h-50 -rotate-3' src={miss} alt="" />
        <img  className='w-full h-50 rotate-5'src={mister} alt="" /></div>
        <Link to='Loginandproducts'><button className='bg-white py-5 rounded-4xl text-orange-500 font-bold w-[90%]'>Get Starteed</button></Link>
        
    </section>
    <h1 className='hidden sm:visible text-red'>Entra desde un dispositivo movil</h1>
    </>
  )
}

export default Home