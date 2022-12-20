import React from 'react'
import Navbar from './Navbar'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid, Grid } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import drysift from "../assets/dry-sift.png";
import melt from "../assets/melt.png";
import rosin from "../assets/rosin.png";
import { useNavigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import { useWallet } from '@cosmos-kit/react'




function Results() {

  const walletManager = useWallet()
  const {
    currentChainName,
    currentWalletName,
    walletStatus,
    username,
    address,
    message,
    connect,
    disconnect,
    openView,
    setCurrentChain,
    getSigningCosmWasmClient
  } = walletManager;
  
  let navigate =useNavigate()


 

  async function connectOnClick() {
    setCurrentChain("juno")
   await connect()
  }

  return  (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg mt-5" src={titleGoldBg}/>
       </div>
       <div className='container'>
         <div className='holder'>
         <div className='instructions'>
                  <p className='steps-to-mint'>LA 2022 Results</p>
  <SimpleGrid rows={3} spacing={4}>
  <Card variant='outline'  >
    <CardHeader >
      <Center>
      <Heading color="white"  size='xl'> Hashish Winners </Heading>
      </Center>
    </CardHeader>
    <Center>
    <CardBody>
    <Center><Grid templateColumns='repeat(5, 1fr)' gap={6}>
   
</Grid></Center>
    </CardBody>
    </Center>
    <CardFooter>
    </CardFooter>
  </Card>
  <Card variant='outline'  >
    <CardHeader>
      <Center><Heading color="white" size='xl'>Water Hashish Winners </Heading></Center>
    </CardHeader>
    <CardBody>
    <Center></Center>
    <Center> </Center>
    </CardBody>
    <CardFooter>
   
    </CardFooter>
  </Card>
  <Card variant='outline' >
    <CardHeader>
      <Center><Heading  color="white" size='xl'> Dry Sift Winners</Heading></Center>
    </CardHeader >
    <CardBody>
    <Center></Center>
    <Center></Center>
    </CardBody>
  
  </Card>
</SimpleGrid>
              </div>
         </div>
       </div>
       <img className="footer" src={$footer} />
 </div>
 ) 
  }

export default Results 