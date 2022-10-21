import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Popover } from 'react-bootstrap'
import { useRef } from 'react'
import { useEffect } from 'react'
import NavPopover from './NavPopover'

function Navbar() {


    let navigate = useNavigate()

    function toConnect() {
      navigate('/Connect')
  }

    return (
        <div className='fixed-top'>
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Legends of Hashish</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="/">GlassFlow</a>
              <a class="nav-link" onClick={toConnect}>Connect</a>
              <NavPopover />
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
  }
  

export default Navbar