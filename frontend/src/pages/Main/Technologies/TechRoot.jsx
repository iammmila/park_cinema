import React from 'react'
import { Outlet } from 'react-router-dom'

function TechRoot() {
    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default TechRoot