import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import { Heading } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Button } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import { Grid} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import keplrLogo from "../assets/keplrlogo.png";
import { useWallet } from '@cosmos-kit/react'
import { useEffect, useState } from 'react';
import { queryEntries } from '../contracts/voteContract';
import EntryCard from './EntryCard';

function VotingEntriesWater() {

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

  function nextCategory() {
    navigate('/Voting-Entries-Sift')  }

  function prevCategory() {
      navigate('/Voting-Entries-Rosin')
  }

  function toVoteCategories() {
    navigate('/Voting-Categories')
  }

  const [ entries, setEntries ] = useState([])

  useEffect(() => {
    const getEntries = async () => {
      const client = await getSigningCosmWasmClient()
      // Query without any pagination
      // Lists 30 entries by default
      const response = await queryEntries(client, 'melt')
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
//   const element = array[];

// }
  
  async function connectOnClick() {
    setCurrentChain("juno")
   await connect()
  }

  return address && walletStatus === "Connected" ?(
    <div className='base'>
    <Navbar />
       <div><img className="connect-title-gold-bg mt-5" src={titleGoldBg} alt="n/a"/>
         <Heading noOfLines={2} color='#F3C674' className='water-hash-title me-1' > Water Hashish Entries</Heading>
         <Flex  px='12'  py='5'> <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Hashish Rosin</Button>
  <Spacer />
<Button colorScheme='teal' onClick={nextCategory} variant='outline'> Dry Sift</Button>
</Flex>  
<Center><Button mb={5}  onClick={toVoteCategories}> Return to All Entries</Button></Center>
       </div>  

<Container s>
<Grid templateRows='repeat(5, 1fr)' gap={6}>
      {entryArray?.map(e => {       
           return(
              <EntryCard key={e.id} e={e} id={e.id} category={e.category} />
         )})}
</Grid>
</Container>

       <img className="footer" src={$footer} alt="n/a" />
 </div>
  ) : (
    <Container>
      {" "}
      <div className="base">
        <div>
          <Center>
            <Container>
              <img className="connect-title-gold-bg" src={titleGoldBg}  alt="n/a"/>
              <Heading color='white' textAlign='center' mb={10} px="7" noOfLines={2}>
                Connect To Access Event Application{" "}
              </Heading>
            </Container>{" "}
          </Center>
        </div>

        <div className="container">
          <Center>
            <img borderradius="full" className="icon" src={keplrLogo}  alt="n/a"/>
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

export default VotingEntriesWater