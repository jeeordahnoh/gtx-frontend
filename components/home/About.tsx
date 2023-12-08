import { Box, Container, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <>
        <Container maxW={'container.lg'} pt={['60px','80px','130px']}>
            <Heading fontWeight={'bold'} fontSize={['16px','20px']} textTransform={'uppercase'} color={'white'} my={'15px'} textAlign={'center'}>
                ABOUT GTX
            </Heading>
            <Text fontSize={['20px','30px','45px']} color={'white'} my={'15px'} textAlign={'center'}>
                Unveiling Our Journey, Vision, and <br /> Commitment
            </Text>

            <SimpleGrid columns={[1,2]} spacing={10} mt={20}>
                <Box bgColor={'#1B1B24'} p={10} borderRadius={'10px'}>
                    <Heading fontSize={'18px'} color={'white'} mb={15}>
                        WHAT IS GTX?
                    </Heading>
                    <Text color={'white'}>
                     "GTX simplifies crypto for all. Our user-friendly ecosystem eases blockchain interactions, catering to novices and experts alike. We're dedicated to creating intuitive tools, making crypto investment accessible and efficient."
                    </Text>
                </Box>
                <Box border={'1px solid #fff'} p={10} borderRadius={'10px'}>
                    <Heading fontSize={'18px'} color={'white'} mb={15}>
                        OUR MISSION
                    </Heading>
                    <Text color={'white'}>
                        Our goal is to empower people to participate in the exciting world of cryptocurrencies with confidence and ease, and to help bridge the gap between traditional finance and the emerging digital economy.
                    </Text>
                </Box>
            </SimpleGrid>
        </Container>
    </>
  )
}

export default About