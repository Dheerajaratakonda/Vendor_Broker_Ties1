import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import NavBar1 from '../admin welcome/navbar.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const  data1=[
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5671", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5672", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5673", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5674", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5675", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5676", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5677", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5678", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5679", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5670", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5617", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5627", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"}
];

class AuditLogs extends React.Component{
	
	constructor(props){
		super(props)
		this.state={brokerData:{brokerName:'',brokerCode:'',brokerNumber:'',mailId:''},vendor:{vendorNumber:''},opco:{opcoId:''}};
		
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
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
		const options={
			sizePerPage:8
		}
		
		return 	<div>
						
					<NavBar1 name={this.name} group={this.group} brokerNumber={this.state.brokerData.brokerNumber} brokerCode={this.state.brokerData.brokerCode} brokerName={this.state.brokerData.brokerName} mailId={this.state.brokerData.mailId} vendorNumber={this.state.vendor.vendorNumber} opcoId={this.state.opco.opcoId} /> <br/><br/><br/>
					<br/>
					
					<div className="row tab">
						<h3 className="headings" style={{textAlign:"left"}}>Audit Logs</h3>
						<BootstrapTable ref='table' data={data1} options={options} pagination>					   
								<TableHeaderColumn ref='broker' dataField='broker' isKey={ true }dataSort={ true } filter={ { type: 'TextFilter'} } >Opco Id</TableHeaderColumn>
							
								<TableHeaderColumn ref='vendor_no' dataField='vendor_no' dataSort={ true } filter={ { type: 'TextFilter'} } >Item Id</TableHeaderColumn>
							
								<TableHeaderColumn ref='market' dataField='market' dataSort={ true } filter={ { type: 'TextFilter' } }>Vendor</TableHeaderColumn>
							
								<TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } }>Broker Name</TableHeaderColumn>
							
								<TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } }>Broker Code</TableHeaderColumn>
							
								<TableHeaderColumn ref='item' dataField='item' dataSort={ true } filter={ { type: 'TextFilter' } }>User Id</TableHeaderColumn>
							
								<TableHeaderColumn dataField='idesc'  dataSort={ true }  filter={ { type: 'TextFilter'}}>Creation Date</TableHeaderColumn>
							
								<TableHeaderColumn ref='sdate' dataField='sdate' dataSort={ true } filter={ { type: 'TextFilter' }}>Modification Date</TableHeaderColumn>
							
								<TableHeaderColumn ref='edate' dataField='edate' dataSort={ true } filter={ { type: 'TextFilter' }}>Type of Audits</TableHeaderColumn>
							
						</BootstrapTable>								
					</div>			
				</div>
	}
}
export default AuditLogs;