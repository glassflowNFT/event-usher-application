import React from "react"
import Navbar from "./Navbar"
import $footer from "../assets/footer-cropped.png"
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png"
import msGz1Shirt from "../assets/msxgz1.png"
import rectangle8 from "../assets/rectangle8.png"
import { Center, Divider, Heading } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import keplrLogo from "../assets/keplrlogo.png"
import { checkMembership } from "../contracts/checkMembership"
import { useWallet } from '@cosmos-kit/react'



function Mothership() {

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

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = React.useState("inside")
  const btnRef = React.useRef(null)

  const mintFreeNFT = async () => {
    try {
      const response = await checkMembership(
        getSigningCosmWasmClient,
        "juno1ss9tlfsj53uc5w6g45sjtu88uyc6nf7ar0k8wge8fmzz3588ceks2xvsnn",
        address
      )
      if (response.weight === null) {
        return alert("You are not a member")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const mintCollabDrop = async () => {
    try {
      const response = await checkMembership(
        getSigningCosmWasmClient,
        "juno1egnnvg6d60787rg2zdw8wua79s4f25zzc56nnv8hyvmq656jyeksrlug9r",
        address
      )
      if (response.weight === null) {
        return alert("You are not a member")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const mintTshirt = async () => {
    try {
      const response = await checkMembership(
        getSigningCosmWasmClient,
        "juno15aagx8wy9klpx9nn8l04vpydmksasexyl9yrgcqya8mcx2374rmskjt6v2",
        address
      )
      if (response.weight === null) {
        return alert("You are not a member")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  async function connectOnClick() {
    setCurrentChain("juno")
   await connect()
  }

  return address && walletStatus === "Connected" ?(
 <div className="base">
      <Navbar />
      <div>
        <img className="title-gold-bg" src={titleGoldBg} />
      </div>
      <div className="container">
        <Card
          m={[2, 3]}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            src={rectangle8}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading color='white' size="xl">
                Mint Your Free 2022 Mothership x Legends Attendance Token.
              </Heading>
              <Text color='white' py="2">
                Each Legends guest can mint one official attendance NFT in
                collaboartion with Mothership Glass.
              </Text>
            </CardBody>
            <Center>
              <CardFooter>
                <Button onClick={mintFreeNFT}> Mint Free NFT</Button>
              </CardFooter>
            </Center>
          </Stack>
        </Card>

        <Card
          m={[2, 3]}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            src={rectangle8}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading color='white' size="xl">Gz-1 x Mothership Drop </Heading>
              <Text color='white' py="2">
                A limited number of guests will be walking away with both a pipe
                and NFT from GZ1 and Mothership Glass. This button to mint will
                work for the legends guest who has bought and now owns both the
                pipe and NFT!.
              </Text>
            </CardBody>
            <Center>
              <CardFooter>
                <Button onClick={mintCollabDrop}> Mint Collab Drop</Button>
              </CardFooter>
            </Center>
          </Stack>
        </Card>

        <Card
          m={[2, 3]}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src={msGz1Shirt}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading color='white' size="xl">
                Mothership x Legends T-shirt Collection
              </Heading>
              <Text color='white' py="2">
                The First 20 people to purchase the official Mothership &
                Legends of Hashish merchandise can mint here for their NFT
              </Text>
              <Heading as="u">
                <strong></strong>
              </Heading>
            </CardBody>
            <Divider />

            <Divider p="4" />
            <Center>
              <CardFooter>
                <Center>
                  <ButtonGroup gap="4">
                    <Button onClick={onOpen} ref={btnRef}>
                      Prepare For Mint-Off
                    </Button>
                    <Button onClick={mintTshirt}>Mint</Button>
                  </ButtonGroup>
                </Center>
              </CardFooter>
            </Center>
          </Stack>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>You will need</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal
            onClose={onClose}
            finalFocusRef={btnRef}
            isOpen={isOpen}
            scrollBehavior={scrollBehavior}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>You will need to:</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Heading size="md">1. Download Keplr Mobile</Heading>
                <Heading size="md">2. Set Up Your Wallet</Heading>
                <Heading size="md">3. Confirm & Broadcast Mint Msg</Heading>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Card>
      </div>
      <img className="footer" src={$footer} />
    </div>
  ) : (
    <Container>
      {" "}
      <div className="base">
        <div>
          <Center>
            <Container>
              <img className="connect-title-gold-bg" src={titleGoldBg} />
              <Heading color='white' textAlign='center' mb={10} px="7" noOfLines={2}>
                Connect To Access Event Application{" "}
              </Heading>
            </Container>{" "}
          </Center>
        </div>

        <div className="container">
          <Center>
            <img borderRadius="full" className="icon" src={keplrLogo} />
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

export default Mothership