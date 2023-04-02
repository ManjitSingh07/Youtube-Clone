import React from 'react'
import { Outlet } from 'react-router'
import Navigationbar from './Navbar/Navigationbar'
import Sidebar from './Sidebar/Sidebar'

function Parent() {
  return (
    <div>
        <Navigationbar />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Parent
