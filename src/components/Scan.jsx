import React from 'react'
import { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Center, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Button from 'react-bootstrap/Button';
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import BarcodeScanner from './BarcodeScanner';
import QRCode from 'qrcode';
import { queryGuestType, getGuestType } from '../contracts/guestType';
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Scan() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()


  async function connectOnClick() {
   await connect()
  }

  return(
    <div className='base'>

       <Navbar />
          <div>
            <img className="connect-title-gold-bg mt-5" src={titleGoldBg}/>
          </div>
          <BarcodeScanner />
          <img className="footer" src={$footer} />
        </div>
  )
}
 

export default Scan