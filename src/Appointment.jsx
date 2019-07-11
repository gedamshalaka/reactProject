import React,{ Component } from 'react';
import Header from './Header';
import MiniHeader from './MiniHeader';
import PatientCard from './PatientCard';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import DayPicker from 'react-day-picker';
import './Appointment.css';

        var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        var months=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

class Appointment extends Component{
    constructor(props){
        super(props);
        this.state={flag: true,hrval: "",minval: "",pth: '/notes',day: this.props.location.state.name.pname.from,starttime: "9:00",ampm:"am"};
        this.actionFunction=this.actionFunction.bind(this);
        this.IfFlagfunc=this.IfFlagfunc.bind(this);
        this.hrChange=this.hrChange.bind(this);
        this.minChange=this.minChange.bind(this);
        this.dayClick=this.dayClick.bind(this);
        this.ampm=this.ampm.bind(this);
        this.startTime=this.startTime.bind(this);
        //console.log(this.props.location.state);
    }
    ampm(event){
        this.setState({ampm: event.target.value});
    }
    startTime(event){
        this.setState({starttime: event.target.value});
    }
    actionFunction(){
        //console.log("here");
        this.setState({flag:false});
        //alert(this.state.flag);
    }
    IfFlagfunc(){
    //console.log(this.state.flag);
        var timings = [];var ct=0;var hr=9;
        var min;
        for(var i=0;i<40;i++){
            if(ct*15===0){
                min="00";
            }
            else{
                min=(ct*15).toString();
            }
            var pushtime=hr.toString()+":"+min;
            timings.push(<MenuItem value={pushtime}>{pushtime}</MenuItem>);
            if(ct===3){
                ct=0;
                if(hr!==12){
                    hr++;
                }
                else{
                    hr=1;
                }
            }
            else{
                ct++;
            }
        }
        if(this.state.flag){//console.log("&&&&&&&&&");
            return (
                <div className="alignleft">Not Selected<br/>
                    <Button style={{width:"150%",backgroundColor:"cadetblue"}} onClick={this.actionFunction}>Pick date and time</Button>
                </div>
            );
        }
        else{
            var suffix="th";
            var today=new Date();
            if(this.state.day.getDate()%10===1){
                suffix="st";
            }
            else if(this.state.day.getDate()%10===2){
                suffix="nd";
            }
            else if(this.state.day.getDate()%10===3){
                suffix="rd";
            }
            //var d=new Date(this.props.location.state.name.pname.from);
            /*var bfr=d.setDate(d.getDate() - 1);*/
            //d.setDate(d.getDate()-1);//console.log(d);
            return (
                <div>
                    <div>{days[this.state.day.getDay()]}, {this.state.day.getDate()}{suffix} {months[this.state.day.getMonth()]} : {this.state.starttime}{this.state.ampm}<br/></div>
                    <DayPicker selectedDays={this.state.day} onDayClick={this.dayClick} 
                    disabledDays={[
                    today,
                    {
                        after: this.props.location.state.name.pname.to,
                        before: this.props.location.state.name.pname.from
                    }
                    ]}/>
                        <br/><Select value={this.state.starttime} onChange={this.startTime} input={<OutlinedInput name="mins" id="min-id" />}>
                            {timings}
                        </Select>
                        <Select value={this.state.ampm} onChange={this.ampm} input={<OutlinedInput name="mins" id="min-id" />} style={{marginLeft:"10px"}}>
                            <MenuItem value="am">AM</MenuItem>
                            <MenuItem value="pm">PM</MenuItem>
                        </Select>
                </div>
            );
        }
    }
    hrChange(event){
        this.setState({hrval: event.target.value});
    }
    minChange(event){
        this.setState({minval: event.target.value});
    }
    dayClick(cday){
        var d=new Date(this.props.location.state.name.pname.from);
            /*var bfr=d.setDate(d.getDate() - 1);*/
            d.setDate(d.getDate()-1);
        if(cday>d && cday<this.props.location.state.name.pname.to)
            this.setState({day: cday});
        if(cday===this.props.location.state.name.pname.from)
            alert("kufgehukf");
        //document.getElementById.
    }
    render(){
        //console.log(this);
        var hrmenu = [];
        for(var i=0;i<6;i++){
            hrmenu.push(<MenuItem value={i.toString()}>{i}</MenuItem>);
        }
        var minmenu = [];
        for(var j=0;j<4;j++){
            minmenu.push(<MenuItem value={(15*j).toString()}>{15*j}</MenuItem>);
        }
        var pname=this.props.location.state.name.pname;
        return(
        <div>
            <Header />
            <MiniHeader name={pname}/>
            <div className="page">
                <div style={{width: '50%'}}>
                    <div className="alignleft">Appointment Time
                    </div>
                        <br/><div className="alignleft" style={{fontSize: '10px',textAlign:"left"}}>Let {pname.name} know the date and time for the appointment. 
                        Be sure to check with them that this time is suitable.
                    </div>
                    <div style={{textAlign:"left",paddingTop:"5%"}}><h5>RANGE<br/></h5>
                        {pname.from.getDate()} {months[pname.from.getMonth()]} {pname.from.getFullYear()} - {pname.to.getDate()} {months[pname.to.getMonth()]} {pname.to.getFullYear()}
                    </div>
                    <div style={{textAlign:"left"}}><h5><br/>DATE AND TIME</h5>
                        <br/>{this.IfFlagfunc()}
                    <br/><br/>
                    </div>
                    <div style={{textAlign:"left"}}><h5><br/>APPOINTMENT LENGTH<br/></h5>
                        <div style={{display:"flex"}}>
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <InputLabel>HOURS</InputLabel>
                                <Select value={this.state.hrval} onChange={this.hrChange} input={<OutlinedInput name="hrs" id="hr-id" />}>
                                <MenuItem value=""><em></em></MenuItem>
                                {hrmenu}
                                </Select>
                            </div>
                            <div style={{display:"flex",flexDirection:"column",marginLeft:"30px"}}>
                                <InputLabel>MINUTES</InputLabel>
                                <Select value={this.state.minval} onChange={this.minChange} input={<OutlinedInput name="mins" id="min-id" />}>
                                <MenuItem value=""><em></em></MenuItem>
                                {minmenu}
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <PatientCard name={pname}/>
                    <br/>
                </div>
            </div><br/>
            <Button component={Link} to={{pathname: this.state.pth,
            state: {
                    name: {pname},
                    information: this.state.day,
                    time: this.state.starttime+this.state.ampm,
                    hospital: this.props.location.state.hospital                 
            }}} style={{marginRight:"80%",width:"15%"}}
            >Next</Button><br/><br/>
        </div>
        );
    }
}

export default Appointment;