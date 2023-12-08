import React from 'react'
import { Box, Container, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import { missions } from '@/data/missions'
import Image from 'next/image'


const Mission = () => {
  return (
    <>
        <Container maxW={'container.lg'} pt={['60px','80px','130px']}>
            <Heading fontWeight={'bold'} fontSize={['16px','20px']} textTransform={'uppercase'} color={'white'} my={'15px'} textAlign={'center'}>
                WHY GTX?
            </Heading>
            <Text fontSize={['20px','30px','45px']} color={'white'} my={'15px'} textAlign={'center'}>
                Why Choose GTX for Your <br /> Crypto Journey?
            </Text>

            <SimpleGrid columns={[1,1,2,3]} spacing={10} mt={20}>
                {
                    missions.map((item,index) => (
                        <Box key={index} bgColor={'rgba(47, 50, 65, 0.50)'} p={10} borderRadius={'12px'}>
                            <Image
                                src={item.image}
                                width={85}
                                height={85}
                                style={{ objectFit: 'cover', display: 'block', margin: 'auto' }}
                                alt='gtx' />

                            <Heading color={'white'} fontSize={'23px'} fontWeight={'bold'} mt={'10px'} mb={'20px'} textAlign={'center'}>
                                {item.title}
                            </Heading>

                            <Text color={'white'} textAlign={'center'} fontSize={'16px'}>
                                {item.content}
                            </Text>
                        </Box>
                    ))
                }
            </SimpleGrid>
        </Container>
    </>
  )
}

export default Mission