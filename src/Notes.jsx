import React,{ Component } from 'react';
import Header from './Header';
import MiniHeader from './MiniHeader';
import PatientCard from './PatientCard';
import RichTextEditor from 'react-rte';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Notes extends Component{
    //console.log(props);
    //private template: string = `<p>The rich text editor is WYSIWYG ("what you see is what you get") </p>`;
    constructor(props){
        super(props);
        this.fooFunc=this.fooFunc.bind(this);
        this.fooFunc1=this.fooFunc1.bind(this);
        //console.log(this);
    }
    state = {
        value: RichTextEditor.createValueFromString("<p>Hey "+this.props.location.state.name.pname.name+",<br/><br/>I hope you are feeling okay. Jacinta will meet you by reception. Have a great weekend.<br/><br/>-Sophie</p>",'html'),
        value1: RichTextEditor.createValueFromString("<p>Patient needs a cannula fitted<br/><br/>-Sophie</p>",'html'),
        prevalue: "<p>Hey "+this.props.location.state.name.pname.name+",<br/><br/>I hope you are feeling okay. Jacinta will meet you by reception. Have a great weekend.<br/><br/>-Sophie</p>",
        prevalue1: "<p>Patient needs a cannula fitted<br/><br/>-Sophie</p>"
        }
    componentWillReceiveProps (newProps) {
    if (newProps.value != this.state.prevalue) {
      this.setState({
        value: RichTextEditor.createValueFromString(newProps.value, 'html'),
        prevalue: newProps.value
      });
    }
    if (newProps.value != this.state.prevalue1) {
      this.setState({
        value1: RichTextEditor.createValueFromString(newProps.value, 'html'),
        prevalue1: newProps.value
      });
    }
  }
    fooFunc(value){
        this.setState({value,prevalue: value.toString('html')},()=>{
            if(this.props.onChange)
                this.props.onChange(this.state.prevalue);
        });
    }
    fooFunc1(value1){
        this.setState({value1,prevalue1: value1.toString('html')},()=>{
            if(this.props.onChange)
                this.props.onChange(this.state.prevalue1);
        });
    }
    render(){
        console.log(this.state.value);
    var pname=this.props.location.state.name.pname;
    var date=this.props.location.state.information.getDate();
    var months=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
    var suffix="th";
    if(date%10===1){
        suffix="st";
    }
    else if(date%10===2){
        suffix="nd";
    }
    else if(suffix%10===3){
        suffix="rd";
    }
    var info=" "+date+suffix+" "+months[this.props.location.state.information.getMonth()]+" / "+this.props.location.state.time;
    return(
        <div>
            <Header />
            <MiniHeader name={pname} info={info}/>
            <div className="page">
                <div style={{width: '50%',textAlign:"left"}}>
                    <b>Notes</b>
                    <br/><br/>Notes to patient:<br/><br/>
                </div>
                <div style={{width: '50%'}}>
                    <PatientCard name={pname}/>
                </div>
            </div>
            <div style={{width:"50%",marginLeft:"5%"}}>
                <RichTextEditor value={this.state.value} onChange={this.fooFunc} />
            </div>
            <div style={{width:"50%",marginLeft:"5%"}}>
                <div style={{marginRight:"83%"}}><br/><br/>Notes to team:<br/><br/></div>
                <RichTextEditor value={this.state.value1} onChange={this.fooFunc1} />
            </div>
            <Button component={Link} to={{pathname: "/confirmation",
            state: {
                    name: {pname},
                    information: this.props.location.state.information,
                    time: this.props.location.state.time,
                    suffix: suffix,
                    hospital: this.props.location.state.hospital,
                    pval: this.state.value._cache.html,
                    tval: this.state.value1._cache.html
            }
            }} style={{marginRight:"80%",width:"15%",marginTop:"5%"}} //onClick={console.log(this.state.value)}
            >Next</Button><br/><br/>
        </div>
    );
    }
}

export default Notes;