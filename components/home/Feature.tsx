import { latestPrice } from '@/data/latestPrice'
import { Button, Container, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <>
        <Container maxW={'container.lg'} pt={['60px','80px','130px']}>
            <Heading fontWeight={'bold'} fontSize={['16px','20px']} textTransform={'uppercase'} color={'white'} my={'15px'} textAlign={'center'}>
                Features
            </Heading>
            <Text fontSize={['20px','30px','45px']} color={'white'} my={'15px'} textAlign={'center'}>
                Obtain a comprehensive overview <br /> of your cryptocurrency portfolio.
            </Text>
            <Text color={'white'} my={'15px'} textAlign={'center'}>
                Stay informed about the most recent developments in the <br /> cryptocurrency sector and maintain a competitive edge in the market.
            </Text>

            <TableContainer mt={'60px'} bgColor={'#1B1E31'} border={'30px'} p={'20px'}>
                <Table>
                    <Thead>
                    <Tr>
                        <Th color={'rgba(111, 116, 176, 1)'} border={'1px solid transparent'}>Assets</Th>
                        <Th color={'rgba(111, 116, 176, 1)'} border={'1px solid transparent'}>Last Price</Th>
                        <Th color={'rgba(111, 116, 176, 1)'} border={'1px solid transparent'}>Change</Th>
                        <Th color={'rgba(111, 116, 176, 1)'} border={'1px solid transparent'}>Trade</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                            latestPrice.map((price,index) => (
                                <Tr key={index}>
                                    <Td border={'1px solid transparent'}>
                                        <Flex gap={'17px'} alignItems={'center'}>
                                            <Image 
                                                src={price.image} 
                                                width={40} 
                                                height={40} 
                                                sizes='100%'
                                                style={{ objectFit: 'cover' }} 
                                                alt={price.name} />
                                            <Heading fontSize={'16px'} fontWeight={'bold'} color={'white'}>
                                                {price.coin}
                                            </Heading>
                                            <Text color={'white'}>
                                                {price.name}
                                            </Text>
                                        </Flex>
                                    </Td>
                                    <Td border={'1px solid transparent'}>
                                        <Text color={'white'}>
                                            {"USD "+price.price}
                                        </Text>
                                    </Td>
                                    <Td border={'1px solid transparent'}>
                                        <Text color={'white'}>
                                            {price.percent}
                                        </Text>
                                    </Td>
                                    <Td border={'1px solid transparent'}>
                                        <Button bgColor={'transparent'} border={'1px solid #fff'} borderRadius={'30px'} color={'white'}>
                                            Buy
                                        </Button>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
                </TableContainer>
        </Container>
    </>
  )
}

export default Feature