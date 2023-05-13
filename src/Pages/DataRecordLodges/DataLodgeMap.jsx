import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet'
import L from 'leaflet';
import marker from '../../assets/two_marker.png';
import { copiriAxiosPost } from '../../Component/api/api';
const myCustomColour = 'blue'

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

const DataLodgeMap = () => {
    // const[mapData, setMapData]= useState();
    const [lat,setLat] = useState('');
    const [long,setLong] = useState('');
    
    // console.log('map data is', mapData);
    // const position = [51.505, -0.09]
    
    const GetLodgeApiData=()=>{
        const formdata= new FormData();
        formdata.append('action', 'load_address');
        
        copiriAxiosPost('https://dev.portal.amity.copiri.com/', formdata).then((response)=>{
            
            setLat(response.data.address.latitude);
            setLong(response.data.address.longitude);
            // setMapData(response.data);
        }).catch((error)=>{
            console.log('Error is', error);
        });
    };

    useEffect(()=>{
        GetLodgeApiData();
    }, []);
    // console.log(lat);
    // console.log(long);
    return (
        // <div>DataLodgeMap</div>
        
        <>
        {
            lat && long &&
            <MapContainer center={[lat,long]} zoom={13} scrollWheelZoom={false} style={{ height: 500, width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat,long]} icon={icon} >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        }
        </>
    )
}

export default DataLodgeMap