import "./Home.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from "react"


function Home( errors, setErrors){
    
    const[mapMarkers, setMapMarkers] = useState([])

    
    function renderMarkers (){

            fetch(`/places`)
            .then(res => {
                if(res.ok){
                    res.json().then(places => {

                    })
                } 
                else{
                    res.json().then(data => setErrors(data.error))
                }
            })


    }
    
    return(
    <div>
        <MapContainer center={[40.712778, -74.006111]} zoom={4} scrollWheelZoom={true} className = "map">
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={[40.712778, -74.006111]}>

        </Marker>
        </MapContainer>
    </div>
    )
}

export default Home