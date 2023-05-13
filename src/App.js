import React from 'react'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Header from './Component/Header';
import StatisticsData from '../src/Pages/statistics/StatisticsData'
import Map from './Pages/Map';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DataLodges from './Pages/DataRecordLodges/DataLodges';
import DataSharingCom from './Pages/DataSharing/DataSharingCom';
import GrandLodgeData from './Pages/GrandLodgePageData/GrandLodgeData';
import Footer from './Component/Footer';
const App = () => {
  return (
    <div className='fragment'>
      <BrowserRouter>
      <Header />
        <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/grandlodge" element={ <GrandLodgeData /> } />
         <Route path="/members" element={ <About /> } />
         <Route path="/service" element={ <Service /> } />
         <Route path="/contact" element={ <Contact /> } />
         <Route path="/statistics" element={ <StatisticsData /> } />
         <Route path="/map" element={ <Map /> } />
         <Route path="/lodges" element={<DataLodges />} />
         <Route path="/datasharing" element={<DataSharingCom />} />
        </Routes>
      <Footer />
      </BrowserRouter>
        
        
    </div>
  );
};

export default App