import React, { useEffect,useState } from 'react'
// import {  copiriAxiosPost } from '../Component/api/api';
import MemebrContentItems from './MemebrContentItems';
const MemberChildComponent = (props) => {
    const { memberData = []} = props;// eslint-disable-next-line
    const [memebrUserList,setMemebrUserList] = useState([]);
    useEffect(() => { 
        if (memberData.length) {
          setMemebrUserList(memberData);
        }
        //getLanguangePack();
        // eslint-disable-next-line
      }, [props]);
  return (
    <>
    {
        memebrUserList.length > 0 &&
        memebrUserList.map((item, index) => 
        
        (
          <MemebrContentItems item={item} keyId={index}  key={item.id} />
        ))
      }
    </>
  )
}

export default MemberChildComponent;