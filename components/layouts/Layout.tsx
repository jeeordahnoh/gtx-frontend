"use client"
import React from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import theme from '@/theme'
import Navbar from "./Navbar";
import Footer from './Footer';


const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <>
        <ChakraProvider theme={theme} cssVarsRoot="body">
            <Navbar />
            {children}
            <Footer />
        </ChakraProvider>
    </>
  )
}

export default Layout
