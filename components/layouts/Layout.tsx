"use client"

// import dynamic from "next/dynamic";
import React from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import theme from '@/theme'
import Navbar from "./Navbar";


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
        </ChakraProvider>
    </>
  )
}

export default Layout
