import "./Home.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';



function Home( {errors, setErrors, properties, selectedPlace, setSelectedPlace}){


    function handlePlaceSelection(e){

        console.log(e)

    }


    // renders markers and their popups on the map
    function renderMarkers(){
        // console.log(markers)
        return properties.map(property  =>{
            // console.log(property)
            return (<Marker key = {property.place_id} 
                    position={[property.lat, property.lon]}
                    >
                        <Popup id= {property.formatted} >
                        {property.formatted}<br/>

                        <Link to={`/survey_responses/${property.placeName}`} property={property}>Survey Responses for this place</Link>
                        </Popup>
                    </Marker>)
            })
    }
    


    return(
    <div className="home">
        <h2>Click on a map marker to see all users' survey results for that place</h2>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} className = "map">
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