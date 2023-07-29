import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
   return (
      <>
         <Header />
         <Routers />
         <Footer />
         <ToastContainer position={"bottom-right"} />
      </>
   )
}

export default Layout