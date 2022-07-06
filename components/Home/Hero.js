import React from 'react'
import { Container, Flex, Box, Text, Heading } from "@chakra-ui/react";


const Hero = () => {
    
  return (
    <Box backgroundImage= "url('/images/hero-guy-girl-chatting.png')"   w="full"
    h="100vh"
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat" >
        <Container minW={{ xl: "4xl", "2xl": "6xl" }}>
            <Flex>
                <Box>
                    <Text>AFFORDABLE</Text>
                    <Heading as='h2'>SUBSCRIBE TODAY</Heading>
                </Box>
            </Flex>
        </Container>
    </Box>
  )
}

export default Hero