import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import AboutUs from '../pages/AboutUs'
import Gallery from '../pages/Gallery'
import { AnimatePresence } from 'framer-motion'

const Routers = () => {
   const location = useLocation();

   return (
      <AnimatePresence>
         {/* بدي اعمل تبعت انه ما يفوت ع صفحة اللوقين وهوا مسجل دخول */}

         <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:id' element={<TourDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/thank-you' element={<ThankYou />} />
            <Route path='/tours/search' element={<SearchResultList />} />
            <Route path="/about" element={<AboutUs />} />
         </Routes>
      </AnimatePresence>
   )
}

export default Routers