"use client"

import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading, Text} from '@chakra-ui/react'
import { faqs } from '@/data/faqs'

const Faqs = () => {

  return (
    <>
        <Container maxW={'container.lg'} pt={['60px','80px','130px']}>
            <Heading fontWeight={'bold'} fontSize={['16px','20px']} textTransform={'uppercase'} color={'white'} my={'15px'} textAlign={'center'}>
                FAQS
            </Heading>
            <Text fontSize={['20px','30px','45px']} color={'white'} my={'15px'} textAlign={'center'}>
                What Some People Are Asking <br /> GTX..
            </Text>

            <Accordion minH={'400px'}>
                {
                    faqs.map((faq,index) => (
                        <AccordionItem key={index} border={'none'} p={'20px'}>
                            <Heading color={'white'}>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {faq.question}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel pb={6} color={'white'}>
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>       
                    ))
                }
            </Accordion>
        </Container>
    </>
  )
}

export default Faqs