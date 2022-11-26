import React from 'react'
import Navbar from './Navbar'
import { Container } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import keplrLogo from "../assets/keplrlogo.png";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Mint() {
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()
  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg" src={titleGoldBg}/>
       </div>
       <Container>
         <div className='holder'>
           <div className='row'>
             <div className='col'>
              <Center><Heading>Mint Entries</Heading></Center>
<FormControl isRequired >
  <Center><FormLabel>Entry Name</FormLabel></Center>
  <Input type='email' />
  <FormHelperText>Proposal Title</FormHelperText></FormControl>

<FormControl isRequired>
  <Center><FormLabel>Entry Category </FormLabel></Center>
  <Select placeholder='Choose 1'>
    <option>Hashish Rosin</option>
    <option>Water Hash</option>
    <option>Dry Sift Hash</option>
  </Select>
  <FormHelperText>Entry Category</FormHelperText>
</FormControl>

<FormControl isRequired>
  <Center><FormLabel>Maker Wallet Address</FormLabel></Center>
  <Input type='maker_addr' />
  <FormHelperText>terp1...</FormHelperText>
</FormControl>

<FormControl isRequired>
  <Center><FormLabel>Maker Title</FormLabel></Center>
  <Input type='maker_name' />
  <FormHelperText>Name</FormHelperText>
</FormControl>

<FormControl isRequired>
  <Center><FormLabel>Entry Description </FormLabel></Center>
  <Input type='entry_description' />
  <FormHelperText>Name</FormHelperText>
</FormControl>

<FormControl>
  <Center><FormLabel>Breeder Name </FormLabel></Center>
  <Input type='breeder_name' />
  <FormHelperText>Optional</FormHelperText>
</FormControl>

<FormControl>
  <Center><FormLabel>Farmer Name </FormLabel></Center>
  <Input type='farmer_name' />
  <FormHelperText>Optional</FormHelperText>
</FormControl>

<FormControl>
  <Center><FormLabel>Genetics Name </FormLabel></Center>
  <Input type='farmer_name' />
  <FormHelperText>Optional</FormHelperText>
</FormControl>
<Center><Button>Mint</Button></Center>  
             </div>
            </div>
         </div>   
       </Container>
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
 function BasicUsage() {

   return (
     <>

     </>
   )
}

export default Mint