import "./Home.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


function Home(){
    return(
    <div>
        <MapContainer center={[39.7837304, -100.4458825]} zoom={4} scrollWheelZoom={true} className = "map">
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={[39.7837304, -100.4458825]}>

        </Marker>
        </MapContainer>
    </div>
    )
}

export default Home