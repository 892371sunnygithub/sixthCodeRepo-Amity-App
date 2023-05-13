import React, {useState} from 'react';
import {copiriAxiosPost} from '../Component/api/api';
// import { LogInAction } from '../Redux/Actions';
// import MemberListing from '../MemberListing';
// import {useSelector, useDispatch, ReactReduxContext } from "react-redux";
import {useNavigate  } from 'react-router-dom';
import ReactDnd from '../Component/ReactDnd';
import QuoteApp from '../Component/QuoteApp';
import TestDrag from '../Component/TestDrag';
// import CodeGitDnd from '../Component/CodeGitDnd';
const Contact = () => {
  const[data, setData]= useState({
      userName:"",
      password:"",
  });
  
  // const LogInState=useSelector((state)=>state.RootReducer.LogInDataReducerKey.Products);
  // const dispatch= useDispatch();
  const navigate = useNavigate();
  const sendLoginData=()=> {
    // console.log("Hi there, user!");
    const formdata = new FormData();
    formdata.append('username', data['userName']);
    formdata.append('password', data['password']);
    formdata.append('action', 'login');
    formdata.append('path', '/');
    
    copiriAxiosPost('https://dev.portal.amity.copiri.com/',formdata).then(response => {
      
      if(response.data.status==="SUCCESS"){ 
        
        navigate('/members');
     
      }

    }).catch(error=>{});
     
    setData({
      userName:"",
      password:"",
     });
    
  }
  
  const handleChange = (event) =>{
    const{name, value} = event.target;
    
    setData((preVal)=>{
        return{...preVal, [name]: value};
    });
  };
  return (
     <>
       <section className="container-fluid w-50">
       <div className="form-group">
         <label htmlFor="exampleInputUserName">UserName</label>
         <input type="text" className="form-control" id="exampleInputUserName" aria-describedby="userNameHelp" placeholder="Enter UserName" name='userName' value={data.userName} onChange={handleChange} required autoComplete='off' />
         
       </div>
       <div className="form-group">
         <label htmlFor="exampleInputPassword1">Password</label>
         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={data.password} onChange={handleChange}  required autoComplete='off' />
       </div>
       <div className="form-group form-check">
         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
       </div>
       <button type="button" className="btn btn-primary" onClick={sendLoginData}>Submit</button>
       </section>
      

      <div className="react_dnd">
        <ReactDnd />
        <TestDrag />
        <QuoteApp />

        {/* <CodeGitDnd /> */}
      </div>
      
     </>
  )
}

export default Contact;