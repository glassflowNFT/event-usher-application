import React from 'react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
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
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Home() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  let navigate = useNavigate()
  function toConnect() {
      navigate('/Connect')
  }
  function toVoteCategories() {
      navigate('/Voting-Categories')
  }
  function toMothership() {
      navigate('/Mothership')
  }
  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
    
      <Flex>
      <Navbar />
      
      <div>
        <img className="title-gold-bg" src={titleGoldBg}/>
      </div>
      </Flex>
      <Flex>
      <div className='container me-3'>
        <div className="row">
          <div className='col'>          
</div> 

</div>
  <Box p='2'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='200px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Display Your Event Access Token.</Heading>
      <Text py='2'>
      Ensure you have already installed Keplr Mobile.
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
    maxW='200px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Vote On Entries</Heading>
      <Text py='2'>
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
    maxW='200px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Legends of Hashish x Mothership NFT's</Heading>
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
    maxW='200px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Info / FAQ</Heading>
      <Text py='2'>
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      
      </div></Flex>
    
      <div className='holder'>
        <Center><p className="transparent-judging">
          Transparent Judging for The Legends of Hashish: 2022
        </p></Center>
        <p className="plain-text">
          This year, we have built the voting system with smart contract
          technology for judging entries. This is just one iteration of how we
          can build tooling that improves trust layers within our communities.
        </p>
        <p className="huge-thank-you-to-al">
          HUGE THANK YOU TO ALL OF THIS YEARS SPONORS!
        </p>
        <img className="sponsors-1" src={sponsors1} />
        </div>
          <img className="footer" src={$footer} />
         
    </div>
  ) : (
    <div className='base pb-5'>
          <div>
            <img className="connect-title-gold-bg" src={titleGoldBg}/>
          </div>
          <div className='container pb-5'>
            <div className='holder'>
            <p className='steps-to-mint'>Connect Keplr Wallet for access.</p>
            <button className='connect-keplr-home' onClick={connect}>Connect Keplr</button>
            {error && <p>{error instanceof Error ? error.message : `${error}`}</p>}
            </div>
          </div>

    </div>
  )
}
function BasicUsage() {
  
  return (
    <>
      
    </>
  )
}

export default Home