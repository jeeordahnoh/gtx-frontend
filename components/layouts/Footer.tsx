import { Box, Button, Container, Flex, Heading, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <section id="footer">
            <Container maxW={'container.lg'} pt={['60px','80px','130px']}>
                <Box mb={10}>
                    <Image src={'/images/logo.png'} h="60px" w={'80px'} objectFit={'contain'} />
                    <Text color={'white.100'}>
                        ©2023 GTX Labs Ltd
                    </Text>
                </Box>
                <SimpleGrid columns={[2,3,5,6]} spacing={3} justifyContent={'center'}>
                    <UnorderedList listStyleType={'none'}>
                        <ListItem my={5}>
                            <Heading color={'white'} fontSize={'18px'} fontWeight={'bold'} mt={'30px'}>
                                More about GTX
                            </Heading>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                About Us
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Careers
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Contact Us
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Terms of service
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Privacy policy
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Our Pitch Deck
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                VC Brief
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Law enforcement
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                GTX App
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Heading fontSize={'18px'} fontWeight={'bold'} mt={'30px'} color={'white'}>
                                Support
                            </Heading>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Support center
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Connect with GTX
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Privacy Policy
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Terms of Service
                            </Link>
                        </ListItem>
                    </UnorderedList>
                    <UnorderedList listStyleType={'none'}>
                        <ListItem my={5}>
                            <Heading color={'white'} fontSize={'18px'} fontWeight={'bold'} mt={'30px'}>
                                Products
                            </Heading>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy crypto
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                P2P trading
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Convert
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Trade
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                GTX Wallet
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Web3 Marketplace
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Crypto calculator
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                All cryptocurrencies
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                TradingView
                            </Link>
                        </ListItem>
                    </UnorderedList>
                    <UnorderedList listStyleType={'none'}>
                        <ListItem my={5}>
                            <Heading color={'white'} fontSize={'18px'} fontWeight={'bold'} mt={'30px'}>
                                Services
                            </Heading>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Affiliate
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                V5 API
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Historical market data
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Fee schedule
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Listing application
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                P2P Advertiser application
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Heading fontSize={'18px'} fontWeight={'bold'} mt={'30px'} color={'white'}>
                                Crypto Calculator
                            </Heading>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                BTC to USD
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                ETH to USD
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                USDT to USD
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                SOL to USD
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                XRP to USD
                            </Link>
                        </ListItem>
                    </UnorderedList>
                    <UnorderedList listStyleType={'none'}>
                        <ListItem my={5}>
                            <Heading color={'white'} fontSize={'18px'} fontWeight={'bold'} mt={'30px'}>
                                Buy crypto
                            </Heading>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy USDT
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy Bitcoin
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy Ethereum
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy ADA
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy Solana
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy MATIC
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy Litecoin
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy XRP
                            </Link>
                        </ListItem>
                    </UnorderedList>
                    <UnorderedList listStyleType={'none'}>
                        <ListItem my={5}>
                            <Heading color={'white'} fontSize={'18px'} fontWeight={'bold'} mt={'30px'}>
                                Trade
                            </Heading>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                BTC USDT
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                ETH USDT
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Buy Ethereum
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                MATIC USDT
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                LTC USDT
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                SOL USDT
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                XRP USDT
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Bitcoin price
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Ethereum price
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Cardano price
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                Solana price
                            </Link>
                        </ListItem>
                        <ListItem my={5}>
                            <Link href={'/'} style={{ color: "#ccc" , fontSize: "14px"}}>
                                XRP price
                            </Link>
                        </ListItem>
                    </UnorderedList>
                    <Flex justifyContent={'start'} alignItems={'center'} gap={'20px'} flexDirection={'column'}>
                        <Heading color={'white'} fontWeight={'bold'} fontSize={'20px'} mt={'30px'}>
                            Trade on the go
                            with GTX
                        </Heading>
                        <Button px={'25px'} borderRadius={'30px'}>Register</Button>
                        <Image src='/images/qr.png' width={'100%'} height={'150px'} objectFit={'contain'} alt='gtx' />
                        <Text color={'white'}>
                            Scan to download GTX App
                        </Text>
                    </Flex>
                </SimpleGrid>
                <Flex justifyContent={['start','center','end']} mt={'20px'}>
                    <Box>   
                        <Flex alignItems={'center'} gap={'20px'}>
                            <Heading color={'white'} fontSize={'20px'}>
                                Community
                            </Heading>
                            <Flex gap={'10px'}>
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaXTwitter />
                                </Link> 
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaTiktok />
                                </Link> 
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaInstagram />
                                </Link> 
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaDiscord />
                                </Link> 
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaTelegramPlane />
                                </Link> 
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaFacebook />
                                </Link> 
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaLinkedin />
                                </Link> 
                                <Link href={'/'} style={{ color: '#bbb', fontSize: '16px' }}>
                                    <FaYoutube />
                                </Link> 
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Flex justifyContent={'center'} py={'30px'}>
                    <Text color={'white.100'}>
                        ©2023 GTX Labs Ltd
                    </Text>
                </Flex>
            </Container>
        </section>
    </>
  )
}

export default Footer