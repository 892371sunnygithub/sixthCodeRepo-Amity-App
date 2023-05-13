import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import PieChartCom from './PieChartCom'
import Spinner from '../../Component/Spinner';
const PieChartData = () => {
  const[ChartData, setChartData]=useState();
    const FetchApiData=()=>{
        const formdata= new FormData();
        formdata.append('chart', 'chart_user_breakdown_amcharts');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart',formdata).then((res)=>{
            // console.log('ChartDAta', res.data);
            setChartData(res.data);
        }).catch((err)=>{
            console.log('Error is', err);
        });
    };

    useEffect(()=>{
      FetchApiData();
    },[]);
  return (
    <>
        {
          ChartData?
        <PieChartCom ChartData={ChartData} />: <Spinner />
        }
    </>
  )
}

export default PieChartData