import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';
//import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Patient extends Component{
    constructor(props){
        super(props);
        this.gotoDest=this.gotoDest.bind(this);
    }
    gotoDest(name) {
            //alert(name);
            //return <Redirect to='/location' />
            this.props.history.push('/location',{name: name});
        }
    render(){
        return(
            <div>
            <form>
            <div className="calendar-text">{this.props.pname.name}</div><Button style={{float:"right",backgroundColor:"rgb(238,188, 122)",color:"white",margin:"1.2% 1% 0% 0%"}} onClick={()=>this.gotoDest(this.props.pname)}>Book Visit</Button>
            <br/>
            <div className="calendar-text"><b>
            Range: {this.props.pname.from.getDate()}.{this.props.pname.from.getMonth()+1} - {this.props.pname.to.getDate()}.{this.props.pname.to.getMonth()+1}</b></div>
            </form>
            </div>
        );
    }
}

export default withRouter(Patient);