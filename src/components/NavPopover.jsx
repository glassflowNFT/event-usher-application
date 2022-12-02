import React from 'react'
import { Popover } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import { useEffect } from 'react'
import { Center, Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
// import {
//   useWalletManager,
//   useWallet,
//   WalletConnectionStatus,
// } from "@xiti/cosmodal"
import { useWallet } from '@cosmos-kit/react'

function NavPopover() {

  // const { connect, disconnect } = useWalletManager()
  // const { status, error, name, address, signingCosmWasmClient } = useWallet()
  const walletManager = useWallet()
  const {
    currentChainName,
    currentWalletName,
    connectedWalletId,
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
//   useEffect(() => {
//     Array.from(document.querySelectorAll('a[data-bs-toggle="popover"]'))
//       .forEach(popoverNode => new Popover(popoverNode))
// })

const popover = (
  <Popover id="popover-basic">
      <Popover.Header>
        <Stack
          as="Stack"
          direction="horizontal"
          className="align-items-baseline"
        >
          <h3 className="flex-grow-1 mb-0">{username}</h3>
        </Stack>
      </Popover.Header>
      <Popover.Body>
       {address}
       <Button colorScheme='blue' className='m-4' onClick={disconnect}>Disconnect</Button>
      </Popover.Body>
    </Popover>
  )

  return (
    <Button size='md' colorScheme='white' c>

        <OverlayTrigger 
        trigger={"focus"}
        placement="center"
        overlay={popover}>
          <a tabindex="0" className='nav-link-pop' color='white' aria-labelledby="dropdownMenuButton">{username}</a>
        </OverlayTrigger>
        </Button>
  )
}

export default NavPopover