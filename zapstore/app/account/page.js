import Footer from '@/components/footer/Footer'
import NavBarComp from '@/components/navbar/NavBarComp'
import ProfilePage from '@/components/profilepage/ProfilePage'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import React from 'react'

export default function page() {
  return (
    <div>
        <Saleoffer />

        <NavBarComp />

        <ProfilePage />

        <Footer />
      
    </div>
  )
}


