import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import Spinner from '../../Component/Spinner';
import FirstXyChartCom from './FirstXyChartCom';

const FirstXyChartData = () => {
    const[ChartData, setChartData]=useState();
    const GetApiData=()=>{
      const formdata= new FormData();
      formdata.append('chart', 'spark_total_meetings');
      copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then((res)=>{
        // console.log('firstXY', res.data);
        setChartData(res.data);
      }).catch((err)=>{
        console.log('Error is', err);
      });
    }

    useEffect(()=>{
      GetApiData();
    }, []);
  return (
    <div> {ChartData? <FirstXyChartCom ChartData={ChartData} />:<Spinner /> }</div>
  );
}

export default FirstXyChartData;