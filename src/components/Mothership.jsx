import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { Center, Divider, Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,} from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"



function Mothership() {
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, publucKey, signingCosmWasmClient } = useWallet()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const btnRef = React.useRef(null)
  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
    <Navbar />
       <div>
         <img className="title-gold-bg" src={titleGoldBg}/>
       </div>
       <div className='container'>
       
  <Card m={[2, 3]} direction={{ base: 'column', sm: 'row' }}  overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW={{ base: '100%', sm: '500px' }} src={rectangle8}  alt='Caffe Latte'/>

  <Stack>
    <CardBody>
      <Heading size='xl'>Mint Your Free 2022 Mothership x Legends Attendance Token.</Heading>
<Text py='2'>Each Legends guest can mint one official attendance NFT in collaboartion with Mothership Glass.</Text></CardBody>
<Center><CardFooter>
      <Button> Mint Free NFT</Button>
</CardFooter></Center>
  </Stack>

</Card>

<Card m={[2, 3]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW={{ base: '100%', sm: '500px' }} src={rectangle8}  alt='Caffe Latte'/>

  <Stack>
    <CardBody>
      <Heading size='xl'>Gz-1 x Mothership Drop </Heading>
<Text py='2'>A limited number of guests will be walking away with both a pipe and NFT from GZ1 and Mothership Glass.

This button to mint will work for the legends guest who has bought and now owns both the pipe and NFT!.</Text></CardBody>
<Center><CardFooter>
      <Button> Mint Collab Drop</Button>
</CardFooter></Center>
  </Stack>

</Card>
 
<Card m={[2, 3]} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW={{ base: '100%', sm: '500px' }} src={rectangle8}  alt='Caffe Latte'/>

  <Stack>
    <CardBody>
      <Heading size='xl'>Mothership x Legends T-shirt Collection</Heading>
<Text py='2'>The First 20 people to purchase the official Mothership & Legends of Hashish merchandise can mint here for their NFT</Text>
<Heading as='u'><strong></strong></Heading>
</CardBody>
<Divider/>

<Divider p='4'/>
<Center><CardFooter>
      <Center><ButtonGroup gap='4'>
      <Button onClick={onOpen} ref={btnRef} >Prepare For Mint-Off</Button>
      <Button>Mint</Button>
    </ButtonGroup></Center>
</CardFooter></Center>
  </Stack>

  <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You will need</ModalHeader>
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
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You will need to:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size='md'>1. Download Keplr Mobile</Heading>
            <Heading size='md'>2. Set Up Your Wallet</Heading>
            <Heading size='md'>3. Confirm & Broadcast Mint Msg</Heading>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Card>
</div>
<img className="footer" src={$footer} />
 </div>
) : (
  <Container> <div className='base pb-5'>
         <div>
          <Center><Container><img className="connect-title-gold-bg" src={titleGoldBg}/>
                      <Heading  px='7' mb={80} noOfLines={2}>Connect To Access Event Application </Heading></Container> </Center>

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

export default Mothership