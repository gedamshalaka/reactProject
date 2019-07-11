import React,{ Component } from 'react';

class MiniHeader extends Component{
    /*props: {
        name: string;
    };*/
    render(){
        var prt;
        if(this.props.info){
            prt=" : "+this.props.info;
        }
        else{
            prt="";
        }
        return(
            <div style={{width:'100%'}}>
                <br/><br/>
                <div className="calendar-text" style={{fontSize:'10px'}}>
                STUDY NAME</div>
                <br/>
                <div className="calendar-text" style={{fontSize:'15px'}}><b>
                {this.props.name.name.toUpperCase()} MEDICAL ASSESSMENT{prt}
                </b></div>
                <br/>
                <hr/>
            </div>
        );
    }
}

export default MiniHeader;