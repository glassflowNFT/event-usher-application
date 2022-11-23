import React from 'react'
import { useZxing } from 'react-zxing';
import { Center, Container, Divider, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'



function BarcodeScanner() {
    const [result, setResult] = useState('')

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText())
    } 
  })
  
  function resetClick() {
    setResult('')
    console.log('reset')
  }

  console.log(result);

  return (
    <Center> <Container>
     <div>
          <video ref={ref} id='video' width={480} height={852}></video>   
  <SimpleGrid columns={1} spacing={5}>
  <Card direction='row' variant='outline'>
<Stack>
  <CardBody>
    <Center><Heading color="white"  size='md'>Wallet Address: </Heading></Center>
    <Text color="white" py='2'>{result}</Text>
  

  </CardBody>

  <CardFooter>
  <Center>
    <Button onClick={resetClick}>Reset</Button>
  </Center>
  </CardFooter>

</Stack>
</Card>
<Card direction='row' variant='outline'>

<Stack>
  <CardBody>
  <Heading color="white"  size='md'> Guest Type </Heading>
    <Text color="white" py='2'>//Insert_results_here</Text>
    <Center><Heading color="white"  size='md'>Arrival Status: Dinner </Heading></Center>
    <Text color="white" py='2'>//Insert_results_here</Text>
    <Center><Heading color="white"  size='md'>Arrival Status: Brunch </Heading></Center>
    <Text color="white" py='2'>//Insert_results_here</Text>
    
  </CardBody>
  <CardFooter>
  <Center><SimpleGrid columns={2} spacing={10}>
  <Card direction='row' variant='outline'>
<Stack>
  <CardBody>
    <Center><Heading color="white"  size='md'>Update Brunch Arrival Status: </Heading></Center>
    <Text color="white" py='2'>{result}</Text>
  

  </CardBody>

  <CardFooter>
  <Center>
    <Button onClick={resetClick}>Update</Button>
  </Center>
  </CardFooter>

</Stack>
</Card>
<Card direction='row' variant='outline'>
<Stack>
  <CardBody>
    <Center><Heading color="white"  size='md'>Update Dinner Arrival Status:  </Heading></Center>
    <Text color="white" py='2'>{result}</Text>
  

  </CardBody>

  <CardFooter>
  <Center>
    <Button>Update</Button>
  </Center>
  </CardFooter>

</Stack>
</Card>
</SimpleGrid></Center>
  </CardFooter>

</Stack>
</Card>
  
</SimpleGrid>
  


     </div>
     </Container></Center>
  )
}

export default BarcodeScanner