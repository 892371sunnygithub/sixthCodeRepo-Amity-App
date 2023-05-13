import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import HalfPieChartCom from './HalfPieChartCom'

const HalfPieChartData = () => {
  const[chartData, setChartData]= useState();
  const fetchdata=()=>{
    const formdata= new FormData();
    formdata.append('chart','top_unique_lodge_count');
    copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then((response)=>{
       setChartData(response.data);
    }).catch((error)=>{
       console.log("Error is ", error);
    });
  }

  useEffect(()=>{
     fetchdata();
  },[])
  return (
    <div className='container '>
            <div className="row pt-4 pb-5 ">
                <div className="col-md-6 col-12 mt-3">
                    <h5 className='chart_head'>Most Common Lodge Names</h5>
                     <HalfPieChartCom chartData={chartData} />
                    
                </div>
                <div className="col-md-6 col-12 mt-3">
                    <div className="btn_and_para">
                        <button className="btn btn-primary">Explanation</button>
                        <p className="mt-1  mb-3">
                           This chart shows the ten Lodge Names that appear most frequently across the ~40000 Lodges that Amity has in our system, without regard to their associated Lodge Numbers. 
                        </p>

                        <p className="mt-1  mb-3">
                           For each Lodge Name in the legend, the number of occurrences is shown after the Name. You can also hover over the chart itself to see the data.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default HalfPieChartData