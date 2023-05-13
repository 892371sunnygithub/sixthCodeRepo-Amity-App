import React from 'react'
import FirstXyChartData from './FirstXyChartData';
import HomeProgressData from './HomeProgressData';
import PieChartData from './PieChartData';

import SecondXyData from './SecondXyData';
import ThirdXyData from './ThirdXyData';

const HomePageCom = () => {
    
    return (
        <>
            <section className='home_page_data'>
                <div className="container-fluid">
                    <h2 className='home_head'>Welcome back, RWB fn_4c6c81 ln_4c6c81!</h2>
                    <div className="row pt-4 pb-3">
                        <div className="col-md-4">
                            <div className="first_col_data ">
                                <div className='d-flex align-items-center mt-2'>
                                    <img src="" alt="HomeImage" className='img-fluid me-2' />
                                    <div className="data ps-2">
                                        <h4>Recognition Check</h4>
                                        <span className='opacity'>BETWEEN ANY GRAND LODGES</span>
                                    </div>
                                </div>
                                <div className="input_sec">
                                    <div className="first_input mt-5">
                                        <input type="text" className='input_common' placeholder='Enter a State Or Country' />
                                    </div>
                                    <div className="second_input mt-3">
                                        <input type="text" className='input_common' placeholder='Enter a State Or Country' />
                                    </div>
                                    <div className="third_input mt-3">
                                        <button className='btn btn-primary input_common'>Search</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="second_col_style">
                                <div className="second_col_head d-flex align-items-center">
                                    <h4 className=''>How Many of Your Lodges <br /> Have Members Using <br /> Amity?</h4>
                                    <h2 className='f-60'>98%</h2>
                                </div>

                                <div className="chart_data">
                                    <div className="chart_style">
                                        <PieChartData />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="third_col_style">
                                <div className='d-flex align-items-center mt-2'>
                                    <img src="" alt="HomeImage" className='img-fluid me-2' />
                                    <div className="data ps-2">
                                        <h4>What Your Lodges Share</h4>
                                        <span className='opacity'>WITH OTHER KNOWN MASONS</span>
                                    </div>
                                </div>

                                <div className="progress_bar_data">
                                    <HomeProgressData />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-4">
                            <div className="first_column_style common mt-3">
                               <div className="inner_data">
                                <h5 className='text-white'>Meeting Created</h5>
                                <div className="chart_sec_data">
                                    <FirstXyChartData />
                                </div>
                               </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="second_column_style common mt-3">
                                <div className="inner_data">
                                    <h5 className='text-white'>Meeting Check Ins</h5>
                                    <div className="chart_sec_data">
                                        <SecondXyData />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="third_column_style common mt-3">
                                <div className="inner_data">
                                    <h5 className='text-white'>Lodges Creating Meetings</h5>
                                    <div className="chart_sec_data">
                                        <ThirdXyData />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePageCom;