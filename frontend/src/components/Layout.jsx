import React from 'react'
import { Outlet } from 'react-router-dom'
import CopilotSidebar from './CopilotSidebar'

const Layout = () => {
  return (
    <div>
        <CopilotSidebar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout