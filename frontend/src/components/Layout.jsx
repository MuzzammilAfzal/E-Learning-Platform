import React from 'react'
import { Outlet } from 'react-router-dom'
import CopilotSidebar from './CopilotSidebar'
import NavLogin from './NavBar'

const Layout = () => {
  return (
    <div>
      <NavLogin/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout