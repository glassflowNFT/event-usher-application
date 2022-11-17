import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Popover } from 'react-bootstrap'
import { useRef } from 'react'
import { useEffect } from 'react'
import NavPopover from './NavPopover'


function Navbar() {


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
  

    return (
  <Container>    
        <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg">
        <Flex minWidth='max-content' alignItems='center' gap='1'>
  <Box p='2'>


  </Box>
  <Spacer />

  <ButtonGroup gap='2'>
    <Button class ="nav-link" onClick={toHome} colorScheme='BlackAlpha' color='burlywood' >Legends 2022: LA</Button>
    <Button  class="nav-link"  onClick={toVoteCategories} size='md' colorScheme='blackAlpha'>Vote</Button>
    <Button colorScheme='purple' onClick={toConnect} > Connect Keplr</Button>
  </ButtonGroup>
</Flex>
      </nav>
      </div>
       </Container>
    )
   
  }

  

export default Navbar