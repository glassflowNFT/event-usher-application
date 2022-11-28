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


function Navbar() {
  const admin = JSON.parse(localStorage.getItem("admin?"))

  console.log(admin);


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
  

return admin === 'non-admin' ? (
  <Container>    
        <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg">
        <Flex minWidth='max-content' alignItems='center' gap='1'>
  <Box p='2'>


  </Box>
  <Spacer />

  <ButtonGroup gap='2'>
    <Button onClick={toHome} px='-15' colorScheme='white' color='burlywood' >Legends 2022: LA</Button>
    <Button onClick={toVoteCategories} size='md'  color='white' colorScheme='white'>Vote</Button>
    <NavPopover />
    <Button colorScheme='purple' onClick={toConnect} > QR Code</Button>
  </ButtonGroup>
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

  <ButtonGroup gap='2'>
    <Button onClick={toHome} px='-15' colorScheme='white' color='burlywood' >Legends 2022: LA</Button>
    <Button onClick={toVoteCategories} size='md'  color='white' colorScheme='white'>Vote</Button>
    <Button onClick={toScan} size='md'  color='white' colorScheme='white'>Scan</Button>
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