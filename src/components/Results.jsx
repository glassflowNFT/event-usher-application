import React from 'react'
import $footer from "../assets/footer-cropped.png";
import { Center, Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import Navbar from './Navbar'

function Results() {
    return (
      <div><Center><div>
            <Navbar />
        <img className="title-gold-bg mt-5" src={titleGoldBg} />
      </div>
      </Center><div>
          <Center><p className="results-base"></p></Center>
          <img className="footer" src={$footer} />
        </div></div>
    )
  }
  




export default Results