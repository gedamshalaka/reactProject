import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
        this.gotoDestination=this.gotoDestination.bind(this);
    }
    gotoDestination(){
        var uname=this.inputRef.value;
        var pword=this.passRef.value;
        console.log(uname);
        if(uname==="admin"&&pword==="password"){
           this.props.history.push('/welcome');
        }
        else{
            alert("Invalid username or password");
        }
    }
    render(){
        return(
            <div className="login-card">
                <h3>Login</h3>
                <form onSubmit={this.gotoDestination}>
                <TextField variant="outlined" margin="normal" required name="username" label="Username" type="text" id="username" inputRef={ref => { this.inputRef = ref; }} />
                <br/><br/>
                <TextField variant="outlined" margin="normal" required name="password" label="Password" type="password" id="password" inputRef={ref => { this.passRef = ref; }} />
                <br/><br/>
                <Button type="submit" color="primary">Login</Button>
                <br/><br/>                
                </form>
                
            </div>
        );
    }
}
export default Login;