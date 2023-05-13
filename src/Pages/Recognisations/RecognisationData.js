import React, { useEffect } from 'react'
import { copiriAxiosPost } from '../../Component/api/api'
import { RecogniseAction } from '../../Redux/Actions';
import {useDispatch} from 'react-redux';
import RecogListingCom from './RecogListingCom';


const RecognisationData = () => {
    const dispatch= useDispatch();
    const getData=()=>{
        const formdata= new FormData();
        formdata.append('action', 'conferences_list');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/', formdata).then((response)=>{
            dispatch(RecogniseAction(response.data));
        }).catch((err)=>{
            console.log('Error is', err);

        });
    };

    useEffect(()=>{
       getData(); 
    },[]);

  return (
    <div> <RecogListingCom />   </div>
  )
}

export default RecognisationData;