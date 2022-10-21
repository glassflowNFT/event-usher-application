import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import Button from 'react-bootstrap/esm/Button';


function Mothership() {
  return (
    <div className='base'>
    <Navbar />
       <div>
         <img className="title-gold-bg" src={titleGoldBg}/>
       </div>
       <div className='container'>
          <div className='row'>
              <div className='col'>
                  <div className='card border-0'>
                      <div className='card-horizontal'>
                          <img className='img-fluid' src={rectangle8} />
                          <div className='card-body'>
                          <p className='card-title'>Mint Your Free Mothership x Legends Attendance Token.</p>
                          <p className='card-text w-50'> Each Legends guest can mint one official attendance NFT in collaboartion with Mothership Glass.
                        </p>
                        <button className='ms-navigate-button'> Mint Free NFT </button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='row'>
              <div className='col'>
                  <div className='card border-0 w-100'>
                      <div className='ms-card-horizontal'>
                          <div className='row card-body'>
                            <div className='col' align="right">
                          <p className='ms-card-title'>Mint Your Free Mothership x Legends Attendance Token.</p>
                          <p className='ms-card-text w-50'> 3 lucky guests will be walking away with both a pipe and NFT from GZ1 and Mothership Glass.

                          This button only will work for the legends guest who has bought and now owns both the pipe and NFT!
                        </p>
                        <button className='ms-left-navigate-button' > Mint GZ1 Collab </button>
                        </div>
                        </div>
                        <img className='img-fluid' src={rectangle8} />
                      </div>
                  </div>
              </div>
          </div>
          </div>
          <div className='ms-holder'>
          <p className='buy-limited'>Buy Limited Mothership NFT
          </p>
            <img className='buy-pic img-fluid pb-3' src={rectangle8} />
              <div className='minting-block'>
                <div className='flex-container'>
                  <p className='mint-price mt-2'><strong>Mint Price</strong></p>
                  <p className='usdc'><strong>TBD $USDC</strong></p>
                  <button className='confirm-mint w-50'>Confirm Mint</button>
                  </div>
              </div>
              <div className='holder-benefits mt-4'>
                <div className='flex-container'>
                  <p className='mint-price mt-2'><strong>Holder Benefits</strong></p>
                  <p className='usdc'><strong></strong></p>
                  </div>
              </div>
              <div className='instructions'>
                  <p className='steps-to-mint mt-5'>Steps To Mint</p>
                  <div className='row ms-4'>
                    <div className='col'>
                        <div className='card border-0'>
                          <img className='img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>1. On Ramp USDC</p>
                          </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border-0'>
                          <img className='img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>2. Transer USDC and JUNO to Juno Network</p>
                          </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border-0'>
                          <img className='img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>3. Mint</p>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>

       <img className="footer" src={$footer} />
 </div>
)
}

export default Mothership