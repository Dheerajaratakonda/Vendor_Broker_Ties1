import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import NavBar1 from '../admin welcome/navbar.jsx';
import BVTable from './broker_vendor_table.jsx';

class VendorBroker extends React.Component{
	constructor(props){
		super(props);
		console.log("bv report",this.props);
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
		this.state={brokerData:{brokerName:'',brokerCode:'',brokerNumber:'',mailId:''},vendor:{vendorNumber:''},opco:{opcoId:''}};
	}
	
	componentWillMount(){
		if(this.group=="user"){
			 this.state.brokerData.brokerNumber=this.props.location.state.brokerNumber;
			 this.state.brokerData.brokerCode=this.props.location.state.brokerCode;
			 this.state.brokerData.brokerName=this.props.location.state.brokerName;
			 this.state.brokerData.mailId=this.props.location.state.mailId;
			 this.setState({brokerData:this.state.brokerData})
			 console.log("nav broker data",this.state.brokerData);
		}else if (this.group=="viewer"){
			this.state.vendor.vendorNumber=this.props.location.state.vendorNumber;
			this.setState({vendor:this.state.vendor})
		}else if (this.group=="opcoviewer"){
			this.state.opco.opcoId=this.props.location.state.opcoId;
			this.setState({opco:this.state.opco})
		}
	}
	

  

	render(){
		return 	<div className="container-fluid">
					<NavBar1 name={this.name} group={this.group} brokerNumber={this.state.brokerData.brokerNumber} brokerCode={this.state.brokerData.brokerCode} brokerName={this.state.brokerData.brokerName} mailId={this.state.brokerData.mailId} vendorNumber={this.state.vendor.vendorNumber} opcoId={this.state.opco.opcoId} /> <br/><br/><br/>
					<h3 className="headings" style={{textAlign:"left"}}>Broker-Vendor Tie Report</h3>
					<div> <BVTable /> </div>
					
					
				</div>
	
}

}
export default VendorBroker;