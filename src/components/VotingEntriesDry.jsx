import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate } from 'react-router-dom';

function VotingEntriesDry() {
  let navigate = useNavigate()

  function nextCategory() {
      navigate('/Voting-Entries-Rosin')
  }

  function prevCategory() {
      navigate('/Voting-Entries-Water-Hashish')
  }

  function toVoting(){
    navigate('/Vote')
  }

  return (
    <div className='base'>
    <Navbar />
       <div><img className="connect-title-gold-bg" src={titleGoldBg}/> </div>
       <p className='water-hash-title me-5'>Dry Sift Entries</p>
       <Container s>
       <SimpleGrid columns={[2,null,2]} spacing='20px'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      hjsgalhgjfskalghjfsaklfhdsjalkfhdajsklghdsajklghdasjklghdjkslFHAJSKHFGDJKAS FDSAHJKL GHDSJklghdsjaklhfgdsjaklhf
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
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

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
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

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
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

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
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

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
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

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
</SimpleGrid>
</Container>
<img className="footer" src={$footer} />
 </div>
  )
}

export default VotingEntriesDry