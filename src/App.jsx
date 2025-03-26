import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AttributionControl, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'


//DUDEEE WHY DOESNT IT SHOWWW
//IT SHOWS BUT NOT CORRECTLYY NICEEE!
//I SWEAR TO GOD NOTHING WANT TO WORK FOR ME TODAY
//FINALYYY
function App() {
  const [coor, setCoor] = useState([]);

  fetch('https://konkursas.kitm.lt/backend/1368990/api/v1/places')
    .then(res => res.json)
    .then(data => data.data)
    .catch(err => console.log(err))


  return (
    <div style={{ height: '100vh', width: '100%', position: 'absolute', top: '25%', left: '0'}}>
      <MapContainer center={[55, 23]} zoom={13} >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={[55,23]}>
            <Popup></Popup>
          </Marker>
      </MapContainer>
    </div>
  )
}

export default App
