import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Center, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Button from 'react-bootstrap/Button';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";

function Connect() {
  return (
    <div className='base'>
      
       <Navbar />
          <div>
            <img className="connect-title-gold-bg" src={titleGoldBg}/>
          </div>
          <Container>
          <div className='container'>
        <Center><img  borderRadius='full' className='icon' src={keplrLogo}/></Center>
            <div className='connect-holder'>
            <Text>Connect and display your QR code for access to The legends Of Hashish. </Text>  
              <Button type='button' className='btn btn-warning'> Connect Keplr Wallet</Button>
            </div>
          </div>
          <Container maxW='2xl' s centerContent>
  <Box padding='4' color='black' maxW='md'>
  <VStack spacing={12} align='center'>
  <Box h='40px' bg='#222222'>
  <Textarea isDisabled placeholder='Display Type of Guest {Maker, Makers Guest, Legends Guest, Special Guest,Admin}' />
  </Box>
  <Box h='40px' bg='#222222'>
  <Textarea isDisabled placeholder='Display Event Attendance Details: {dinner, brunch, or both}' />
  </Box>
  <Box h='40px' bg='#222222'>
  <Textarea isDisabled placeholder='Display guest arrival boolean: {Has arrived? True or False}' />
  </Box>
</VStack>
  </Box>
</Container>
          </Container>
  
          <img className="footer" src={$footer} />
    </div>
  )
}

export default Connect