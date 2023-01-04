import React from 'react'
import Navbar from './Navbar'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Image, Spacer } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid, Grid, Flex } from '@chakra-ui/react'
import { Box, Button } from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import drysift from "../assets/dry-sift.png";
import melt from "../assets/melt.png";
import rosin from "../assets/rosin.png";
import { Stack } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import thirtythree from '../assets/Compressed pics/thirtythree.png'
import thirtyeight from '../assets/Compressed pics/thirtyeight.png'
import fourtythree from '../assets/Compressed pics/fourtythree.png'
import eleven from '../assets/Compressed pics/eleven.png'
import three from '../assets/Compressed pics/three.png'
import seventeen from '../assets/Compressed pics/seventeen.png'
import one from '../assets/Compressed pics/one.png'
import two from '../assets/Compressed pics/two.png'
import rectangle8 from '../assets/rectangle8.png'

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

  let navigate = useNavigate()




  async function connectOnClick() {
    setCurrentChain("juno")
    await connect()
  }

  return (
    <div className='base'>
      <Navbar />
      <div>
        <img className="connect-title-gold-bg mt-5" src={titleGoldBg} />
      </div>
      <div className='container'>
        <div className='holder'>

          <p className='steps-to-mint'>LA 2022 Results</p>
          <Center>
            <Heading color="white" size='xl'> Rosin Winners </Heading>
          </Center>
          <Center>
            <SimpleGrid rows={3} spacing={4}>
              <Center>  <Flex>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={thirtythree} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white' size='md' p='2'>First Place </Heading>
                    <Heading color='#F3C674' size='s' p='2'>Honey Bananas</Heading>
                    <Badge  ml={.25} mh={.5} fontSize='.86em' colorScheme='green' >Professor Sift</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
              <Center>  <Flex>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={thirtyeight} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white' size='md' p='2'>Second Place</Heading>
                    <Heading color='#F3C674' size='s' p='2'> Zenith</Heading>
                    <Badge ml={.25} mh={.5} fontSize='.86em' colorScheme='green' >Mega Raw Melts</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
              <Center>  <Flex>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={fourtythree} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white' size='md' p='2'>Third Place</Heading>
                    <Heading color='#F3C674' size='s' p='2'>Zapayaz</Heading>
                    <Badge ml={.25} mh={.5} fontSize='.86em' colorScheme='green' >Secret Hash Society</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
            </SimpleGrid>
          </Center>
          <Center>
            <Heading color="white" size='xl'> Melt Winners </Heading>
          </Center>
          <Center>
            <SimpleGrid rows={3} spacing={4}>
              <Center>  <Flex maxW='md'>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={rectangle8} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white' size='md' p='2'>First Place</Heading>
                    <Heading color='#F3C674' size='s' p='2'>ZhishkaBerry</Heading>
                    <Badge ml={.25} mh={.5} fontSize='.86em' colorScheme='blue' >Ice House Melt</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
              <Center>  <Flex>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={three} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white'size='md' p='2'>Second Place</Heading>
                    <Heading color='#F3C674' size='s' p='2'>Rainbow Beltz 2.0</Heading>
                    <Badge ml={.25} mh={.5} fontSize='.86em' colorScheme='blue' >Quality Squishes</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
              <Center> <Flex>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={seventeen} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white' size='md' p='2'>Third Place</Heading>
                    <Heading color='#F3C674'size='s' p='2'>Durban Sherbert</Heading>
                    <Badge ml={.25} mh={.5} fontSize='.86em' colorScheme='blue' >Gold Country Resin</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
            </SimpleGrid>
          </Center>
          <Center>
            <Heading color="white" size='xl'> Dry Sift Winners </Heading>
          </Center>
          <Center>
            <SimpleGrid rows={3} spacing={4}>
              <Center>  <Flex>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={one} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white' size='md' p='2'>First Place</Heading>
                    <Heading color='#F3C674' size='s' p='2'>Double Gypsy Kush Cake</Heading>
                    <Badge ml={.25} mh={.5} fontSize='.86em' colorScheme='red' >Wolverine Dabs</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
              <Center>  <Flex>
                <Card w='sm' direction='row' overflow='hidden' variant='outline'>
                  <Image maxW='170px' src={two} alt='EntryCover' />
                  <CardBody>
                    <Heading color='white' fontSize='lg' fontWeight='bold'></Heading>
                    <Heading color='white' size='md' p='2'>Second Place</Heading>
                    <Heading color='#F3C674' size='s' p='2'>Gelato Wedding Cake</Heading>
                    <Badge ml={.25} mh={.5} fontSize='.86em' colorScheme='red' >Wolverine Dabs</Badge>
                  </CardBody>
                </Card>
              </Flex>
              </Center>
            </SimpleGrid>
          </Center>
        </div>

      </div>
      <img className="footer" src={$footer} />
    </div>
  )
}

export default Results 