import React from 'react'
import sponsors1 from "../assets/sponsors1.png";
import rectangle10 from "../assets/rectangle10.png";
import rectangle9 from "../assets/rectangle9.png";
import rectangle8 from "../assets/rectangle8.png";
import $footer from "../assets/footer-cropped.png";
import legendsqr1 from "../assets/legendsqr1.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Home() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()
  
  let navigate = useNavigate()
  function toConnect() {
      navigate('/Connect')
  }
  function toVoteCategories() {
      navigate('/Voting-Categories')
  }
  function toMothership() {
      navigate('/Mothership')
  }
  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
      <Navbar />
      <div>
        <img className="title-gold-bg" src={titleGoldBg}/>
      </div>
      <div className='container me-3'>
        <div className='row'>
          <div className='col w-25'>
              <div className='wallet-details-holder'>
              <p className='wallet-details w-25'>{name} {address}</p>
              <button className='disconnect-keplr-home' onClick={disconnect}>Disconnect</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col'>
            <div className='card border-0'>
              <div className='card-horizontal'>
                  <img className='img-fluid' src={rectangle8}/>
                    <div className='card-body'>
                        <p className='card-title'>Connect and Display Your Token Event Access Token.</p>
                        <p className='card-text'> Ensure you have installed Kepler, and imported your event wallet.
                        </p>
                        <button className='navigate-button' onClick={toConnect}> Connect </button>
                    </div>
              </div>
              </div>
            </div>
            <div className='col'>
          <div className='card border-0'>
            <div className='card-horizontal'>
                 <img className='img-fluid' src={rectangle8}/>
                  <div className='card-body'>
                      <p className='card-title'>Vote On Entries</p>
                      <p className='card-text'> Judge allocates points for each of this years entries, not including their own.
                      </p>
                      <button  className='navigate-button' onClick={toVoteCategories}> Vote </button>
                  </div>
            </div>
          </div>
          </div>
      </div>
      <div className="row">
          <div className='col'>
            <div className='card border-0'>
              <div className='card-horizontal'>
                  <img className='img-fluid' src={rectangle8}/>
                    <div className='card-body'>
                        <p className='card-title'>The Mothership Token</p>
                        <p className='card-text'> Ensure you have installed Kepler, and imported your event wallet.
                        </p>
                        <button className='navigate-button' onClick={toMothership}> Mint </button>
                    </div>
              </div>
              </div>
            </div>
            <div className='col'>
          <div className='card border-0'>
            <div className='card-horizontal'>
                 <img className='img-fluid' src={rectangle8}/>
                  <div className='card-body'>
                      <p className='card-title'>Info / FAQ</p>
                      <p className='card-text'> Information and frequently asked questions.
                      </p>
                      <button className='navigate-button'> Learn More </button>
                  </div>
            </div>
          </div>
          </div>
      </div>
      </div>
      <div className='holder'>
        <p className="transparent-judging">
          Transparent Judging for The Legends of Hashish: 2022
        </p>
        <p className="plain-text">
          This year, we have built the voting system with smart contract
          technology for judging entries. This is just one iteration of how we
          can build tooling that improves trust layers within our communities.
        </p>
        <p className="huge-thank-you-to-al">
          HUGE THANK YOU TO ALL OF THIS YEARS SPONORS!
        </p>
        <img className="sponsors-1" src={sponsors1} />
        </div>
          <img className="footer" src={$footer} />
    </div>
  ) : (
    <div className='base pb-5'>
          <div>
            <img className="connect-title-gold-bg" src={titleGoldBg}/>
          </div>
          <div className='container pb-5'>
            <div className='holder'>
            <p className='steps-to-mint'>Connect Keplr Wallet for access.</p>
            <button className='connect-keplr-home' onClick={connect}>Connect Keplr</button>
            {error && <p>{error instanceof Error ? error.message : `${error}`}</p>}
            </div>
          </div>

    </div>
  )
}

export default Home