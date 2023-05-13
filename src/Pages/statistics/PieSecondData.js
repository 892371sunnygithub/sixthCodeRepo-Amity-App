import React, { useEffect, useState } from 'react'
import { copiriAxiosPost } from '../../Component/api/api';
import PieSecondCom from './PieSecondCom';

const PieSecondData = () => {
    const [secData, setsecData] = useState();
    const Fetchdata = () => {
        const formdata = new FormData();
        formdata.append('chart', 'chart_lodges_by_continent_amcharts');
        copiriAxiosPost('https://dev.portal.amity.copiri.com/ajax_chart', formdata).then(response => {
            setsecData(response.data);
        }).catch((error) => {
            console.log('Err', error);
        });

    }

    useEffect(() => {
        Fetchdata();
    }, []);
    return (
        <div className='container '>
            <div className="row pt-4 pb-5 ">
                <div className="col-md-6 col-12 mt-3">
                    <h5 className='chart_head'>Number of Lodges on each Continent in Amity</h5>
                    <PieSecondCom secData={secData} />
                </div>
                <div className="col-md-6 col-12 mt-3">
                    <div className="btn_and_para">
                        <button className="btn btn-primary">Explanation</button>
                        <p className="mt-1  mb-3">
                            This Chart shows the number of Lodges that are listed in Amity, broken by the world's six continents. Nearly 40000 Lodges around the world documented in our system.
                        </p>
                    </div>

                    <ul className='chart_sec'>
                        <p className='mt-3 mb-3'>For each section of the chart that shows the Lodges on a given continent two values are provided: </p>
                        
                        <li className="item_para">
                        The total number of Lodges that are located on the continent.
                        </li>
                        <li className="item_para">
                        The percentage of Lodges on that continent, as related to the total number of Lodges listed in Amity.
                        </li>
                        <p className='mt-3 mb-3'> Itshould be noted that for the purpose of this chart a Lodge's location is determined by where it meets, not where the Grand Lodge it is beholden to is located.</p>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default PieSecondData;