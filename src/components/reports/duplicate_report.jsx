import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import NavBar1 from '../admin welcome/navbar.jsx';
import DRTable from './duplicate_report_table.jsx';

class DuplicateReport extends React.Component{
	constructor(props){
		super(props);
		console.log("duplicate",this.props);
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
	}
	

  

	render(){
		return 	<div className="container-fluid">
					<NavBar1 name={this.name} group={this.group}/> <br/><br/><br/>
					<h3 className="headings" style={{textAlign:"left"}}>Duplicate Broker-Vendor Tie Report</h3>
					<div> <DRTable /> </div>
					
					
				</div>
	
}

}
export default DuplicateReport;