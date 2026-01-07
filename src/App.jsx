import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Loginandproducts from "./pages/Loginandproducts.jsx"
import Productsingle from "./pages/Productsingle.jsx"
function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/Loginandproducts' element={<Loginandproducts></Loginandproducts>}></Route>
  <Route path='/Productsingle' element={<Productsingle></Productsingle>}></Route>
</Routes>
    </>
  )
}

export default App
