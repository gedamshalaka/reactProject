import React,{ Component , Fragment } from 'react';
import { GoogleMap, Marker,withScriptjs,withGoogleMap } from "react-google-maps";
//import withScriptjs from 'react-google-maps/lib/withScriptjs';

class MapView extends Component{
    render(){
        /*CMap = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.children}
        </GoogleMap>
      ));*/
      const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: this.props.hsptl.lat, lng: this.props.hsptl.lng } }
        defaultZoom = { 15 }
      >
        <Marker
            position={{ lat: this.props.hsptl.lat, lng: this.props.hsptl.lng }}
        />  
      </GoogleMap>
   ));
        return(
            <div className="map">
                <div style={{width:'50%',marginTop: "20%"}}>
                    <h3>{this.props.hsptl.hname}</h3>
                    {this.props.hsptl.address}
                </div>
                <div style={{width:'50%'}}>
                    <GoogleMapExample
                    containerElement={ <div style={{ height: `300px`, width: '300px' }} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                    />
                </div>
            </div>
        );
    }
}

export default MapView;