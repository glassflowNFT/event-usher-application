import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Center, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Button from 'react-bootstrap/Button';
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import { useEffect } from 'react';
import QRCode from 'qrcode';
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Scan() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient} = useWallet()

  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>

       <Navbar />
          <div>
            <img className="connect-title-gold-bg" src={titleGoldBg}/>
          </div>
          <img className="footer" src={$footer} />
        </div>
  ) : (
    <Container> <div className='base pb-5'>
           <div>
            <Center><Container><img className="connect-title-gold-bg" src={titleGoldBg}/>
                        <Heading  px='7' mb={80} noOfLines={2}>Connect To Access Event Application </Heading></Container> </Center>

           </div>

           <div className='container pb-5'>

             <Center><img  borderRadius='full' className='icon' src={keplrLogo}/></Center>
             <Center><Button colorScheme='whiteAlpha' color='white' mb={80} onClick={connect}>Connect Keplr</Button></Center>

             {error && <p>{error instanceof Error ? error.message : `${error}`}</p>}
             </div>
           </div>
           </Container>


   )
   return (
    <div>Scan</div>
  )
}
 

export default Scan