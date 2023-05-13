import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import Spinner from '../../Component/Spinner';
import ThirdXyCom from './ThirdXyCom';

const ThirdXyData = () => {
    const[ChartData, setChartData]= useState();
    const GetApiData=()=>{
        const formdata=new FormData();
        formdata.append('chart', 'spark_orgs_with_meetings');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then((res)=>{
            // console.log('Res is', res.data);
            setChartData(res.data);
        }).catch((err)=>{
            console.log('Error is', err);
        })
    };

    useEffect(()=>{
      GetApiData();
    }, [])
  return (
    <div>
    {
     ChartData?
        <ThirdXyCom ChartData={ChartData} />: <Spinner />
    }
    </div>
  )
}

export default ThirdXyData;