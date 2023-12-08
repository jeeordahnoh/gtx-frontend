import React from 'react'
import {  Image, Flex, Button,  HStack , Text, Container, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { navMenus } from '@/data/navMenu';


const Navbar = () => {
  return (
    <>
        <Box width={'100%'} bgColor={'brand.100'}>
          <Container maxW={'container.xl'}>
            <Flex
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <Image src={'/images/logo.png'} h="60px" w={'80px'} objectFit={'contain'} />

            <Flex alignItems={'center'} gap={'10px'}>
              {navMenus.map((item, i) => (
                <Link key={i} href={item.url}>
                  <Text color={'white.100'}> {item.name} </Text>
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
            </Flex>
          </Flex>
          </Container>
        </Box>
    </>
  )
}

export default Navbar