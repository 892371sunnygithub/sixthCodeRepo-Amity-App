import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import ColumnChartCom from './ColumnChartCom'

const ColumnChartData = () => {
    const[columnData, setColumnData]=useState();
    const fetchColumnData=()=>{
        const formdata= new FormData();
        formdata.append('chart', 'chart_gls_by_continent_amcharts');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then((response)=>{
            setColumnData(response.data);
            
        }).catch((err)=>{
           console.log('Error is', err);
        });
    }

    useEffect(()=>{
      fetchColumnData();
    },[])
  return (
    <div className='container '>
            <div className="row pt-4 pb-5 ">
                <div className="col-md-6 col-12 mt-3">
                    <h5 className='chart_head'>Number of Grand Lodges on each Continent in Amity</h5>
                    <ColumnChartCom columnData={columnData} />
                    
                </div>
                <div className="col-md-6 col-12 mt-3">
                    <div className="btn_and_para">
                        <button className="btn btn-primary">Explanation</button>
                        <p className="mt-1  mb-3">
                           This chart shows the number of Grand Lodges that are listed in Amity , broken down by the world's six continents.
                        </p>

                        <p className="mt-1  mb-3">
                           For each bar that shows the Grand Lodges on a given continent, two values are provided:
                        </p>
                    </div>
                    <ul className='chart_sec'>
                        <li className="item_para">
                           The taller, darker bar shows the total number of Grand Lodges that are headquartered on the continent.
                        </li>
                        

                        <li className="item_para">
                            The shorter, lighter bar shows the number of Grand Lodges on that continent with members that have registered with Amity.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default ColumnChartData