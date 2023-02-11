import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Home.css';
import {  MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const API_KEY = '4OVsYnRo7iOcJ8D';

const markerIcon = new L.Icon({
  iconUrl : require("../../assets/map.png"),
  iconSize : [35 , 35],
  iconAnchor:[17,45],
  popupAnchor:[0,-40]
})

const Home = ({ip}) => {


  const [location, setLocation] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  // const [lines, setLines] = useState();
  

  const mapRef = useRef();

  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://pro.ip-api.com/json/${ip}?key=${API_KEY}`);
      setLocation(response.data);
      setLatitude(response.data.lat);
      setLongitude(response.data.lon);
    }
    fetchData();
  }, [ip]);




console.log(latitude,longitude,location)

  return (
    <div >
      <div className="items">
      <MapContainer center={[latitude, longitude]} zoom={5} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={markerIcon}>
          <Popup>
            {location.city}, {location.regionName}, {location.country}
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      
      <div className='details'>

      <p>IP: {ip}</p>
      <p>query: {location.query}</p>
      <p>status: {location.status}</p>
      <p>continent: {location.continent}</p>
      <p>country: {location.country}</p>
      <p>countryCode: {location.countryCode}</p>
      <p>region: {location.region}</p>
      <p>regionName: {location.regionName}</p>
      <p>city: {location.city}</p>
      <p>district: {location.district}</p>
      <p>Postal Code: {location.zip}</p>
      <p>lat: {location.lat}</p>
      <p>lon: {location.lon}</p>
      <p>Time Zone: {location.timezone}</p>
      <p>isp: {location.isp}</p>
      <p>org: {location.org}</p>
      <p>as: {location.as}</p>

      </div>
    </div>
  );
};

export default Home;