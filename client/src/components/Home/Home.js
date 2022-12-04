import "./Home.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from "react"


function Home( errors, setErrors){
    
    const[properties, setProperties] = useState([])
    

    // console.log(process.env.REACT_APP_GEOCODE_API_KEY)

    useEffect(() => {
        fetch(`/places`)
        .then(res => {
            if(res.ok){
                res.json().then(placeData => {
                    console.log(placeData)
                updateMarkers(placeData)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

    function updateMarkers(placeData){

        placeData.map(place => {
            geocoder(place.location)
        })
    }


    // // converts place names into map coordinates
    function geocoder(placeName){
        
        
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${placeName}&apiKey=${process.env.REACT_APP_GEOCODE_API_KEY}`)
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            setProperties((properties) => [...properties, result.features[0].properties])
        })

console.log(properties)

    }
    

    function renderMarkers(){
        
        // console.log(markers)
        return properties.map(property  =>{
            console.log(property)
            return (<Marker id = {property.city} position={[property.lat, property.lon]}>
                    <Popup>{property.formatted}</Popup>
                    </Marker>)
        })
    }
    


    return(
    <div>
        <MapContainer center={[40.712778, -74.006111]} zoom={4} scrollWheelZoom={true} className = "map">
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarkers()}
        </MapContainer>
    </div>
    )
}

export default Home