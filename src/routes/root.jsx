// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar/Navbar'

export default function Root() {
  return (
    <div className=''>
      <Navbar />
      <div id="detail" className='h-screen bg-slate-200'>
        <Outlet />
      </div>
    </div>
  )
}