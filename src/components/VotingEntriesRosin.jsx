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
import { queryRosinEntries } from '../contracts/voteContract';
import EntryCard from './EntryCard';
import rectangle8 from '../assets/rectangle8.png'
import eighteen from '../assets/Compressed pics/eighteen.png'
import nineteen from '../assets/Compressed pics/nineteen.png'
import twenty from '../assets/Compressed pics/twenty.png'
import twentyone from '../assets/Compressed pics/twentyone.png'
import twentytwo from '../assets/Compressed pics/twentytwo.png'
import twentythree from '../assets/Compressed pics/twentythree.png'
import twentyfour from '../assets/Compressed pics/twentyfour.png'
import twentyfive from '../assets/Compressed pics/twentyfive.png'
import twentysix from '../assets/Compressed pics/twentysix.png'
import twentyseven from '../assets/Compressed pics/twentyseven.png'
import twentyeight from '../assets/Compressed pics/twentyeight.png'
import twentynine from '../assets/Compressed pics/twentynine.png'
import thirty from '../assets/Compressed pics/thirty.png'
import thirtyone from '../assets/Compressed pics/thirtyone.png'
import thirtytwo from '../assets/Compressed pics/thirtytwo.png'
import thirtythree from '../assets/Compressed pics/thirtythree.png'
import thirtyfour from '../assets/Compressed pics/thirtyfour.png'
import thirtyfive from '../assets/Compressed pics/thirtyfive.png'
import thirtysix from '../assets/Compressed pics/thirtysix.png'
import thirtyseven from '../assets/Compressed pics/thirtyseven.png'
import thirtyeight from '../assets/Compressed pics/thirtyeight.png'
import thirtynine from '../assets/Compressed pics/thirtynine.png'
import fourty from '../assets/Compressed pics/fourty.png'
import fourtyone from '../assets/Compressed pics/fourtyone.png'
import fourtytwo from '../assets/Compressed pics/fourtytwo.png'
import fourtythree from '../assets/Compressed pics/fourtythree.png'
import fourtyfour from '../assets/Compressed pics/fourtyfour.png'
import fourtyfive from '../assets/Compressed pics/fourtyfive.png'
import fourtysix from '../assets/Compressed pics/fourtysix.png'
import fourtyseven from '../assets/Compressed pics/fourtyseven.png'
import fourtyeight from '../assets/Compressed pics/fourtyeight.png'
import fourtynine from '../assets/Compressed pics/fourtynine.png'
import fiftyone from '../assets/Compressed pics/fiftyone.png'
import fiftytwo from '../assets/Compressed pics/fiftytwo.png'
import fiftythree from '../assets/Compressed pics/fiftythree.png'
import fiftyfour from '../assets/Compressed pics/fiftyfour.png'
import fiftyfive from '../assets/Compressed pics/fiftyfive.png'
import { Input, Stack } from '@chakra-ui/react';


function VotingEntriesRosin() {

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

  function toVoteCategories() {
    navigate('/Voting-Categories')
  }

  const [ entries, setRosinEntries ] = useState([])
  const [query, setQuery] = useState('')

  function nextCategory() {
    navigate('/Voting-Entries-Melt')
  }

  function prevCategory() {
    navigate('/Voting-Entries-Sift')
  }

  useEffect(() => {
    const getRosinEntries = async () => {
      const client = await getSigningCosmWasmClient()
      // Query without any pagination
      // Lists 30 entries by default
      const entryResponse = await queryRosinEntries(client, 'rosin')
      setRosinEntries(entryResponse)
    }

    getRosinEntries()
  }, [])

  const entryArray = []
  let rosinPhotoArray = []
  let newArray = []

   rosinPhotoArray.push(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone,thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, fourty, fourtyone, fourtytwo, fourtythree, fourtyfour, fourtyfive, fourtysix, fourtyseven, fourtyeight, fourtynine, rectangle8, fiftyone, fiftytwo, fiftythree, fiftyfour, fiftyfive)

 entries?.forEach((e, i) => {

   var x = e.data
   x.id = e.id

  rosinPhotoArray?.map((p, i) => {
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
         <Heading p='4' noOfLines={2} color='#F3C674' className='water-hash-title me-1' > Hash Rosin Entries</Heading>
       <Center>
         <Stack>
        <Input placeholder='Search...' m={'auto'} w='200px' onChange={handleQuery} color={'white'}/>
        <ButtonGroup spacing='2'>
        <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Sift</Button>
        <Button mb={5} w='100px'  onClick={toVoteCategories}> All Entries</Button> 
        <Button p='5'colorScheme='teal' onClick={nextCategory} variant='outline'> Water </Button>
        </ButtonGroup>
        </Stack>
        |</Center>     
       </div>  

<Container>
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

export default VotingEntriesRosin