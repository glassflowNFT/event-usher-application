import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate } from 'react-router-dom';

function VotingEntriesDry() {
  let navigate = useNavigate()

  function nextCategory() {
      navigate('/Voting-Entries-Rosin')
  }

  function prevCategory() {
      navigate('/Voting-Entries-Water-Hashish')
  }

  function toVoting(){
    navigate('/Vote')
  }

  return (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg" src={titleGoldBg}/>
       </div>
       <div className='container me-3'>
         <div className='holder'>
         <p className='water-hash-title me-5'>Dry Sift Entries</p>
         <div className='row ms-4'>
                    <div className='col'>
                        <div className='card border w-75' onClick={toVoting}>
                          <img className='entry-pic img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Entry-1</p>
                          </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border w-75' onClick={toVoting}>
                          <img className='entry-pic img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Entry-2</p>
                          </div>
                        </div>
                    </div>
                  </div>
         <div className='row ms-4'>
                    <div className='col'>
                        <div className='card border w-75' onClick={toVoting}>
                          <img className='entry-pic img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Entry-3</p>
                          </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border w-75' onClick={toVoting}>
                          <img className='entry-pic img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Entry-4</p>
                          </div>
                        </div>
                    </div>
                  </div>
         <div className='row ms-4'>
                    <div className='col'>
                        <div className='card border w-75' onClick={toVoting}>
                          <img className='entry-pic img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Entry-5</p>
                          </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card border w-75' onClick={toVoting}>
                          <img className='entry-pic img-fluid' src={rectangle8}/>
                          <div className='card-body'>
                            <p className='c-card-title'>Entry-6</p>
                          </div>
                        </div>
                    </div>
            </div>
         <div className='row ms-4 mb-5'>
                    <div className='col'>
                        <button className='prev-category' onClick={prevCategory}>Previous Category</button>
                    </div>
                    <div className='col'>
                       <button className='next-category' onClick={nextCategory}>Next Category</button>
                    </div>
            </div>
         </div>
       </div>
       <img className="footer" src={$footer} />
 </div>
  )
}

export default VotingEntriesDry