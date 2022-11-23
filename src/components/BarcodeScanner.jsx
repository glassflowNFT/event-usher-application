import React from 'react'
import { useZxing } from 'react-zxing';
import { Center, Container, Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { useState } from 'react';


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
              <Text color='white'>Wallet Address: </Text>
              <Text color='white'>{result}</Text>
              <Button onClick={resetClick}>Reset</Button>
     </div>
     </Container></Center>
  )
}

export default BarcodeScanner