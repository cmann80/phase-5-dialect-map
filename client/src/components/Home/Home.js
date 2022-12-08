import "./Home.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Link } from 'react-router-dom';


function Home( {properties}){




    // renders markers and their popups on the map
    function renderMarkers(){

        return properties.map(property  =>{
            // console.log(property)
            return (<Marker key = {property.place_id} 
                    position={[property.lat, property.lon]}
                    alt={property.formatted}
                    title={property.formatted}


                    >
                        <Popup >
                        {property.placeName}<br/>

                        <Link to={`/survey_responses/${property.placeName}`} property={property}>Survey Responses for this place</Link>
                        </Popup>
                    </Marker>)
            })
    }
    


    return(
    <div className="home">
        <h2>Click on a map marker to see all users' survey results for that place, or sign up/login to add your own markers</h2>
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