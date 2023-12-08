import React from 'react'
import { Avatar, Box, Container, Flex, Heading, SimpleGrid, Text} from '@chakra-ui/react'
import { teamMembers } from '@/data/teamMember'
import Link from 'next/link'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const Team = () => {
  return (
    <>
        <Container maxW={'container.lg'} pt={['60px','80px','130px']}>
            <Heading fontWeight={'bold'} fontSize={['16px','20px']} textTransform={'uppercase'} color={'white'} my={'15px'} textAlign={'center'}>
                OUR TEAM
            </Heading>
            <Text fontSize={['20px','30px','45px']} color={'white'} my={'15px'} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Unde, odit?
            </Text>

            <SimpleGrid columns={[1,1,2]} spacing={10} mt={20}>
                {
                    teamMembers.map((item,index) => (
                        <Box key={index} bgColor={'#1B1B24'} p={10} borderRadius={'10px'}>
                            <Flex gap={'10px'} alignItems={'center'} mb={5}>
                                <Avatar name={item.name} src={item.image} size={'xl'} />
                                <Box>
                                    <Heading fontSize={'18px'}  color={'white'} mb={2}>
                                        {item.name}
                                    </Heading>
                                    <Text color={'blue.300'} fontWeight={'bold'} fontSize={'15px'}>
                                        {item.role}
                                    </Text>
                                </Box>
                            </Flex>
                            <Text color={'white'} fontSize={'15px'}>
                                {item.content}
                            </Text>
                            <Flex alignItems={'center'} gap={5} mt={5}>
                                <Link href={item.twitter} style={{ color: '#bbb', fontSize: '18px' }}>
                                    <FaXTwitter />
                                </Link> 
                                <Link href={item.linkedin} style={{ color: '#bbb', fontSize: '18px' }}>
                                    <FaLinkedin />
                                </Link> 
                            </Flex>
                        </Box>
                    ))
                }
            </SimpleGrid>
        </Container>
    </>

  )
}

export default Team