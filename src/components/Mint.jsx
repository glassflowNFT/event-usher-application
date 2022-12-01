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
  const admin = JSON.parse(localStorage.getItem("admin?"))

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
              <Center><Heading color='white' >Mint Entries</Heading></Center>
                    <FormControl isRequired >
                      <Center><FormLabel color='white'>Entry Name</FormLabel></Center>
                      <Input color='white' type='email' />
                      <FormHelperText color='white'>Proposal Title</FormHelperText></FormControl>

                    <FormControl isRequired>
                      <Center><FormLabel color='white'>Entry Category </FormLabel></Center>
                      <Select color='white' placeholder='Choose 1'>
                        <option>Hashish Rosin</option>
                        <option>Water Hash</option>
                        <option>Dry Sift Hash</option>
                      </Select>
                      <FormHelperText color='white'>Entry Category</FormHelperText>
                    </FormControl>

                    <FormControl isRequired>
                      <Center><FormLabel color='white'>Maker Wallet Address</FormLabel></Center>
                      <Input color='white' type='maker_addr' />
                      <FormHelperText color='white'>terp1...</FormHelperText>
                    </FormControl>

                    <FormControl isRequired>
                      <Center><FormLabel color='white'>Maker Title</FormLabel></Center>
                      <Input color='white' type='maker_name' />
                      <FormHelperText color='white'>Name</FormHelperText>
                    </FormControl>

                    <FormControl isRequired>
                      <Center><FormLabel color='white'>Entry Description </FormLabel></Center>
                      <Input color='white' type='entry_description' />
                      <FormHelperText color='white'>Descirption</FormHelperText>
                    </FormControl>

                    <FormControl>
                      <Center><FormLabel color='white'>Breeder Name </FormLabel></Center>
                      <Input color='white' type='breeder_name' />
                      <FormHelperText color='white'>Optional</FormHelperText>
                    </FormControl>

                    <FormControl>
                      <Center><FormLabel color='white'>Farmer Name </FormLabel></Center>
                      <Input color='white' type='farmer_name' />
                      <FormHelperText color='white'>Optional</FormHelperText>
                    </FormControl>

                    <FormControl>
                      <Center><FormLabel color='white'>Genetics Name </FormLabel></Center>
                      <Input color='white' type='farmer_name' />
                      <FormHelperText color='white'>Optional</FormHelperText>
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