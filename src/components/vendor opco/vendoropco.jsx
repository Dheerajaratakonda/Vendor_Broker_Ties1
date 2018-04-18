import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';

import NavBar1 from '../admin welcome/navbar.jsx';
import VendorOpcoFilters from './vendoropcofilters.jsx';
import Item from '../broker vendor/item.jsx'


class VendorOpco extends React.Component{
	constructor(props){
		super(props);
		console.log("opco props",this.props);
		this.state={data: {	code:this.props.location.state.opcoId, 
							name: this.props.location.state.data
					}};
		console.log(this.props.location.state.opcoId);
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
		this.setEmpState = this.setEmpState.bind(this)
	}
	
	
	setEmpState(e){
			var field = e.target.name;
			var value = e.target.value;
			this.state.data[field] = value;
			this.setState({ data: this.state.data, value: event.target.value });
            this.state = {value: 'coconut'};
    }
			  
			  

	render(){
		return 	<div className="container-fluid">
					<NavBar1 name={this.name} group={this.group} opcoId={this.state.data.code}/><br/><br/><br/><br/>
					
				
					<div className="oms" style={{fontWeight:"bold"}}><span>{this.state.data.code}  </span><span>{this.name}</span></div>
					
					<br/>
					<div className="row tab" style={{align:"center"}}>
						
						<div><VendorOpcoFilters opcoId={this.state.data.code}/></div>
						
					</div>	
			
			</div>
	
}

}
export default VendorOpco;