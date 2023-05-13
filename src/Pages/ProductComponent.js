import React from 'react'
import { useSelector } from 'react-redux';
const ProductComponent = () => {
    const DataState= useSelector((state)=>state.RootReducer.GetProductReducerkey.Products);
    const RenderData=DataState.map((curElm)=>{
        const{id,name,username,email,address,phone,website,company}=curElm;
        return(
            <div className='fragment_Get_Data'>
                <div className="list_data_One" key={id}>
                    <div className="id"> Sno...{id} </div>
                    <div className="name">Name...{name}</div>
                    <div className="user"> UserName....{username}</div>
                    <div className="email">Email is.....{email}</div>
                     <div className="address">Address.... { address ? `${address.street} , ${address.suite}, ${address.city}, ${address.zipcode}, ${address.geo.lat}, ${address.geo.lng}` : ""  } </div>
                    <div className="phone">Phone Is.... {phone}</div>
                    <div className="website">Website is.....{website}</div>
                     <div className="company"> {company ?  `${company.name}, ${company.catchPhrase}, ${company.bs}`  : ""} </div>
                </div>
            </div>
        )
    })
  return (
    <div>
    <h1>Listing Product Data From FakeApi.....</h1>
    <div className='grid_data'> {RenderData} </div>
    </div>
  )
}

export default ProductComponent;