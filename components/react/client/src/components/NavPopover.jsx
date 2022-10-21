import React from 'react'
import { Popover } from 'react-bootstrap'
import { useEffect } from 'react'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function NavPopover() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  useEffect(() => {
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]'))
      .forEach(popoverNode => new Popover(popoverNode))
})


  return (
        <a tabindex="0" class="btn btn-lg btn-danger" role="button" data-bs-toggle='popover' data-bs-trigger="focus" data-bs-title={name} data-bs-content={address}>{name}</a>
  )
}

export default NavPopover