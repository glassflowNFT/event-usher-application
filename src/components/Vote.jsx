import React, { useEffect } from 'react'
import { Card, CardBody } from '@chakra-ui/react'
import Navbar from './Navbar'
import { Image } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import { Button} from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import { getJudge, queryJudge } from '../contracts/voteContract'
import { useWallet } from '@cosmos-kit/react'
import { useMemo } from "react"
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { vote } from '../contracts/voteContract'
import { queryEntry } from '../contracts/voteContract'

function Vote() {
  let params = useParams()

  const walletManager = useWallet()
  const {
    currentChainName,
    currentWalletName,
    walletStatus,
    username,
    address,
    message,
    connect,
    disconnect,
    openView,
    setCurrentChain,
    getSigningCosmWasmClient
  } = walletManager;

  console.log(params);

  const [lookValue, setLookValue] = useState("5")
  const [smellValue, setSmellValue] = useState("5")
  const [tasteValue, setTasteValue] = useState("5")
  const [meltValue, setMeltValue] = useState("5")
  const [judgeWeight, setJudgeWeight] = useState(null)
  const [isJudge, setIsJudge] = useState(false)
  const [entry, setEntry] = useState([])
  const paramIdToNum = params.id



  console.log(paramIdToNum);

    const handleLookChange = e => setLookValue(e.target.value)
    const handleSmellChange = e => setSmellValue(e.target.value)
    const handleTasteChange = e => setTasteValue(e.target.value)
    const handleMeltChange = e => setMeltValue(e.target.value)
    
    let navigate = useNavigate()

    const { search } = useLocation()
    const urlParams = useMemo(() => new URLSearchParams(search), [search])

    function toVoteCategories() {
      navigate(`/Voting-Entries-${params.category}`)
    }
    
    useEffect(() => {
        const query = async () => {
          const client = await getSigningCosmWasmClient()

          if (address) {
            const response = await queryJudge(client, address)

            setJudgeWeight(response.weight)
            console.log(response);
          }
        }
        query()
        .then(
          getJudge(judgeWeight) === 'Judge' ?  
          setIsJudge(true) : setIsJudge(null)
          )
          
      },[address])


      useEffect(() => {
        const getEntry = async () => {
          const client = await getSigningCosmWasmClient()
          const response = await queryEntry(client, params.category,parseInt(params.id))
          setEntry(response)
        }
          getEntry()
      }, [])

      console.log(entry);

      const _executeVote = async () => {
        const client = await getSigningCosmWasmClient()

        const look = Number(lookValue) * 100
        const smell = Number(smellValue) * 100
        const taste = Number(tasteValue) * 100
        const melt = Number(meltValue) * 100
    
        const response = await vote(
          client,
          address,
          urlParams.get("category"),
          Number(urlParams.get("entry")),
          {
            look: look.toString(),
            smell: smell.toString(),
            taste: taste.toString(),
            postMelt: melt.toString(),
          }
        )
      }
        async function connectOnClick() {
          setCurrentChain("juno")
         await connect()
        }
      
return address && walletStatus === "Connected" ? (
    <div className='base'>
       <Navbar />
          <div>
            <img className="connect-title-gold-bg mt-5" src={titleGoldBg} alt="null"/>
          </div>
          <div className='container'>
            <div className='holder'>
          <Center><Button  onClick={toVoteCategories}> Return to All Entries</Button></Center>
                <div className='row mt-3'>
<Card variant='outline' boxShadow='xl' maxW='sm'>
  <CardBody>
    <Image
 src={rectangle8}
       alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
           <Heading color="white" size='md'>{entry.name}</Heading>

      <Divider />
      <Heading color="white" size='l'> {entry.maker_name}</Heading>
      <Divider />
                  <Divider />
                  <Text color="white">{entry.category}</Text>
                  <Divider />
                  <Text color="white">{entry.breeder}</Text>
                  <Divider />
                  <Text color="white">{entry.farmer}</Text>

                  <Divider />
                  <Text color="white">{entry.genetics}</Text>
                  <Divider />
                </Stack>
              </CardBody>
            </Card>
    
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                           
                                <p className='name-text'>Vote On Elements: </p>
                            </div>
                       
                        </div>
                    <Container opacity='100%' className='input-holder p-3 mb-3'>
                            <Text className='range-slider-text'>Entry's Look</Text>
                            <p color='#F3C674'className='range-slider-text'>{lookValue}</p>
                            <input type="range"  className="form-range" min="1.00" max="10.00" step='.01' onChange={handleLookChange} value={lookValue}></input>
                            </Container>
                    <Container className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry's Taste</p>
                            <p className='range-slider-text'>{smellValue}</p>
                            <input type="range" className="form-range" min="1.00" max="10.00" step='.01' onChange={handleSmellChange} value={smellValue}></input>
                        </Container>
                    <Container className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry's Smell</p>
                            <p className='range-slider-text'>{tasteValue}</p>
                            <input type="range" className="form-range" min="1.00" max="10.00" step='.01' onChange={handleTasteChange} value={tasteValue}></input>
                        </Container>
                    <Container className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry's After Banger</p>
                            <p className='range-slider-text'>{meltValue}</p>
                            <input type="range" className="form-range" min="1.00" max="10.00" step='.01' onChange={handleMeltChange} value={meltValue}></input>
                        </Container>

                        <Button onClick={ (executeVote) => alert("Must be a judge to vote.")} size='lg' color='#e25273' >Confrim & Broadcast Vote</Button>                    </div>
                </div>
              </div>
            </div>
      <img className="footer" src={$footer}  alt="null"/>
    </div>
   ) : (
    <Container>
      {" "}
      <div className="base">
        <div>
          <Center>
            <Container>
              <img className="connect-title-gold-bg" src={titleGoldBg}  alt="null" />
              <Heading color='white' textAlign='center' mb={10} px="7" noOfLines={2}>
                Connect To Access Event Application{" "}
              </Heading>
            </Container>{" "}
          </Center>
        </div>

        <div className="container">
          <Center>
            <img borderRadius="full" className="icon" src={keplrLogo} alt="null"  />
          </Center>
          <Center>
            <Button
              colorScheme="whiteAlpha"
              color="white"
              mb={130}
              onClick={connectOnClick}
              size='lg'
            >
              Connect Keplr
            </Button>
                 </Center>
        </div>
      </div>
    </Container>
  )
}

export default Vote