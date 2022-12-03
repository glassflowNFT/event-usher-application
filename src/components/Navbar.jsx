import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useRef } from 'react'
import { useEffect } from 'react'
import NavPopover from './NavPopover'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Navbar() {
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  const admin = JSON.parse(localStorage.getItem("admin?"))

    let navigate = useNavigate()

    function toConnect() {
      navigate('/Connect')
  }
    function toHome() {
      navigate('/')
  }
  function toVoteCategories() {
    navigate('/Voting-Categories')
}
  function toScan() {
    navigate('/Scan')
}
  function toMint() {
    navigate('/Mint')
}
  function toBrowse() {
    navigate('/Browse')
}
  

    return admin === 'non-admin' ? (
  <Container>    
        <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg">
        <Flex minWidth='max-content' alignItems='center' gap='1'>
  <Box p='2'>


  </Box>
  <Spacer />

      <Button onClick={toHome} px='-15' colorScheme='white' color='burlywood' >Legends 2022: LA</Button>
      {!address ? <Button colorScheme='purple' size='sm' ml={9} onClick={connect} > Connect</Button> : <NavPopover /> }
    <div className='dropdown'>
      <Button ml={5} size='lg' color='white' colorScheme='white' className='dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <HamburgerIcon color='white'/>
      </Button>
      <ul className='dropdown-menu' aria-labelledby="dropdownMenuButton1">
      <li className='dropdown-item' onClick={toVoteCategories} color='white' colorScheme='white'>Vote</li>
      <li className='dropdown-item' onClick={disconnect}>Disconnect</li>
      </ul>
    </div>
  </Flex>
      </nav>
      </div>
       </Container>
    ) : (
      <Container>    
        <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg">
        <Flex minWidth='max-content' alignItems='center' gap='1'>
  <Box p='2'>


  </Box>
  <Spacer />

  <ButtonGroup gap='1'>
    <Button onClick={toHome} px='-15' colorScheme='white' color='burlywood' >Legends 2022: LA</Button>
    <Button onClick={toVoteCategories} size='md'  color='white' colorScheme='white'>Vote</Button>
    <Button onClick={toScan} size='md'  color='white' colorScheme='white'>Scan</Button>
    <Button onClick={toMint} size='md'  color='white' colorScheme='white'>Mint</Button>
    <NavPopover />
    <Button colorScheme='purple' onClick={toConnect} > QR Code</Button>
  </ButtonGroup>
</Flex>
      </nav>
      </div>
       </Container>
    )
   
  }

  

export default Navbar