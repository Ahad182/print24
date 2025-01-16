import React from 'react'
import { Outlet,ScrollRestoration  } from 'react-router-dom' 
import Header from './Header'
import Footer from './Footer'
import EmailSubscribe from '../Component/EmailSubscribe/EmailSubscribe'

const Layout = () => {
  return (
    <div className='relative'>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <EmailSubscribe/>
      <Footer/>
    </div>
  )
}

export default Layout
