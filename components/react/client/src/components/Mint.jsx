import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";

function Mint() {
  return (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg" src={titleGoldBg}/>
       </div>
       <div className='container'>
         <div className='holder'>
           <div className='row'>
             <div className='col'>
                  <p className='mint-admins'>Mint Entries</p>
                  <p className='label-category'>Entry Name:</p>
              <input className='entry-name-input'></input>
              <p className='label-category'>Select Category:</p>
                <div className='col'>
                     <div className='form-group'>
                        <select className='entry-select'>
                          <option type="text">Hash Rosin</option>
                          <option type="text">Water Hashish</option>
                          <option type="text">Dry Sift</option>
                        </select>
                      </div>
                </div>
                    <div className='col'>
                       <p className='label-category'>Maker Company Name:</p>
                       <input className='entry-name-input'></input>
                    </div>
                    <div className='col'>
                       <p className='label-category'>Breeder name:</p>
                       <input className='entry-name-input'></input>
                    </div>
                    <div className='col'>
                       <p className='label-category'>Farmer Name:</p>
                       <input className='entry-name-input'></input>
                    </div>
                    <div className='col'>
                       <p className='label-category'>Genetics:</p>
                       <input className='entry-name-input'></input>
                    </div>
                    <div className='col'>
                      <button className='mint-button'>Mint</button>
                    </div>
             </div>
            </div>
         </div>
       </div>
       <img className="footer" src={$footer} />
 </div>
  )
}

export default Mint