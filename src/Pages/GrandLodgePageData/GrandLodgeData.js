import React, { useEffect } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import GrandLodgeCom from './GrandLodgeCom'
import {useDispatch} from 'react-redux'
import { GrandLodgeAction } from '../../Redux/Actions';
const GrandLodgeData = () => {
    const dispatch =useDispatch();
    
    
    const FetchGrandLodgeApi=()=>{
        const formdata= new FormData();
        formdata.append('action','parent_profile');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/',formdata).then((res)=>{
            // console.log('GrandLodge Data is', res.data);
            dispatch(GrandLodgeAction(res.data));
        }).catch((err)=>{
            console.log('Error is', err);
            
        });
    };

    useEffect(()=>{
      FetchGrandLodgeApi();
    }, []);
  return (
    <div>
        <GrandLodgeCom />
    </div>
  )
}

export default GrandLodgeData;