import React from 'react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,} from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/react'
import Navbar from './Navbar';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import sponsors1 from "../assets/sponsors1.png";
import { Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import waterHash from "../assets/waterhash.png";
import keplrLogo from "../assets/keplrlogo.png";
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Axios from "axios";
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"
import { setSelectionRange } from '@testing-library/user-event/dist/utils'


function Home() {
  let navigate = useNavigate()

  const [loading, setLoading] = useState(false)



  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, publucKey, signingCosmWasmClient } = useWallet()

  const acc = localStorage.getItem("account")

  console.log(status);
  

  function toConnect() {
      navigate('/Connect')
  }
  function toVoteCategories() {
    navigate('/Voting-Categories')
  }
  function toMothership() {
    navigate('/Mothership')
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
    
      
      <Navbar />
      <Center><div>
        <img className="title-gold-bg" src={titleGoldBg}/>
      </div></Center>
    
      <Center><Heading color="white" mb={4}>Transparent Judging Application for The Legends of Hashish: 2022</Heading></Center>

      <div className='container me-3'>
        <div className="row">
          <div className='col'>          
</div> 


</div>
  <Box p='2'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading color="white"  size='md'>Display Your Ticket QR.</Heading>
      <Text color="white" py='2'>
      Ensure you have already installed & imported your Legends Event Mnemonic Seed to Keplr Mobile.
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'  onClick={toConnect}>
        Connect
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Box>

<Box p='2'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading color='white' size='md'>Vote On Entries</Heading>
      <Text color='white' py='2'>
      Judge allocates points for each of this years entries, not including their own.
      
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue' onClick={toVoteCategories}>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Box>

<Box p='2'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading color='white' size='md'>Legends of Hashish x Mothership NFT's</Heading>
      <Text py='2'>
      Gain Access to the mothership
      
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue' onClick={toMothership}>
        Mint
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Box>

<Box p='2'>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading color="white" size='md'>Info / FAQ</Heading>
      <Text color="white" py='2'>
      Information and frequently asked questions.
      
      </Text>
    </CardBody>
    <CardFooter>
    <Button variant='solid' colorScheme='blue' onClick={onOpen}>Learn More</Button> 
    </CardFooter>
  </Stack>
</Card>
</Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>FAQ</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          1. Why did we build this application?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Applications powered by smart contracts and cryptographic wallets unlocks true censorship resistant technology that our culture needs, now.
 Our use case of providing transparency within a voting system is just one small example of how we can, as a community build and own smart contract applications. 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          2. How do I find my Wallet QR Code?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
  You can find the QR code needed to access the Legends event in two places. 
  The first place is in the connect page within the application. Simple return to the home page, and the first button you see will take you to where a QR code will
   be automatically generated for the wallet connected to the application. 
    </AccordionPanel>
  </AccordionItem>
<AccordionItem>
<h2><AccordionButton>
        <Box flex='1' textAlign='left'>3. I am a judge, How do I vote?</Box>
<AccordionIcon />
</AccordionButton>
</h2>
<AccordionPanel pb={4}>
     Legends FAQ here
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
<h2><AccordionButton>
        <Box flex='1' textAlign='left'>4. Can I mint any NFT's?</Box>
<AccordionIcon />
</AccordionButton>
</h2>
<AccordionPanel pb={4}>
     Legends FAQ here
    </AccordionPanel>
  </AccordionItem>
</Accordion>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'><Text>
 
  <Link color='teal.500' href='https://iris-talon-1e3.notion.site/The-Official-Legends-Event-Judging-Ticket-Application-Wiki-72a7759568854729a137812f1a9d5e5a'>
View Wiki   </Link>
</Text></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      
      </div>
    
      <div className='holder'>
        <Center><p className="transparent-judging">
          
        </p></Center>
       
        <img className="sponsors-1" src={sponsors1} />
        </div>
          <img className="footer" src={$footer} />
         
    </div>
  ) : (
   <Container> <div className='base pb-5'>
          <div>
           <Center><Container><img className="connect-title-gold-bg" src={titleGoldBg}/>
                       <Heading color='#fefefe' px='7' mb={80} noOfLines={2}>Connect To Access Event Application </Heading></Container> </Center>

          </div>
        
          <div className='container pb-5'>

            <Center><img  borderRadius='full' className='icon' src={keplrLogo}/></Center>
            <Center><Button colorScheme='whiteAlpha' color='white' mb={80} onClick={connect}>Connect Keplr</Button></Center>
         
            {error && <p>{error instanceof Error ? error.message : `${error}`}</p>}
            </div>
          </div>
          </Container>


  )
}
function BasicUsage() {
  
  return (
    <>
      
    </>
  )
}

export default Home