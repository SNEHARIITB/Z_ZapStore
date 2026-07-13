"use client";


import Footer from '@/components/footer/Footer'
import NavBarComp from '@/components/navbar/NavBarComp'
import ProfilePage from '@/components/profilepage/ProfilePage'
import Saleoffer from '@/components/saleoffer/Saleoffer'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'

export default function page() {

  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <div>
        <Saleoffer />

        <NavBarComp currentUser={currentUser}/>

        <ProfilePage currentUser={currentUser}/>

        <Footer />
      
    </div>
  )
}


