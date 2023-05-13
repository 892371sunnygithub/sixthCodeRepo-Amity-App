import React, { useEffect } from 'react'
import {  copiriAxiosPost } from '../Component/api/api';
import { useDispatch,} from 'react-redux';
import MemberComponent from './MemberComponent';
import { MemberListAction } from '../Redux/Actions';

const MemberListing = () => {
  const dispatch = useDispatch();
  const GetMemberData =()=>{
    const formdata = new FormData();
    
    formdata.append('action', 'members_list');
    // formdata.append('path', '/');
    
    copiriAxiosPost('https://dev.portal.amity.copiri.com/', formdata).then(response=>{
      if(response.data.length>0){
        // dispatch(MemberListAction(response.data));
      }
      
    }).catch(error=>{});
    

  }

  useEffect(()=>{
       GetMemberData();
  }, []);
  return (
    <>
      <section className="table_section">
         <div className="data_style">
         <MemberComponent />     
         </div>
      </section>

      
    </>
  )
}

export default MemberListing;