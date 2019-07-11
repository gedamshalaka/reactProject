import React,{ Component } from 'react';
import logo from './logo.svg';

class PatientCard extends Component{
    /*props: {
        name: string;
    };*/
    render(){
        var contact="079283291738";
    var email="abcd@gmail.com";
    var tmp=this.props.name;
    //var tpat=patients[0];//patients.find(function (e) {return e.name==this.props.name});
//    console.log(this.props);
    return(
        <div className="mini-card">
            <div>
                <img src={logo} alt='profile' style={{height: '45px'}} />
            </div>
            <div>
                <h3 className="alignleft">{this.props.name.name.toUpperCase()}</h3>
                <br/><br/>
                <div className="alignleft" style={{marginLeft:"0%"}}>{this.props.name.contact}</div>
                <br/>
                <div className="alignleft">email: {this.props.name.email}</div>
            </div>
        </div>
    );}
}

export default PatientCard;