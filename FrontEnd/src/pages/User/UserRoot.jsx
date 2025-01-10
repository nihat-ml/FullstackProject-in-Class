import React from 'react'
import UserNavbar from '../../Components/UserNavbar'
import UserFooter from '../../Components/UserFooter'
import { Outlet } from 'react-router'

function UserRoot() {
  return (
    <>
        <UserNavbar/>
        <Outlet/>
        <UserFooter/>
    </>
  )
}

export default UserRoot