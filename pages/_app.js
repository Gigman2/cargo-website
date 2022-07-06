import { ChakraProvider } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react";
import NavBar from '../components/Home/NavBar';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box fontFamily='body' overflowX='hidden'>
        <NavBar />
     <Box mt={20}>
     <Component {...pageProps} />
     </Box>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
