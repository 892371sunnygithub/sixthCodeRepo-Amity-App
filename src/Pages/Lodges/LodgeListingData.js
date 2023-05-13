import React, { useEffect } from 'react'
import { AiOutlineSortAscending } from 'react-icons/ai';
import { copiriAxiosPost } from './../../Component/api/api'
const LodgeListingData = () => {
    const getMapData=()=>{
        const formdata= new FormData();
        formdata.append('action', 'lodge');
        formdata.append('id', 8440);
        copiriAxiosPost('https://dev.portal.amity.copiri.com/', formdata).then((res)=>{
        //   console.log("response from map data side", res.data);
        }).catch((error)=>{
          console.log('Error is', error);
        });
     };
    
     useEffect(()=>{
      getMapData();
     },[]);
    
    return (
        <>
            <section className="p-4">
                <div className="row">
                    <h3>Parent Organisation 44LPZKC80F</h3>
                    <hr />
                    <div className="col-md-12 col-12">
                        <div className="top_data d-flex justify-content-between pb-3">
                            <span className='text-primary cursor_pointer'>Add a New Lodge</span>
                            <span className=''>63, Active Lodges|Showing 1-63</span>
                        </div>
                        <div className='table_data_style'>
                        <table className="table">
                            <thead className='head_map_table_style'>
                                <tr>
                                    <th className='underline_hover'>Lodge Name/Number  <AiOutlineSortAscending /> </th>
                                    <th className='underline_hover'>Location</th>
                                    <th className='underline_hover'>Status</th>
                                    <th className='underline_hover'>Mems.</th>
                                    <th className='text-black'>Data Overview</th>
                                    <th className='text-black'>More</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DemoOne</td>
                                    <td>demoTwo</td>
                                    <td>demoThree</td>
                                    <td>demoFour</td>
                                    <td>demoFive</td>
                                    <td>demoSix</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default LodgeListingData