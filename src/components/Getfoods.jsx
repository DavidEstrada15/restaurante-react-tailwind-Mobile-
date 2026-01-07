import React from 'react'
import {useEffect, useState} from "react"
import { Link } from 'react-router-dom'
function Getfoods() {
    const [datos, setDatos] = useState([])
useEffect(() =>{
    const comidas= async () =>{
        await fetch("https://devsapihub.com/api-fast-food").then(response => response.json()).then(data =>{
            setDatos(data)
        })
    }

    comidas()
}) 
  return (
    <section className='flex gap-5 overflow-x-scroll p-10 bg-gray-200'>
        {datos.map(comida => (
            <Link to='/Productsingle' key={comida.id} state={{comida}} >
            <article className='flex flex-col gap-1 px-10 py-1  bg-white rounded-3xl'>
               <img className='w-[30vw] max-w-max relative bottom-5 rounded-4xl' src={comida.image} alt="" /> 
                <h2 className='line-clamp-2'>{comida.name}</h2>
                <p className='text-center text-orange-500'>${comida.price}</p>
                </article></Link>
        ))}
    </section>
  )
}

export default Getfoods