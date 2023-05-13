import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import PieOneCom from './PieOneCom'

const PieOneData = () => {
    const [chartData, chartSetData] = useState();

    const FetchPieChartData = () => {
        const formdata = new FormData();
        formdata.append('chart', 'chart_user_breakdown_amcharts');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then(response => {
            // console.log("response from this side", response.data);
            chartSetData(response.data);

        }).catch((error) => {
            console.log("Error Is", error);
        });
    }

    useEffect(() => {
        FetchPieChartData();
    }, []);
    return (
        <div className='container '>
            <div className="row pt-4 pb-5 ">
                <div className="col-md-6 col-12 mt-3">
                    <h5 className='chart_head'>How Many of Your <span>&#128526;</span> Lodges have Members using Amity?</h5>
                    <PieOneCom chartData={chartData} />
                </div>
                <div className="col-md-6 col-12 mt-3">
                    <div className="btn_and_para">
                        <button className="btn btn-primary">Explanation</button>
                        <p className="mt-1  mb-3">
                            This Chart shows the number of Lodges listed in Amity that are beholden to Parent Organsation 44LPZKC80F, broken by their members' registration with Amity:
                        </p>
                    </div>
                    <ul className='chart_sec'>
                        <li className="item_para">
                            The yellow section of this chart shows the persentage of Lodges in your Grand Jurisdiction that have members registered with Amity.
                        </li>
                        <li className="item_para">
                            The Green section of this chart shows the persentage of Lodges in your Grand Jurisdiciton that have one or more members who have been granted "Lodge Admin" permission in Amity. These users can support users in their "Lodge Directly", as opposed to needing their Grand Secretary to support them.
                        </li>

                        <li className="item_para">
                            The blue section of this chart shows the persentage of Lodges in your Grand Jurisdiction that have no members registered with Amity.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PieOneData