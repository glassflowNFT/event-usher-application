import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate } from 'react-router-dom'

function VotingCategories() {

  let navigate =useNavigate()

  function toRosin() {
      navigate('/Voting-Entries-Rosin')
  }
  function toWater() {
      navigate('/Voting-Entries-Water-Hashish')
  }
  function toSift() {
    navigate('/Voting-Entries-Dry-Sift')
  }

  return (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg" src={titleGoldBg}/>
       </div>
       <div className='container'>
         <div className='holder'>
         <div className='instructions'>
                  <p className='steps-to-mint'>Voting Categories</p>
                  <div className='row ms-4'>
                    <div className='col'>
                        <div className='card border' onClick={toRosin}>
                          <img className='img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Hash Rosin Entries</p>
                          </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border' onClick={toWater}>
                          <img className='img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Water Hash Entries</p>
                          </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border' onClick={toSift}>
                          <img className='img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Dry Sift Entries</p>
                          </div>
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

export default VotingCategories