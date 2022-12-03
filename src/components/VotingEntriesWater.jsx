import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate, useParams } from 'react-router-dom';
import { Badge } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import { Tag } from '@chakra-ui/react'
import { queryEntries } from '../contracts/voteContract';
import { useEffect, useState } from 'react';
import EntryCard from './EntryCard';
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function VotingEntriesWater() {

  
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  let navigate = useNavigate()
  let params = useParams()

  function nextCategory() {
      navigate('/Voting-Entries-Sift')
  }

  function prevCategory() {
      navigate('/Voting-Entries-Rosin')
  }

  function toVoteCategories() {
    navigate('/Voting-Categories')
  }


  const [ entries, setEntries ] = useState([])

  useEffect(() => {
    const getEntries = async () => {

      const response = await queryEntries(signingCosmWasmClient, 'melt')
      setEntries(response)
    }

    getEntries()
  }, [])

  const entryArray = []

 entries?.forEach(function (e) {

  var x = e.data
  x.id = e.id

 entryArray.push(x)
 })

 console.log(entryArray);

  async function connectOnClick() {
   await connect()
  }

  return(
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg mt-5" src={titleGoldBg}/></div>
         <Heading noOfLines={2} color='#F3C674' className='water-hash-title me-1' > Water Hashish Entries</Heading>
         <Flex  px='12'  py='5'> <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Hashish Rosin</Button>
  <Spacer />
<Button colorScheme='teal' onClick={nextCategory} variant='outline'> Dry Sift</Button>
</Flex>  

<Center><Button mb={5}  onClick={toVoteCategories}> Return to All Entries</Button></Center>

<Container s>
       <Grid templateRows='repeat(5, 1fr)' gap={6}>
         {entryArray?.map(e => {
           return(
                 <EntryCard key={e.id} e={e} id={e.id} category={e.category} />
         )})}
</Grid>
</Container>

       <img className="footer" src={$footer} />
 </div>
 )
}

export default VotingEntriesWater