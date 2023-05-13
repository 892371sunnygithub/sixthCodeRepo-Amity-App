import React, {useState,useEffect } from 'react'
import HomeProgressCom from './HomeProgressCom';
import {copiriAxiosPost} from '../../Component/api/api';
const HomeProgressData = () => {
  const[Data, setData]= useState();
  // Get the Progress Data from Api

  const GetApiData=()=>{
     const formdata=new FormData();
     formdata.append('chart', 'sharing_stats');
     copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then((res)=>{
      // console.log('Response from Progrs Data', res.data);
      setData(res.data);
     }).catch((err)=>{
      console.log('Error is', err);
     });
  };
  
  useEffect(()=>{
   GetApiData();
  }, []);
  return (
    <>
      
        <HomeProgressCom Data={Data} />
    
    </>
  )
}

export default HomeProgressData;