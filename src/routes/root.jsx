// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar/Navbar'

export default function Root() {
  return (
    <div>
      <Navbar />
      <div id="detail" className='bg-slate-200 text-black'>
        <Outlet />
      </div>
    </div>
  )
}