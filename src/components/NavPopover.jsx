import React from 'react'
import { Popover } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import { useEffect } from 'react'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function NavPopover() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

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
          <h3 className="flex-grow-1 mb-0">{name}</h3>
        </Stack>
      </Popover.Header>
      <Popover.Body>
       {address}
       <Button className='m-4' onClick={disconnect}>Disconnect</Button>
      </Popover.Body>
    </Popover>
  )

  return (
    <div>
        {/* <a tabindex="0" class="btn btn-lg btn-danger" data-bs-toggle='popover' data-bs-trigger="focus" data-bs-title={name} data-bs-content={address}>{name}</a> */}

        <OverlayTrigger 
        trigger={"click"}
        placement="right"
        overlay={popover}>
          <p className='nav-link'>{name}</p>
        </OverlayTrigger>
   </div>
  )
}

export default NavPopover