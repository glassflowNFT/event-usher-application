import React from 'react'
import $footer from "../assets/footer-cropped.png";
import { Center, Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import Navbar from './Navbar'
import { Button, Badge, Spacer, Flex } from '@chakra-ui/react'
import { CardBody, CardHeader, CardFooter } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Image, Stack, Box, StackD  } from '@chakra-ui/react'
import { Card  } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import rectangle8 from "../assets/rectangle8.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Tag ,  } from '@chakra-ui/react'


function Results() {
    return (
      <div>
          <Center>
      <div>
        <Navbar />
          <img className="title-gold-bg mt-5" src={titleGoldBg} />
      <div>
        <Container><Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Hash Rosin</Tab>
    <Tab>Water Hashish</Tab>
    <Tab>Dry Sift</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Box >
    
</Box>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs></Container>
        
      </div>
          <Center><p className="results-base"></p></Center>
          <img className="footer" src={$footer} />
        </div>
        </Center>
    </div>
    )
  }
  




export default Results