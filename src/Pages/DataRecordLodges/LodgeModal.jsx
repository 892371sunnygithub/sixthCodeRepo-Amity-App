import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DataLodgeMap from './DataLodgeMap';

const LodgeModal=(props)=> {
const{show}=props;
useEffect(()=>{
  
},[show]);

const saveData=()=>{
    alert("Save Change are creted by the\n Main Component");
    

}



  return (
    <>
     <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>LodgeMap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <DataLodgeMap />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>saveData()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LodgeModal;