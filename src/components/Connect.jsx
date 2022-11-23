import { React, useState } from "react"
import Navbar from "./Navbar"
import $footer from "../assets/footer-cropped.png"
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png"
import { Center, Text } from "@chakra-ui/react"
import rectangle8 from "../assets/rectangle8.png"

import { Container } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import Button from "react-bootstrap/Button"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react"
import keplrLogo from "../assets/keplrlogo.png"
import { useEffect } from "react"
import QRCode from "qrcode"

import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Connect() {
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  const [qrcode, setQrcode] = useState("")

  const [memberWeight, setMemberWeight] = useState(null)

  useEffect(() => {
    QRCode.toDataURL(address).then(setQrcode)
  }, [])

  console.log(address)

  useEffect(() => {
    const query = async () => {
      if (address) {
        const res = await signingCosmWasmClient.queryContractSmart(
          // Guest Type CW4 Group Contract
          "juno1ss9tlfsj53uc5w6g45sjtu88uyc6nf7ar0k8wge8fmzz3588ceks2xvsnn",
          {
            member: { addr: address },
          }
        )
        setMemberWeight(res.weight)
      }
    }

    query()
  }, [address])

  const getGuestType = () => {
    switch (memberWeight) {
      case 1:
        return "Brunch Guest"
      case 2:
        return "Dinner Guest"
      case 3:
        return "Maker Guest"
      case 4:
        return "Maker"
      case 5:
        return "Special Guest"
      default:
        return "Unknown Guest"
    }
  }

  return status === WalletConnectionStatus.Connected ? (
    <div className="base">
      <Navbar />
      <div>
        <img className="connect-title-gold-bg" src={titleGoldBg} />
      </div>
      <Container>
        <div className="container">
          <Center>
            <img borderRadius="full" className="icon" src={keplrLogo} />
          </Center>
          <div className="connect-holder">
            <Text>
              Connect and display your QR code for access to The legends Of
              Hashish.{" "}
            </Text>

            <Center>
              <Image
                boxSize="300px"
                objectFit="contain"
                className="logo mt-3"
                src={qrcode}
              />
            </Center>
          </div>
        </div>
        <Container maxW="2xl" s centerContent>
          <Card direction="row" overflow="hidden" variant="outline">
            <Stack>
              <CardBody>
                <Center>
                  <Heading color="white" size="md">
                    Display Connected Wallets Guest_Type{" "}
                  </Heading>
                </Center>
                <Text color="white" py="2">
                  Maker, Makers Guest, Legends Guest, Special Guest,Admin
                </Text>
              </CardBody>

              <Center>
                <CardFooter>
                  GUEST TYPE: &nbsp;<Text color="red">{getGuestType()}</Text>
                </CardFooter>
              </Center>
            </Stack>
          </Card>
        </Container>
      </Container>

      <img className="footer" src={$footer} />
    </div>
  ) : (
    <Container>
      {" "}
      <div className="base pb-5">
        <div>
          <Center>
            <Container>
              <img className="connect-title-gold-bg" src={titleGoldBg} />
              <Heading px="7" mb={80} noOfLines={2}>
                Connect To Access Event Application{" "}
              </Heading>
            </Container>{" "}
          </Center>
        </div>

        <div className="container pb-5">
          <Center>
            <img borderRadius="full" className="icon" src={keplrLogo} />
          </Center>
          <Center>
            <Button
              colorScheme="whiteAlpha"
              color="white"
              mb={80}
              onClick={connect}
            >
              Connect Keplr
            </Button>
          </Center>

          {error && (
            <p>{error instanceof Error ? error.message : `${error}`}</p>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Connect
