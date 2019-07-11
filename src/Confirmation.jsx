import React,{ Component } from 'react';
import Header from './Header';
import MiniHeader from './MiniHeader';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Confirmation extends Component{
    render(){
        var pname=this.props.location.state.name.pname;
        var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
        var months=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
        //console.log(pname);
        //console.log({pname});
        return(
            <div>
                <Header />
                <MiniHeader name={pname}/>
                <div style={{textAlign: "left",marginLeft:"2%"}}><br/><b>Confirm and send to patient<br/></b><br/></div>
                <div style={{backgroundColor: "lightblue",borderRadius: "5px",marginLeft:"2%",marginRight:"2%"}}>
                    <div className="page" style={{marginTop:"2%",marginBottom: "2%"}}>
                        <div style={{width:"30%"}}><b>DATE/TIME</b></div>
                        <div style={{width:"50%",textAlign:"left"}}>{days[this.props.location.state.information.getDay()]} , {months[this.props.location.state.information.getMonth()]} {this.props.location.state.information.getDate()}{this.props.location.state.suffix}<br/>{this.props.location.state.time}</div>
                        <div style={{width:"20%",textAlign:"right"}}><Link to={{pathname: '/appointment',
                        state: { name: {pname}, hospital: this.props.location.state.hospital }}}>edit</Link></div>
                    </div>
                    <div className="page" style={{marginTop:"2%",marginBottom: "2%"}}>
                        <div style={{width:"30%"}}><b>LOCATION</b></div>
                        <div style={{width:"50%",textAlign:"left"}}>{this.props.location.state.hospital.address}</div>
                        <div style={{width:"20%",textAlign:"right"}}><Link to={{pathname: '/location',
                        state: { name: pname }}}>edit</Link></div>
                    </div>
                    <div className="page" style={{marginTop:"2%",marginBottom: "2%"}}>
                        <div style={{width:"30%"}}><b>NOTES</b></div>
                        <div style={{width:"50%",textAlign:"left"}}><b>To patient:</b> <div dangerouslySetInnerHTML={{ __html: this.props.location.state.pval}} /><b>To team:</b> <div dangerouslySetInnerHTML={{ __html: this.props.location.state.tval}} /></div>
                        <div style={{width:"20%",textAlign:"right"}}><Link to={{pathname: '/notes',
                        state: {
                            name: this.props.location.state.name,
                            information: this.props.location.state.information,
                            time: this.props.location.state.time,
                            hospital: this.props.location.state.hospital                 
                        }}}>edit</Link></div>
                    </div>
                </div>
                <Button component={Link} to={{pathname: "/final",
                state: {name: {pname},
                information: this.props.location.state.information,
                time: this.props.location.state.time,
                hospital: this.props.location.state.hospital,
                day: days[this.props.location.state.information.getDay()],
                month: months[this.props.location.state.information.getMonth()],
                suffix: this.props.location.state.suffix
                }}} style={{marginRight:"70%",width:"25%"}}>Confirm Appointment</Button><br/><br/>
            </div>
        );
    }
}

export default Confirmation;