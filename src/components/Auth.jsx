import React from 'react'
import { supabase } from '../supaBaseclient'

function Auth() {
    const HandleGoogleLogin= async () => {
        supabase.auth.signInWithOAuth({
            provider: "google",
            options:{
                redirectTo: window.location.origin + window.location.pathname + window.location.search
            }
        })
    }
  return (
    <>
    <button className='bg-orange-500 py-5 px-10 text-white rounded-3xl place-self-center' onClick={HandleGoogleLogin}>Iniciar sesion con Google</button>
    </>
  )
}

export default Auth