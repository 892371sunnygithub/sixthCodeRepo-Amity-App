import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import L from 'leaflet';
import marker from '../assets/two_marker.png';
import LodgeListingData from './Lodges/LodgeListingData';
import { copiriAxiosPost } from '../Component/api/api';
import { dec } from '../gibberish-aes';

// without color rendered map

// const myIcon = new L.Icon({
//   iconUrl: marker,
//   iconRetinaUrl: marker,
//   popupAnchor:  [-0, -0],
//   iconSize: [32,45],  

// });

const myCustomColour = 'orange'

const markerHtmlStyles = `
  background-color: ${myCustomColour};
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF;
   
  `

const icon = L.divIcon({
  className: "my-custom-pin",
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStyles}" />`
})
const Map = () => {
 const [LatName, setLatName]= useState();
 const [LatData, setLatData]= useState();
 const [LongData, setLongData]= useState();
 
  // console.log(LatName, LatData, LongData);
  // const position = [51.505, -0.09]
    const GetApiData = () => {
    const formdata = new FormData();
    formdata.append('action', 'map_data');
      
    copiriAxiosPost('https://dev.portal.amity.copiri.com/', formdata).then((response) => {
      // console.log(response.data.data);
      
      const map_data = JSON.parse(
        dec(
          response.data.data.slice(parseInt(response.data.data.slice(0, 2)) + 2),   // Data
          response.data.data.slice(2, parseInt(response.data.data.slice(0, 2)) + 2) // Key
        )
      );

      map_data.map((item)=>{
        const{name, latitude, longitude}=item;
        setLatName(name);
        setLatData(latitude);
        setLongData(longitude);
      });
      
    }).catch((error) => {
      console.log('Error is', error);
    });
  }
  



  useEffect(() => {
    GetApiData();
  }, []);

  return (
    <>
    
      <div className='pt-4 pb-5'>
        <h1 className='p-3 bg-primary text-white text-uppercase'>dummy Leaflet Map</h1>
        { 
          LatData && LongData && 
        <MapContainer center={[LatData,LongData]} zoom={13} scrollWheelZoom={false} style={{ height: 500, width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[LatData, LongData]} icon={icon} >
            <Popup>
               {[LatName]}
            </Popup>
          </Marker>
        </MapContainer>
        }
      </div>
      <LodgeListingData />
         
    </>
  )
}

export default Map;

