
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

function MapComponent(props){
    return(
        
        <Map
        style={{
            height:'600px',
            width:'850px',  
            // position: 'right',
                   
            
        }}
            google={props.google}
            zoom={10}
            initialCenter={{lat:43.0313, lng:-88.0410}}
            >
                <Marker position={{lat:43.077690, lng:-88.067322}}></Marker>
                <Marker position={{lat:42.951480, lng:-87.999170}}></Marker>
                <Marker position={{lat:43.035280, lng:-88.107480}}></Marker>


        </Map>
    )
}


export default GoogleApiWrapper({
    apiKey : 'AIzaSyCu8MBgrDWN_kh5WIL1sTmura5i1v-mdOE'
})(MapComponent)