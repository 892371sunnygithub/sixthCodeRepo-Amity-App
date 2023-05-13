import React ,{useEffect,useState} from 'react'
// import { useSelector } from 'react-redux';
import {  copiriAxiosPost } from '../Component/api/api';
import MemberChildComponent from './MemberChildComponent';
// import { BsFillFileArrowUpFill, } from "react-icons/fa";
import { BsFillArrowUpCircleFill ,BsFillArrowDownCircleFill,} from "react-icons/bs";
const MemberComponent = () => {
  const [memebrData,setMemebrData] =  useState([]);
  const[arrowIcon, setArrowIcon]= useState(false);
  const[clickArrow, setclickArrow]= useState();
   const[downArrow, setdownArrow]=useState();
    useEffect(() => {
      getMemberData();
    },[]);
    function sorting(sort) {
      setMemebrData();
      console.log(sort);
      getMemberData(sort);
      setArrowIcon(!arrowIcon);
      setclickArrow(sort);
      setdownArrow(sort);
    }
    const getMemberData=(sort=2,orderBy="ASC")=> {
      setMemebrData([]);
      // setArrowIcon(true);
      // setclickArrow(sort);
      const formdata = new FormData();
        formdata.append('action', 'members_list');
        formdata.append('sort', sort);
        formdata.append('order', orderBy);
        copiriAxiosPost('https://dev.portal.amity.copiri.com/', formdata).then(response=>{
        //console.log(response.data);
        if (response.data.length>0) {
          setMemebrData(response.data);
        }
    }).catch(error=>{});
    }
    useEffect(()=>{
       setArrowIcon('2');
       setclickArrow('2');
    },['2']);
  return (
    <>
      <div className="table_data_style">
         <table className='table table-bordered table_data_style'>
            <thead>
              <tr scope="row">
              <th onClick={()=>sorting('2')} className="table_head_styles" scope="col">Honorific, Name { arrowIcon &&  clickArrow ==='2' ? <BsFillArrowUpCircleFill className='text-black' /> :   downArrow==="2" &&<BsFillArrowDownCircleFill className='text-danger'/> } </th>
              <th onClick={()=>sorting('3')} className="table_head_styles" scope="col">Degree { arrowIcon&& clickArrow ==='3' ? <BsFillArrowUpCircleFill className='text-black' /> :   downArrow==="3" && <BsFillArrowDownCircleFill className='text-danger' /> } </th>
              <th onClick={()=>sorting('4')} className="table_head_styles" scope="col">Member { arrowIcon && clickArrow ==='4'?  <BsFillArrowUpCircleFill className='text-black' /> :   downArrow==="4" && <BsFillArrowDownCircleFill className='text-danger'/> } </th>
              <th onClick={()=>sorting('5')} className="table_head_styles" scope="col">Status  { arrowIcon && clickArrow ==='5'? <BsFillArrowUpCircleFill className='text-black' />:   downArrow==="5" && <BsFillArrowDownCircleFill className='text-danger' /> } </th>
              <th className="table_head_styles" scope="col">Admin?</th>
              <th className="table_head_styles" scope="col">GL?</th>
              <th scope="col">More</th>
              </tr>
            </thead>
            <tbody>
             <MemberChildComponent memberData={memebrData} />
            </tbody>
         </table>
      </div>
    </>
  )
}
export default MemberComponent;