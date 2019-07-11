import React,{ Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Welcome.css';
import Patient from './Patient';
import Header from './Header';
//import { Redirect } from 'react-router-dom';
//import Location from './Location';
//import { Link } from 'react-router-dom';

var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

export const Patients=[
    {
        name:"Patient 1",
        contact:"012345678",
        email:"pat1@gmail.com",
        from:new Date(2019, 6, 12, 15, 24),
        to:new Date(2019, 6, 20, 15, 24)
    },
    {
        name:"Patient 2",
        contact:"65765789",
        email:"pat2@gmail.com",
        from:new Date(2019, 6, 15, 15, 24),
        to:new Date(2019, 6, 25, 15, 24)
    },
    {
        name:"Patient 3",
        contact:"75764876980",
        email:"pat3@gmail.com",
        from:new Date(2019, 6, 12, 15, 24),
        to:new Date(2019, 6, 25, 15, 24)
    }
];

class Welcome extends Component{
    render(){
        var today = new Date();
        console.log(today);
        var dispday = days[today.getDay()];
        var suffix;
        if(today.getDate()%10===1){
            suffix="st";
        }
        else if(today.getDate()%10===2){
            suffix="nd";
        }
        else if(today.getDate()%10===3){
            suffix="rd";
        }
        else{
            suffix="th";
        }
        return(
        <div>
        <Header />
        <div className="container-card">
        <DayPicker selectedDays={today} className="calendar"/>
        <div className="patient-card">
        <br/><div className="date">{dispday} {today.getDate()}{suffix}</div><br/>
            <hr></hr><br/>
            {Patients.map(patient => <div className="patient"><Patient pname={patient} gotoDest={this.gotoDest}/></div>)}
        </div>
        </div>
        </div>
        );
    }
}

export default Welcome;