import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import NavBar1 from '../admin welcome/navbar.jsx';
import Unassigned from './unassigned_report.jsx';

class VendorBroker extends React.Component{
	constructor(props){
		super(props);
		console.log("unassigned",this.props.location);
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
		this.state={broker:{brokerCode:'',brokerNumber:'',brokerName:'',mailId:''}}
	}
	
	componentWillMount(){
		if (this.group=="user"){
			this.state.broker.brokerCode=this.props.location.state.brokerCode;
			this.state.broker.brokerName=this.props.location.state.brokerName;
			this.state.broker.brokerNumber=this.props.location.state.brokerNumber;
			this.state.broker.mailId=this.props.location.state.mailId;
			this.setState({broker:this.state.broker})
		}
	}
  

	render(){
		return 	<div className="container-fluid">
					<NavBar1 name={this.name} group={this.group}  brokerNumber={this.state.broker.brokerNumber} brokerCode={this.state.broker.brokerCode} brokerName={this.state.broker.brokerName} mailId={this.state.broker.mailId}/> <br/><br/><br/>
					
					<h3 className="headings" style={{textAlign:"left"}}>Unassigned and New Item Report</h3>
					<div> <Unassigned /> </div>
					
					
				</div>
	
}

}
export default VendorBroker;