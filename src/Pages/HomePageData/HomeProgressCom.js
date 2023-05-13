import React, { useEffect } from 'react'
import Spinner from '../../Component/Spinner';

const HomeProgressCom = (props) => {
    const{Data}=props;
    // console.log('Data is', Data);
    // const{charter, images, location,contact,meetings}=Data;
        
    useEffect(()=>{

    }, [props])
    return (
        <>
            
            <div className="progress mt-3">
              {
                Data &&
                <div className="progress-bar progress-bar-striped progress-bar-animated w-98 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

              }
                 
            </div>
            
             {Data ?    <h6>{Data.meetings} % have meetings </h6>: <div className='d-flex'> <Spinner /> <h6>% have meetings</h6> </div>  }
            
            <div className="progress mt-3 ">
            { Data &&
                <div className="progress-bar progress-bar-striped progress-bar-animated w-100 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>}
            </div>
             {Data ? <h6> {Data.location}% provide their specific location </h6>:<div className='d-flex'> <Spinner /> <h6>% provide their specific location</h6> </div> }             
             <div className="progress mt-3 ">
             {
                Data &&
                <div className="progress-bar progress-bar-striped progress-bar-animated w-14 bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> 

             }
            </div>
            {Data ? <h6>{Data.images}% have images available </h6>: <div className='d-flex'> <Spinner /> <h6>% have images available  </h6> </div>}

            <div className="progress mt-3 ">
            { 
                Data &&
                <div className="progress-bar progress-bar-striped progress-bar-animated w-35 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> }
            </div>
            {Data ? <h6>{Data.contact}% offer contact information </h6>: <div className='d-flex'> <Spinner /> <h6>% offer contact information</h6> </div>}
            <div className="progress mt-3 ">
            { 
                Data &&
                <div className="progress-bar progress-bar-striped progress-bar-animated w-100 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>}
                
            </div>

            {Data ? <h6>{Data.charter}% have charter dates listed </h6>: <div className='d-flex'> <Spinner /> <h6>% have charter dates listed</h6> </div>}
        </>
    )
}

export default HomeProgressCom