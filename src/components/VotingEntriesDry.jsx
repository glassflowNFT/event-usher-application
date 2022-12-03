import React, { useState } from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Button} from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Grid} from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"
import { queryEntries } from '../contracts/voteContract';
import { useEffect } from 'react';
import EntryCard from './EntryCard';

function VotingEntriesDry() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  
  let navigate = useNavigate()
  let params = useParams()

  const [ entries, setEntries ] = useState([])

  useEffect(() => {
    const getEntries = async () => {
      const response = await queryEntries(signingCosmWasmClient, 'sift')
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

  function nextCategory() {
      navigate('/Voting-Entries-Rosin')
  }

  function prevCategory() {
      navigate('/Voting-Entries-Melt')
  }

  function toVoteCategories() {
    navigate('/Voting-Categories')
  }

  async function connectOnClick() {
   await connect()
  }

  return (
    <div className='base'>
    <Navbar />
       <div><img className="connect-title-gold-bg mt-5" src={titleGoldBg}/> 
       </div>
       <Heading noOfLines={2} color='#F3C674' className='water-hash-title me-1' > Dry Sift Entries</Heading>
       <Flex  px='12'  py='5'> <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Water</Button>
  <Spacer />
        <Button colorScheme='teal' onClick={nextCategory} variant='outline'> Hashish Rosin </Button>
        </Flex>         <Center> <div className='container me-3'>
        <Center><Button mb={5}  onClick={toVoteCategories}> Return to All Entries</Button></Center>
                <div className='holder'>
                
                </div>
        </div>

        </Center>
              <Container s>
              <Grid templateRows='repeat(5, 1fr)' gap={6}>
                {entryArray?.map(e => {
                  return(
                          <EntryCard key={e.id} e={e} id={e.id} category={e.category}/>
                )})}
        </Grid>
        </Container>
        <img className="footer" src={$footer} />
 </div>
  )
}

export default VotingEntriesDry