import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import Spinner from '../../Component/Spinner';
import SecondXyCom from './SecondXyCom'

const SecondXyData = () => {
    const[ChartData, setChartData]= useState();
    const GetApiData = ()=>{
        const formdata= new FormData();
        formdata.append('chart', 'spark_total_check_ins');
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
    <div>
    { ChartData?
        <SecondXyCom ChartData={ChartData} />: <Spinner />
    }
    </div>
  )
}

export default SecondXyData