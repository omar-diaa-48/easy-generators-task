import { Outlet } from 'react-router-dom'
import Header from './Header'
import React from 'react'
import { ToastContainer, Flip } from 'react-toastify';

const MainLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <div className='pt-28' />
            <Outlet />
            <ToastContainer
                position="bottom-left"
                autoClose={2500}
                transition={Flip}
                limit={2}
            />
        </React.Fragment>
    )
}

export default MainLayout