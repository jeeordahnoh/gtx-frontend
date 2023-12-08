import React, { useState } from 'react'
import {  Image, Flex, Button,  HStack , Text, Container, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { navMenus } from '@/data/navMenu';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <Box width={'100%'} bgColor={'brand.100'} position={'sticky'} top={0} zIndex={1000}>
          <Container maxW={'container.xl'}>
            <Flex
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <Image src={'/images/logo.png'} h="60px" w={'80px'} objectFit={'contain'} />

            <Flex alignItems={'center'} gap={'10px'} className={`menu-list ${isOpen ? 'menu-active' : ''}`}>
              {navMenus.map((item, i) => (
                <Link key={i} href={item.url} className='px-3'>
                  <Text color={'white.100'} fontSize={16}> {item.name} </Text>
                </Link>
              ))}
            </Flex>

            <Flex gap={'26px'}>
              <Button variant={'link'} color={'white.100'}>
                  Login
              </Button>
              <Button borderRadius={'30px'}>
                  Sign Up
              </Button>
              <Button 
                variant={'link'} 
                fontSize={'30px'} 
                color={'white.100'} 
                display={['block','block','none']} 
                onClick={() => setIsOpen(!isOpen)}>
                {
                  isOpen ? <RxCross1 /> : <RiMenu3Fill />
                }
              </Button>
            </Flex>
          </Flex>
          </Container>
        </Box>
    </>
  )
}

export default Navbar