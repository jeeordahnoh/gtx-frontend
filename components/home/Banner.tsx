import { latestPrice } from '@/data/latestPrice';
import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <>
        <Container maxW={'container.lg'} pt={['60px','80px','130px']}>
            <Flex width={'100%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'35px'}>
                <Heading 
                    color={'white.100'} 
                    fontWeight={'bold'} 
                    fontSize={['30px','40px','60px']} 
                    textAlign={'center'}>
                    THE FUTURE OF EXCHANGING <br /> DIGITAL ASSETS.
                </Heading>
                <Text 
                    color={'white.100'}
                    fontSize={'16px'}
                    textAlign={'center'}
                    >
                    Join the decentralized movement with an ever-expanding network of connected apps powered by GTX.
                </Text>
                <Box 
                    bgColor={'rgba(47, 50, 65, 0.50)'} 
                    border={'1px solid #34384C'} 
                    borderRadius={'30px'}
                    px={4}
                    py={2}>
                    <Flex gap={'10px'} flexDirection={['column','row']}>
                        <Input 
                            variant='unstyled'
                            width='240px'
                            size={'md'}
                            color={'white'}
                            placeholder='Enter your email address' />
                        <Button bgColor={'blue.300'} borderRadius={'30px'} color={'white'}>
                            Get Start
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Container>
        <Box w={'100%'} p={'15px 0px 15px 0px'} bg={'linear-gradient(90deg, #FF8A00 0%, #D449F7 100%)'} mt={'70px'}>
            <Marquee
                pauseOnHover={true}
                speed={70}
                autoFill={true}
            >
                {
                    latestPrice.map((price,index) => (
                        <Text key={index} fontWeight={'bold'} color={'white'} mx={'20px'}>
                            {`${price.coin} ${price.price} (${price.percent})`}
                        </Text>
                    ))
                }
            </Marquee>
        </Box>
    </>
  )
}

export default Banner