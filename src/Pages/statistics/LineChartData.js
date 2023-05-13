import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import LineChartCom from './LineChartCom';

const LineChartData = () => {
    const[chartData, setChartData]= useState();
    const fetchdata=()=>{
        const formdata= new FormData();
        formdata.append('chart','chart_gl_history_amcharts');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then((response)=>{
            setChartData(response.data);
        }).catch((err)=>{
            console.log('Error is', err);
        });
    }

    useEffect(()=>{
      fetchdata();
    },[]);
  return (
    <div className='container '>
            <div className="row pt-4 pb-5 ">
                <div className="col-md-6 col-12 mt-3">
                    <h5 className='chart_head'> Grand Lodges with Members Usings Amity, Over Time </h5>
                     <LineChartCom chartData={chartData} />
                    
                </div>
                <div className="col-md-6 col-12 mt-3">
                    <div className="btn_and_para">
                        <button className="btn btn-primary">Explanation</button>
                        <p className="mt-1  mb-3">
                           This chart shows the ten combinations of Lodge Names and Lodge Numbers that appear most frequently across the ~40000 Lodges that Amity has in our system.
                        </p>

                        <p className="mt-1  mb-3">
                           For each Lodge  Name/Number combination in the legend, the number of occurrences is shown after the Name and Number.You can also hover over the chart itself to see the data.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default LineChartData;