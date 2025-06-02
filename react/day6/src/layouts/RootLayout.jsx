import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return (
        <div>
            <Header />

            <main className="p-10 min-h-screen">

                <Outlet />

            </main>

            <Footer />

        </div>
    )
}

export default RootLayout