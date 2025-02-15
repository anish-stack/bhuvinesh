'use client'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
        </>
    )
}

export default Layout
