import React from 'react'
import Navbar from './Navbar'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate } from 'react-router-dom'

function VotingCategories() {

  let navigate =useNavigate()

  function toRosin() {
      navigate('/Voting-Entries-Rosin')
  }
  function toWater() {
      navigate('/Voting-Entries-Water-Hashish')
  }
  function toSift() {
    navigate('/Voting-Entries-Dry-Sift')
  }
  

  return (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg" src={titleGoldBg}/>
       </div>
      



       <div className='container'>
         <div className='holder'>
         <div className='instructions'>
                  <p className='steps-to-mint'>Voting Categories</p>
  <SimpleGrid rows={3} spacing={4}>
  <Card onClick={toRosin}>
    <CardHeader >
      <Center>
      <Heading size='xl'> Hash Rosin </Heading>
      </Center>
    </CardHeader>
    <Center>
    <CardBody>
    <Center><Image borderRadius='full' boxSize='250px' src={rectangle8} alt='Water Hash'/></Center>
    <Center><Heading size='md'>View all Hash Rosin</Heading></Center>
    </CardBody>
    </Center>
    <CardFooter>
    </CardFooter>
  </Card>
  <Card onClick={toWater}>
    <CardHeader>
      <Center><Heading size='xl'>Water Hashish </Heading></Center>
    </CardHeader>
    <CardBody>
    <Center><Image borderRadius='full' boxSize='250px' src={rectangle8} alt='Water Hash'/></Center>
    <Center><Heading size='md'>View All Water Hash</Heading> </Center>
    </CardBody>
    <CardFooter>
   
    </CardFooter>
  </Card>
  <Card  onClick={toSift}>
    <CardHeader>
      <Center><Heading size='xl'> Dry Sift Entries</Heading></Center>
    </CardHeader >
    <CardBody>
    <Center><Image borderRadius='full' boxSize='250px' src={rectangle8} alt='Water Hash'/></Center>
    <Center><Heading size='md'>View all Dry Sift</Heading></Center>
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

export default VotingCategories