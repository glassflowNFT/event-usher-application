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
import { getGuestType, queryGuestType } from "../contracts/guestType"


function Connect() {
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  const [qrcode, setQrcode] = useState("")

  const [memberWeight, setMemberWeight] = useState(null)

  // useEffect(() => {
  //   QRCode.toDataURL(address).then(setQrcode)
  // }, [])

  function showQrCode() {
    QRCode.toDataURL(address).then(setQrcode)
  }

  console.log(address)

  useEffect(() => {
    const query = async () => {
      if (address) {
        const response = await queryGuestType(signingCosmWasmClient, address)
        setMemberWeight(response.weight)
      }
    }

    query()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  console.log(memberWeight);

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
              <Stack>
              <Button onClick={showQrCode}>Generate QR Code</Button>
              <Image
                width="500" height="500"
                objectFit="contain"
                // className="logo mt-3"
                src={qrcode}
              />
              </Stack>
            </Center>
          </div>
        </div>
        <Container maxW="2xl" s centerContent>
          <Card direction="row" overflow="hidden" variant="outline">
            <Stack>
              <CardBody>
                <Center>
                  <Heading color="white" size="md">
                    Connected Wallet is a:{" "}
                  </Heading>
                </Center>
                 <Center><Heading color="#F3C674">{getGuestType(memberWeight)}</Heading></Center>
              </CardBody>
              <Center>
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
