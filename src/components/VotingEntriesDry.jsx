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
import { useWallet } from '@cosmos-kit/react'
import { queryEntries } from '../contracts/voteContract';
import { useEffect } from 'react';
import EntryCard from './EntryCard';


function VotingEntriesDry() {

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
  let params = useParams()

  const [ entries, setEntries ] = useState([])

  useEffect(() => {
    const getEntries = async () => {
      const client = await getSigningCosmWasmClient()
      
      // Query without any pagination
      // Lists 30 entries by default
      const response = await queryEntries(client, 'sift')
      setEntries(response.entries)
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
    setCurrentChain("juno")
   await connect()
  }

  return address && walletStatus === "Connected" ?  (
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
         {entries?.map(e => {
                  <Card direction='row' overflow='hidden' variant='outline'>
                  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
                  <Stack onClick={toVoting} >
                    <CardBody>
                      <Heading color='white' fontSize='xl' fontWeight='bold'>
                      {e.name}
                  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                    {e.maker_name}
                  </Badge>
                </Heading>
                      <Text py='2' color='white'>
                      {e.breeder}
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Flex>
                      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
                        Vote</Button>
                    <Spacer p='6'/>
                  <Tag colorScheme='white'>Successfully Voted</Tag></Flex>
                    </CardFooter>
                  </Stack>
                </Card>
         })}
</Grid>
</Container>
<img className="footer" src={$footer} />
 </div>
  ) : (
    <Container>
      {" "}
      <div className="base">
        <div>
          <Center>
            <Container>
              <img className="connect-title-gold-bg" src={titleGoldBg} />
              <Heading color='white' textAlign='center' mb={10} px="7" noOfLines={2}>
                Connect To Access Event Application{" "}
              </Heading>
            </Container>{" "}
          </Center>
        </div>

        <div className="container">
          <Center>
            <img borderRadius="full" className="icon" src={keplrLogo} />
          </Center>
          <Center>
            <Button
              colorScheme="whiteAlpha"
              color="white"
              mb={130}
              onClick={connectOnClick}
              size='lg'
            >
              Connect Keplr
            </Button>
                 </Center>
        </div>
      </div>
    </Container>
  )
}

export default VotingEntriesDry