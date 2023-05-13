import React, { useEffect } from 'react';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import { FirstProductAction } from '../Redux/Actions';
import ProductComponent from './ProductComponent';
const ProductListing = () => {
const DataState= useSelector((state)=>state.RootReducer.GetProductReducerkey.Products);
console.log(DataState);
const dispatch = useDispatch();
 const GetApiData = async() =>{
   const response = await axios.get("http://jsonplaceholder.typicode.com/users").catch((err)=>{
    console.log("Err", err);
   });
   dispatch(FirstProductAction((response.data)));
 }

 useEffect(()=>{
    GetApiData();
 },[]);
  return (
    <div className='fragment'>
     <section className="product_listing_style">
        <div className="list_data">
          <ProductComponent />
        </div>
     </section>
    
    </div>
  )
}

export default ProductListing;