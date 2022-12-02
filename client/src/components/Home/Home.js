import "./Home.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from "react"


function Home( errors, setErrors){
    
    const[places, setPlaces] = useState([])

    

    useEffect(() => {
        fetch(`/places`)
        .then(res => {
            if(res.ok){
                res.json().then(placeData => {
                setPlaces(placeData)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])
console.log(places)

    // converts place names into map coordinates
    function geocoder(placeName){

        var requestOptions = {
            method: 'GET',
        };
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${placeName}&apiKey=b9046482415f4e0fa5e8c76b2cd307ae`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            console.log(result.features[0].geometry.coordinates[0])
            console.log(result.features[0].geometry.coordinates[1])
            
        })
        .catch(error => console.log('error', error));
    }
    

geocoder("Seattle")

    
    

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