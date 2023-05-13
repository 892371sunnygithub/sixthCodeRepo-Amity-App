import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BsBookmarks,BsHddNetwork} from "react-icons/bs";
import Modal from '../Modal';


const RecogListingCom = () => {
  
  const RecogState = useSelector((state) => state.RootReducer.RecogReducerKey.Recog_Data);
  // console.log('Response from recog', RecogState)
  
  const showHideModal=()=>{
      
  }
  return (
    <>
      <section className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <span className='bg-primary text-white ps-3 pe-3 rounded cursor_pointer'>Back</span> <span className='bg-dark text-white ps-2 pe-2 rounded cursor_pointer'>Masonic Conferences</span>
            <h5 className='mb-5 mt-3'>Masonic Conferences</h5>
            <div className='recog_style'>
              {
                RecogState.map((curElm) => {
                  const { id, abbreviation, active, description, members, name, seal } = curElm;
                  return (
                    <>
                      <div className='recog_data' key={id}>
                      <div className='image_para d-flex align-items-center pb-2'>
                        <img src={seal} alt='recog_image' className='img-fluid image_recog_style' />
                        <div className='span_head ms-4'>
                        <h3>{name} ({abbreviation}) </h3>
                        {
                          active && <p className='text-primary'><BsHddNetwork /> Your Grand Lodge is a Member of this Conference</p>
                        }
                        </div>
                        
                        </div>
                        <div className='right_data'>
                                                 
                          <hr />
                          <p>{description} </p>
                           
                          <div className='para_btn_style'>
                            <p>Our Records show that [{members}] Grand Lodges are members of this Conferences</p>
                            <button className='btn btn-sm text-primary btn_con_style' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>showHideModal()}><BsBookmarks/> View Members</button>
                          </div>
                          <hr />
                          <Modal />
                          
                        </div>
                      </div>
                    </>
                  )
                })


              }
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default RecogListingCom