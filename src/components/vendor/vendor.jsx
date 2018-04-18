import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';

import NavBar1 from '../admin welcome/navbar.jsx';
import VendorFilters from './vendorfilters.jsx';

class Vendor extends React.Component{
	constructor(props){
		super(props);
		this.state={data: {	code:this.props.location.state.vendorNumber, 
							name: this.props.location.state.data, 
							startdate:'', 
							enddate:''
					}};
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
		this.setEmpState = this.setEmpState.bind(this)
	}
	
	
	setEmpState(e){
			var field = e.target.name;
			var value = e.target.value;
			this.state.data[field] = value;
			this.setState({ data: this.state.data, value: event.target.value });
    }
			  
			  

	render(){
		console.log("v",this.state);
		return 	<div className="container-fluid">
					<NavBar1 name={this.name} group={this.group} vendorNumber={this.state.data.code}/><br/><br/><br/><br/>
					
					<div className="vms" style={{fontWeight:"bold"}}><span>{this.state.data.code} </span><span>{this.name}</span>
							</div><br/>
							
					<form className="form-horizontal">
					
					
					<div className="row tab" style={{align:"center"}}>
						
						<div><VendorFilters vendorNumber={this.state.data.code}/></div>
						
					</div>				
			</form>	
			</div>
	
}

}
export default Vendor;