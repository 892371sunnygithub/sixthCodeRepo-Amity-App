import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { FiEdit } from 'react-icons/fi'
import Spinner from '../../Component/Spinner'
import {NavLink} from 'react-router-dom';
import {AiOutlinePhone} from 'react-icons/ai'
// import { useState } from 'react';
const GrandLodgeCom = () => {
    const GrandLodgeState = useSelector((state) => state.RootReducer.GrandLodgeReducerKey.GrandLodgeProduct);
    // console.log(GrandLodgeState);
    const[data, setData]=useState([]);
    const { id, address, countries, email, founded_fld, founded_txt, fr, gm, gs, honorifics, images, meeting, meeting_txt, months, org_name, org_name_english, org_name_short, org_name_ui, periods, phone, ranks, roles, seal_90, seal_180, seal_main, serviceboard, suffixes, website } = GrandLodgeState;
    const ShowHide=()=>{
       document.querySelector('.input_text').click()
    }
    const handleInput=(event)=>{
        const{name, value} = event.target;
    
    setData((preVal)=>{
        return{...preVal, [name]: value};
    });
    }
    console.log(data);
    return (
        <>
            <section className="grand_lodge_sec">
                <div className="grand_lodge_style container-fluid">
                    {/* header data start */}
                    <div className="header_data container">
                        <span className='btn_back'>Back</span>
                        <span className='btn_lodge'>My Grand Loodge</span>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between align-items-center container">
                                {
                                    org_name?
                                <h3 className='f-13'>{org_name} </h3>: <Spinner />
                                }
                                <h6 className='text-danger'><FiEdit /> </h6>
                            </div>
                        </div>
                    </div>
                    {/* header data end */}

                    {/* child section start */}
                    <section className="child_sec container">
                        {/* main section row */}
                        <div className="row">
                            {/* first column  */}
                            <div className="col-md-3">
                                <div className="">
                                    <div className="row">
                                        <div className="col-12">
                                        {/* first image */}
                                            <div className="images_style_one">
                                                <figure className='text-center'>
                                                { seal_180?
                                                    <img src={seal_180} alt="LodgeImage" className='img-fluid' />: <Spinner /> }
                                                    <hr />
                                                    <figcaption className='d-flex align-items-center justify-content-around'>
                                                        <span className='fw_bold'>Your Grand Lodge's Seal </span>
                                                        <span className='text-primary cursor_pointer' onClick={()=>ShowHide()}> <FiEdit className='' /> <input type="file" className="d_none input_text" onChange={handleInput} name="file" value={data.name} />
                                                         </span>
                                                        
                                                    </figcaption>
                                                </figure>
                                            </div>

                                        </div>
                                    </div>

                                    {/* second image */}

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <div className="">
                                                    <figure className='images_style_two'>
                                                        {/* <img src={seal_90} alt="LodgeImage" className='img-fluid' /> */}
                                                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                                            <div className="carousel-indicators">
                                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                            </div>
                                                            <div className="carousel-inner">
                                                                <div className="carousel-item active">
                                                                { seal_90 ?
                                                                    <img src={seal_90} className="d-block w-100" alt="..." />:<Spinner /> }
                                                                    <div className="carousel-caption d-none d-md-block">
                                                                        {/* <h5>First slide label</h5> */}
                                                                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                                                                    </div>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="" className="d-block w-100" alt="..." />
                                                                    <div className="carousel-caption d-none d-md-block">
                                                                        {/* <h5>Second slide label</h5> */}
                                                                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                                                                    </div>
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <img src="..." className="d-block w-100" alt="..." />
                                                                    <div className="carousel-caption d-none d-md-block">
                                                                        {/* <h5>Third slide label</h5> */}
                                                                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="visually-hidden">Next</span>
                                                            </button>
                                                        </div>
                                                    </figure>
                                                    <div className='caption_style'>
                                               
                                                        <span className='fw_bold me-2'>Add Images</span>
                                                        <span className='text-primary cursor_pointer' onClick={()=>ShowHide()} ><FiEdit />
                                                        <input type="file" className='d_none input_text' />
                                                         </span>
                                                    </div>


                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second column */}
                            <div className="col-md-9">
                                {/* first row start */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="">
                                            <h5 className=''>Importants Dates</h5>
                                        </div>
                                        <hr className='mt-0' />
                                    </div>
                                </div>
                                {/* second row start */}

                                <div className="row">
                                    <div className="col-md-4 col-4">
                                        <div className="">
                                            <h5 className='f-10'>Founded:</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="">
                                        {
                                            founded_txt?
                                            <span className='f-13'>{founded_txt} </span>
                                            :<Spinner />
                                        }    
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="text-end">
                                            <span className='text-primary'><FiEdit /> </span>
                                        </div>
                                    </div>
                                </div>

                                {/* third row start */}

                                <div className="row pt-2">
                                    <div className="col-md-6 col-6">
                                        <div className="">
                                            <h5 className='f-10'>Communication:</h5>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <select className="form-select me-2" aria-label="Default select example">
                                                <option>Choose</option>

                                                {
                                                    months &&
                                                    Object.keys(months).map((curElm, index) => {
                                                        return (

                                                            <option value={curElm} key={index}>{months[curElm]} </option>

                                                        )
                                                    })
                                                }


                                            </select>

                                            <select className="form-select" aria-label="Default select example">
                                                <option>Choose </option>

                                                {
                                                    periods &&
                                                    Object.keys(periods).map((curElm, index) => {
                                                        return (
                                                            <>
                                                                <option value={curElm} key={index}>{periods[curElm]}</option>
                                                            </>
                                                        )
                                                    })
                                                }

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-2">
                                        <div className='text-end'>
                                            <span className='text-primary'><FiEdit /> </span>
                                        </div>
                                    </div>
                                </div>

                                {/* fourth row start */}

                                <div className="row pt-3">
                                    <div className="col-12">
                                        <span className="span_fourth_style">Office Information</span>
                                    </div>
                                </div>
                                <hr className='mt-0' />

                                {/* fifth row start */}

                                <div className="row">
                                    <div className="col-md-4 col-4">
                                        <div className="">
                                            <h5 className='f-10'>Grand Lodge Address:</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="">
                                        <span className="address" dangerouslySetInnerHTML={{__html: address}}
                                        >
                                        </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="text-end">
                                            <span className='text-primary'><FiEdit /> </span>
                                        </div>
                                    </div>
                                </div>

                                {/* sixth row start */}

                                <div className="row pt-3">
                                    <div className="col-md-4 col-4">
                                        <div className="">
                                            <h5 className='f-10'>Grand Lodge Phone: </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="pt-1">
                                        {
                                            phone &&
                                            <NavLink to={phone.number} className="nav_common">
                                            <span> <AiOutlinePhone/></span>
                                            <span>{phone.number} </span>
                                            </NavLink>
                                        }    
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="text-end">
                                            <span className='text-primary'><FiEdit /> </span>
                                        </div>
                                    </div>
                                </div>

                                {/* siventh row start */}

                                <div className="row pt-3">
                                    <div className="col-md-4 col-4">
                                        <div className=''>
                                            <h5 className='f-10'>Grand Lodge Email: </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className="pt-1">
                                            {
                                                email &&
                                                <NavLink to={email.email} className="nav_common">
                                                <span className=' text-primary'>{email.email} </span>
                                                </NavLink>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <div className='text-end'>
                                            <span className="text-primary">
                                                <FiEdit />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* eighth row start */}

                                <div className="row pt-3">
                                   <div className="col-md-4 col-4">
                                    <div className="">
                                        <h5 className='f-10'>Grand Lodge Website: </h5>
                                    </div>
                                   </div>
                                   <div className="col-md-4 col-4">
                                    <div className="pt-1">
                                        {
                                            website &&
                                            <NavLink to={website.url} className="nav_common" >
                                                <span>{website.url} </span>
                                            </NavLink>
                                        }
                                    </div>
                                   </div>
                                   <div className="col-md-4 col-4">
                                    <div className="text-end">
                                        <span className='text-primary'><FiEdit /> </span>
                                    </div>
                                   </div>
                                </div>

                                {/* ninth row start */}

                                <div className="row pt-3">
                                   <div className="col-12">
                                    <div className="">
                                        <span className='span_fourth_style'>Leadership </span>
                                    </div>
                                    <hr className='mt-0' />
                                   </div>
                                </div>

                                {/* tenth row start here */}

                                <div className="row pt-3">
                                   <div className="col-md-4 col-4">
                                    <div className="">
                                        <h5 className='f-10'>Grand Master:</h5>
                                    </div>
                                   </div>
                                   <div className="col-md-6 col-6">
                                    <div className="pt-1">
                                       {
                                        gm &&
                                        <span className=''>{gm.name_full} </span>
                                       }
                                       
                                       <div className="row">
                                        <div className="col-md-6 col-12">
                                        {gm &&
                                            <div className="d-flex justify-content-between pt-2">
                                                
                                                <span>Phone:</span>
                                                {gm.phone?<span>{gm.phone}</span>:
                                                <span>Not Provided</span>}
                                                
                                                
                                            </div>
                                        }
                                        { gm &&
                                            <div className="d-flex justify-content-between">
                                                <span>Email:</span>
                                                {gm.email?<span>{gm.email}</span>:
                                                <span>Not Provided</span>}
                                            </div>
                                        }
                                        </div>
                                        {/* <div className="col-md-6 col-6"></div> */}
                                       </div>
                                    </div>
                                   </div>
                                   <div className="col-md-2 col-2">
                                    <div className="text-end">
                                        <span className='text-primary'><FiEdit /> </span>
                                    </div>
                                   </div>
                                </div>

                                {/* eleventh row start */}

                                <div className="row pt-3">
                                   <div className="col-md-4 col-4">
                                     <div className="">
                                        <h5 className='f-10'>Grand Secretary: </h5>
                                     </div>
                                   </div>
                                   <div className="col-md-6 col-6">
                                   <div className="pt-1">
                                        {
                                            gs &&
                                            <span className='fw-bold'>{gs.name_full} </span>
                                        }

                                        <div className="row">
                                        <div className="col-md-6 col-12">
                                        {gs &&
                                            <div className="d-flex justify-content-between pt-2">
                                                
                                                <span>Phone:</span>
                                                {gs.phone?<span>{gs.phone}</span>:
                                                <span>Not Provided</span>}
                                                
                                                
                                            </div>
                                        }
                                        { gs &&
                                            <div className="d-flex justify-content-between">
                                                <span>Email:</span>
                                                {gs.email?<span>{gs.email}</span>:
                                                <span>Not Provided</span>}
                                            </div>
                                        }
                                        </div>
                                        {/* <div className="col-md-6 col-6"></div> */}
                                       </div>


                                     </div>
                                     
                                   </div>
                                   <div className="col-md-2 col-2">
                                    <div className="">
                                        <div className="text-end">
                                            <span className="text-primary">
                                                <FiEdit />
                                            </span>
                                        </div>
                                    </div>
                                   </div>
                                </div>

                                {/* twelfth row start */}
                                <div className="row pt-3">
                                   <div className="col-md-4 col-4">
                                     <div className="">
                                        <h5 className='f-10'>Foreign Relations: </h5>
                                     </div>
                                   </div>
                                   <div className="col-md-6 col-6">
                                   <div className="pt-1">
                                        {
                                         fr &&
                                         <div className="">
                                            {
                                                fr.name_full?<span className='fw-bold'>{fr.name_full} </span>:<span className='fw-bold'>Name Not Provided</span>
                                            }
                                         </div>  
                                        
                                        }
                                        <div className="row">
                                        <div className="col-md-6 col-12">
                                        {fr &&
                                            <div className="d-flex justify-content-between pt-2">
                                                
                                                <span>Phone:</span>
                                                {fr.phone?<span>{fr.phone}</span>:
                                                <span>Not Provided</span>}
                                                
                                                
                                            </div>
                                        }
                                        { fr &&
                                            <div className="d-flex justify-content-between">
                                                <span>Email:</span>
                                                {fr.email?<span>{fr.email}</span>:
                                                <span>Not Provided</span>}
                                            </div>
                                        }
                                        </div>
                                        {/* <div className="col-md-6 col-6"></div> */}
                                       </div>


                                     </div>
                                     
                                   </div>
                                   <div className="col-md-2 col-2">
                                    <div className="">
                                        <div className="text-end">
                                            <span className="text-primary">
                                                <FiEdit />
                                            </span>
                                        </div>
                                    </div>
                                   </div>
                                </div>

                                {/* thirtenth row start */}

                                <div className="row">
                                    <div className="col-12">
                                        <div className="pt-3">
                                            <h5 className=''>Masonic Service Board(s)</h5>
                                            <hr className='mt-0' />
                                        <p className='mt-2'>A Masonic Service Board, sometimes called a Board of Relief, Relief Committee, Service of Employement Bureau, or other similar name, is the designated point of contact within your Grand Lodge to which your members may refer requests for assistance. This information is published in the <span className='text-primary'> Acasia Book</span> for the benefit of your members. </p>
                                        </div>
                                        
                                        <h6 className='fw-bold'>Comming Soon.</h6>
                                    </div>
                                </div>
                                 
                                {/* second col end */}
                            </div>
                            {/* main row end */}
                        </div>
                    </section>
                    {/* child section end */}
                 

                    {/* <--------------- parent sectionEnd------------> */}
                </div>
            </section>
        </>
    );
}

export default GrandLodgeCom