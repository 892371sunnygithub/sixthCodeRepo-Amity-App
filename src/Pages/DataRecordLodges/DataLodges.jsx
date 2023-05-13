import React from 'react'
import { useState } from 'react';
import LodgeModal from './LodgeModal';

const DataLodges = () => {
    const[state, setState]= useState(false);
    
    const showHideModal=()=>{
      setState(true);
    }
    const closeModal=()=>{
        // window.confirm('Are You Sure to Close this Modal');
        if (window.confirm("Are You Sure to Close the Modal")) {
            // do stuff
            setState(false);
         } else {
           return false;
         }
      }
  return (
    <>
    <h1>Welcome Lodge Page</h1>
    <div className='text-center'>
        <button className='btn btn-primary' onClick={()=>showHideModal()}>Edit</button>
    </div>
    <LodgeModal show={state} close={closeModal} />
    </>
  )
}

export default DataLodges;