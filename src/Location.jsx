import React from 'react';
import Header from './Header';
import MiniHeader from './MiniHeader';
import PatientCard from './PatientCard';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MapView from './MapView';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const Hospitals = [
        {
            id: 0,
            unqkey: "key0",
            hname: "Hospital1",
            address: "Address 1 ,XYZ",
            lat: 40.756795,
            lng: -73.954298
        },
        {
            id: 1,
            unqkey: "key1",
            hname: "Hospital2",
            address: "Address 2 ,PQR",
            lat: 21.145800,
            lng: 79.088158
        },
        {
            id: 2,
            unqkey: "key2",
            hname: "Hospital3",
            address: "Address 3 ,ABC",
            lat: 12.971599,
            lng: 77.594566
        }
    ];

const Location = (props) => {
    //console.log(props);
    var pname=props.location.state.name;
    var idx=Hospitals[0];//.find((e)=>e.unqkey===props.location.state.idx);
    let dummy = {
        value: Hospitals[0].unqkey
    }
    if(!props.location.state.idx)
        props.location.state.idx=Hospitals[0];
    const [value, setValue] = React.useState(dummy);
    return (
        <div>
            <Header />
            <MiniHeader name={pname}/>
            <div className="page">
                <div style={{width: '50%'}}>
                    <div className="alignleft">Appointment Location</div>
                    <br/><div className="alignleft" style={{fontSize: '10px'}}>Let {pname.name} know where their appointment is</div>
                    <br/><br/>
                    <div className="alignleft">
                        <RadioGroup name="hsptl" value={value.value}>
                        {Hospitals.map(hospital => (
                            <div key={hospital.id}>
                                <br/>
                                <FormControlLabel value={Hospitals[hospital.id].unqkey} control={<Radio color="primary" />} label={
                                <div>
                                <b>{hospital.hname}</b><br/>
                                {hospital.address}
                                <br/></div>
                                } 
                                onClick={(event)=>{
                                    idx=Hospitals.find((e)=>e.unqkey===event.target.value);
                                    props.location.state.idx=idx;
                                    setValue({value: event.target.value});
                                    }}
                                />
                                
                            </div>
                        ))}
                        </RadioGroup>
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <PatientCard name={pname}/>
                    <br/>
                    <MapView hsptl={props.location.state.idx}/>
                </div>
            </div>
            <br/>
            <Button component={Link} to={{pathname: '/appointment',
  state: {
    name: {pname},
    hospital: props.location.state.idx
  }}} style={{marginRight:"80%",width:"15%"}}>Next</Button><br/><br/>
        </div>
    );
}

export default Location;