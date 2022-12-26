import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import { Heading } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Button, ButtonGroup } from '@chakra-ui/react'
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
import three from '../assets/Compressed pics/three.png'
import four from '../assets/Compressed pics/four.png'
import five from '../assets/Compressed pics/five.png'
import six from '../assets/Compressed pics/six.png'
import seven from '../assets/Compressed pics/seven.png'
import eight from '../assets/Compressed pics/eight.png'
import nine from '../assets/Compressed pics/nine.png'
import ten from '../assets/Compressed pics/ten.png'
import eleven from '../assets/Compressed pics/eleven.png'
import twelve from '../assets/Compressed pics/tweleve.png'
import thirteen from '../assets/Compressed pics/thirteen.png'
import fourteen from '../assets/Compressed pics/fourteen.png'
import fifteen from '../assets/Compressed pics/fifteen.png'
import sixteen from '../assets/Compressed pics/sixteen.png'
import seventeen from '../assets/Compressed pics/seventeen.png'
import { FormGroup } from 'react-bootstrap';
import { Input, Stack } from '@chakra-ui/react';

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


  function nextCategory() {
    navigate('/Voting-Entries-Sift')  }

  function prevCategory() {
      navigate('/Voting-Entries-Rosin')
  }

  function toVoteCategories() {
    navigate('/Voting-Categories')
  }

  const [ entries, setEntries ] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getEntries = async () => {
      const client = await getSigningCosmWasmClient()
      
      // Query without any pagination
      // Lists 30 entries by default
      const response = await queryEntries(client, 'melt')
      setEntries(response)
    }

    getEntries()
  }, [])

  const entryArray = []
  let waterPhotoArray = []
  let newArray = []

  waterPhotoArray.push(null, null, null, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen)

 entries?.forEach((e, i) => {

   var x = e.data
   x.id = e.id

  waterPhotoArray?.map((p, i) => {
   if (i === x.id) {
     x.photo = p
   }
 })
 entryArray.push(x)
 })

 console.log(entryArray);
  
  async function connectOnClick() {
    setCurrentChain("juno")
   await connect()
  }

  const handleQuery = e => {
    setQuery(e.target.value)
   }

  const filteredEntryArray = entryArray?.filter(e => e.name.toLowerCase().includes(query.toLowerCase()))

  return address && walletStatus === "Connected" ?(
    <div className='base'>
    <Navbar />
       <div><img className="connect-title-gold-bg mt-5" src={titleGoldBg} alt="n/a"/>
         <Heading p='4' noOfLines={2} color='#F3C674' className='water-hash-title me-1' > Water Hashish Entries</Heading>
       <Center>
         <Stack>
       <Input placeholder='Search...' onChange={handleQuery} color={'white'}/>
        <ButtonGroup spacing='2'>
        <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Hashish Rosin</Button>
        <Button mb={5}  onClick={toVoteCategories}> Return to All Entries</Button> 
        <Button p='5'colorScheme='teal' onClick={nextCategory} variant='outline'>  Dry Sift </Button>
        </ButtonGroup>
        </Stack>
        |</Center>     
        <Center> </Center>
       </div>  

<Container s>
<Grid templateRows='repeat(5, 1fr)' gap={6}>
      {filteredEntryArray?.map(e => {       
           return(
              <EntryCard key={e.id} e={e} id={e.id} category={e.category} src={e.photo} />
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