import React from 'react'
import "./App.css"
import Simple from './components/Simple'
import ProductOverview from './components/ProductOverview'
import Header from './components/Header'
import Tours from './components/Tours'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TourDetails from './components/TourDetails'

import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Gallery from './components/Gallery'
import Login from './components/Login'
import Form from './components/Form'
import TabSelector from './components/TabSelector'
import { Toaster } from 'react-hot-toast'
import GenrateImg from './components/GenrateImg'
import Weather from './components/Weather'

export default function App() {



  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Header p1='HOME' p2='TOURS' p3='GALLERY' p4='FORM' p5='WEATHER' />
      <Routes>
        <Route path='/' element={<Tours />} />
        <Route path='/toursDetail/:tourId' element={<TourDetails />} />
        <Route path='/gallery' element={<Gallery />} />

        <Route path='/weather' element={<Weather />} />
        <Route path='/login' element={<GenrateImg />} />
        <Route path='/form' element={<TabSelector />} />

      </Routes>
    </BrowserRouter>
  )
}
