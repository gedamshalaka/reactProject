import React,{ Component } from 'react';
import Header from './Header';
import MiniHeader from './MiniHeader';

class FinalPage extends Component{
    render(){
        var pname=this.props.location.state.name.pname;
        //console.log(this.props.location.state.day);
        return (
            <div>
                <Header />
                <div style={{backgroundColor: "lightblue",marginLeft:"15%",marginRight:"15%",marginTop:"5%",borderRadius:"5px"}}>
                    <br/><br/>Medical assessment booked<br/><br/>
                    <h3>{this.props.location.state.day}, {this.props.location.state.month} {this.props.location.state.information.getDate()}{this.props.location.state.suffix} @ {this.props.location.state.time},<br/>{this.props.location.state.hospital.hname}, {this.props.location.state.hospital.address}</h3>
                    <div style={{fontSize: "12px"}}><br/>Patient will be notified of the appointment<br/><br/><br/><br/></div>
                </div>
            </div>
        );
    }
}

export default FinalPage;