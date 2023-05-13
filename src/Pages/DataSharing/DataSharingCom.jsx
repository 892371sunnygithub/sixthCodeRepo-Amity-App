import React from 'react'
import {FaArrowCircleLeft} from 'react-icons/fa'
import {AiFillExclamationCircle} from 'react-icons/ai'
import {BsFlag} from 'react-icons/bs';
const DataSharingCom = () => {
  return (
    <>
        <section className="container-fluid">
            <div className="top_sharingdata">
                <span className='bg-primary p-2 pt-0 pb-0 text-white'><FaArrowCircleLeft/> Back</span>
                <span className='ms-2 bg-secondary p-2 pt-0 pb-0 text-white'>Data Sharing</span>
                <h3 className='mt-4'>Data Sharing</h3>
                <div className='p-2 pt-1 bg_blue font_family'>
                <p className='mt-3 '> <AiFillExclamationCircle  /> <b> Watch This Space!  </b>
                </p>
                <p>
                Amity supports Grand Lodges around the world by building Masonic Protocol back into how data is shared between Grand Jurisdictions.We'll be adding More controls for <br /> you soon... stay tuned! 
                 </p>
                 </div>
                 <br />
                 <hr />
                 
            </div>

            <div className="bottom_para">
               <div className="d-flex justify-content-between">
                   <h5>Push to Pantagraph </h5>
                   <img src="" alt="." />
                </div>
                <p className='bottom_para_style mt-3 font_family'>
                   <BsFlag className='text-danger' /> <b> Push to Pantagraph </b> has been disabled since Pantagraph Publishing has gone out of business as of December 31, 2020.
                </p>

                <p className="mt-3 mb-3 bottom_child_para">
                    Amity has partnered with Pantagraph Publishing and stationery to offer a streamlined way to provide your Grand Lodge's information for inclusion in the List of Lodges, Masonic.
                </p>
                 
                <div className="bottom_child_para">
                    <span><b>Allow Pantagraph to Access your Grand Lodge's Data? </b> </span>
                    <div className="radio_style mt-3">
                      <label htmlFor="radioone" className='mb-1'>
                        <input type="radio" name='radioone' id='radioone' className='me-2' />
                        Yes, allow Pantagraph to access my Grand Lodge's data
                      </label> <br />
                      <label htmlFor="radiotwo">
                        <input type="radio" name='radioone' id='radiotwo' className='me-2' />
                        No, <b> do not</b> allow Pantagraph to access my Grand Lodge's Data
                      </label>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DataSharingCom