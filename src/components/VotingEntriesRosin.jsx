import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate } from 'react-router-dom';
import keplrLogo from "../assets/keplrlogo.png";
import { Badge } from '@chakra-ui/react'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function VotingEntriesRosin() {
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  let navigate = useNavigate()

  function nextCategory() {
      navigate('/Voting-Entries-Water-Hashish')
  }

  function prevCategory() {
          navigate('/Voting-Entries-Dry-Sift')
  

  }

  function toVoting(){
    navigate('/Vote')
  }



  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
    <Navbar />
       <div><img className="connect-title-gold-bg" src={titleGoldBg}/>
         <Heading noOfLines={2} color='#90579F' className='water-hash-title me-1' > Hash Rosin Entries</Heading>
         <Flex  px='12'  py='5'> <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Dry Sift</Button>
  <Spacer />
<Button colorScheme='teal' onClick={nextCategory} variant='outline'> Water Hash</Button>
</Flex>  
       </div>
       <Center> <div className='container me-3'>
         <div className='holder'>
         
         </div>
           


</div>
</Center>

<Container s>
       <Grid templateRows='repeat(5, 1fr)' gap={6}>
       <Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
  <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
     <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
 
<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
 
<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>       <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
  <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>       <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
      <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>        <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
    <Heading  fontSize='xl' fontWeight='bold'>
      ENTRY_NAME
  <Badge ml='1' fontSize='0.8em' colorScheme='purple'>
    Entry_Maker
  </Badge>
</Heading>          
<Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Grid>
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

export default VotingEntriesRosin