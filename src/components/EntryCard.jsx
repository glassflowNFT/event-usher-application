import React from 'react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate, useParams } from 'react-router-dom';
import { Badge } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { useWallet } from '@cosmos-kit/react'
import { queryEntries } from '../contracts/voteContract';
import { useEffect, useState } from 'react';


function EntryCard({e, id, category, src}) {
    let navigate = useNavigate()

    function toVoting(){
        navigate(`/Vote/${category}/${id}/${src.slice(14)}`)   
 }

  return (
    <Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
    <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
    <Stack  >
      <CardBody>
        <Heading color='white' fontSize='xl' fontWeight='bold'>
        {e.name}
    <Badge ml='1' fontSize='0.8em' colorScheme='green'>
      {e.maker_name}
    </Badge>
  </Heading>
        <Text py='2' color='white'>
        {e.breeder}
        </Text>
      </CardBody>
      <CardFooter>
        <Flex>
        <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
          Vote</Button>
      <Spacer p='6'/>
    <Tag colorScheme={'blue'}>Successfully Voted</Tag></Flex>
      </CardFooter>
    </Stack>
  </Card>
  )
}

export default EntryCard
