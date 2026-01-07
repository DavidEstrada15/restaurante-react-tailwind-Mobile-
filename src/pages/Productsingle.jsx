import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Productsingle() {
    const location= useLocation()
    const {comida} = location.state
  return (
    <>
    <section className='flex flex-col'>

        <div className='flex justify-between p-5'><Link to='/Loginandproducts'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3667 3.84166C16.9411 3.41583 16.4357 3.07803 15.8795 2.84757C15.3233 2.6171 14.7271 2.49847 14.1251 2.49847C13.523 2.49847 12.9268 2.6171 12.3706 2.84757C11.8144 3.07803 11.309 3.41583 10.8834 3.84166L10.0001 4.725L9.11673 3.84166C8.25698 2.98192 7.09092 2.49892 5.87506 2.49892C4.6592 2.49892 3.49314 2.98192 2.63339 3.84166C1.77365 4.70141 1.29065 5.86747 1.29065 7.08333C1.29065 8.29919 1.77365 9.46525 2.63339 10.325L3.51673 11.2083L10.0001 17.6917L16.4834 11.2083L17.3667 10.325C17.7926 9.89937 18.1304 9.39401 18.3608 8.83779C18.5913 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48126 18.5913 5.88508 18.3608 5.32887C18.1304 4.77265 17.7926 4.26729 17.3667 3.84166V3.84166Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<div className='flex flex-col place-items-center gap-10'>
<img className='w-50 rounded-4xl' src={comida.image} alt="" />
<h2 className='text-2xl'>{comida.name}</h2>
<p className='text-center text-2xl text-orange-400'>${comida.price}</p>
</div>

<div className='p-10'>
    <h2 className='font-bold'>Delivery Info</h2>
    <p>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</p>
</div>

<div className='p-10'>
    <h2 className='font-bold'>Return Policy</h2>
    <p>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</p>
</div><button className=' bg-orange-600 text-white py-5  w-[90%] place-self-center rounded-4xl'>Add to Cart</button>
    </section>

    
    </>
  )
}

export default Productsingle