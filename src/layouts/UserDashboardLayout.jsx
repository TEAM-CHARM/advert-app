import React from 'react'
import { Outlet } from 'react-router-dom'

const UserDashboardLayout = () => {
  return (
    <div><ScrollRestoration /><Outlet /></div>
  )
}

export default UserDashboardLayout