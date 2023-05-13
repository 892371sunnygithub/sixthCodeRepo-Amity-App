// eslint-disable-next-line
import React, { Fragment, useState, useEffect } from 'react'; // eslint-disable-next-line
import {  copiriAxiosPost } from '../Component/api/api';
import MemUVColumn from './MemUVColumn';
const MemebrContentItems = (props) => {
  const [loading,setLoading] = useState(false);
  const [rowData, setRowData] = useState([]);
  const {item} = props;
  /* initial api request to get the member data*/
  useEffect(() => {   
    getMemberListData();
    //getLanguangePack();
    // eslint-disable-next-line
  }, [props]);

  function getUser(data, time) {
      setLoading(false);
      copiriAxiosPost('https://dev.portal.amity.copiri.com/', data).then(response=>{
        if (response && response.data) {
          setRowData(response.data);
        }
      }).catch(err => {
      });
  }

  function getMemberListData() {
    let formdata = new FormData();
    formdata.append('action', 'user');
    formdata.append('id', item.id);
    if (props.keyId === 0) {
      getUser(formdata, 0);
    } else {
      getUser(formdata, props.keyId);
    }
  }
  return (
    <>   
     <MemUVColumn item={item} loading={loading} rowData={rowData}/>
    </>
  );
};
export default MemebrContentItems;
