import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ItemTable from '../item/itemTable.jsx'

const createItemTable = (onUpdate, props) => (<div><h1>ghrt</h1><ItemTable onUpdate={ onUpdate } {...props}/></div>);

export default class VendorOpcoFilters extends React.Component {
	constructor(props){
		super(props);
		this.state={opcoId:this.props.opcoId,products:[]};
	}
	
	componentWillMount(){
		var comp=this;
		
		var param={
			"opcoId":this.state.opcoId
		}
		console.log("hi",this.state.opcoId);
		$.ajax({
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
		   'type': 'POST',
			'url': 'http://localhost:8015/vendorBrokerTie/Opco',
			'contentType': 'application/json',
			'dataType': 'json',
		   'data': JSON.stringify(param),
		})
		.done(function(data) {
			console.log("bd",data.rows);
			for (var el in data.rows){
				comp.state.products.push({
					"vendorNumber":data.rows[el].vendorNumber,
					"vendorName":data.rows[el].vendorName,
					"brokerCode":data.rows[el].brokerCode,
					"market":data.rows[el].market,
					"itemId":data.rows[el].item_Id,
					"itemDescr":data.rows[el].itemDescr,
					"startDate":data.rows[el].startDate.slice(0,10),
					"endDate":data.rows[el].endDate.slice(0,10)
				})
			}
			comp.setState({products:comp.state.products})
			console.log("products",comp.state.products);
		})
		.fail(function(jqXhr) {
			console.log('failed to register');
		});
	}
	
	render() {
		
		const cellEditProp = {
		  mode: 'click'
		};
		const options={
		   sizePerPage:8
	   } 
		return (
			
		  <BootstrapTable ref='table' data={ this.state.products } pagination cellEdit={ cellEditProp } options={options} >
			<TableHeaderColumn ref="vendorNumber" dataField='vendorNumber' isKey={ true } dataSort={ true }  filter={ { type: 'TextFilter'}} editable={false}>Vendor No
			</TableHeaderColumn>
			<TableHeaderColumn ref='vendorName' dataField='vendorName' dataSort={ true } filter={ { type: 'TextFilter'} } editable={false} >Vendor Name</TableHeaderColumn>
			<TableHeaderColumn ref='brokerCode' dataField='brokerCode' dataSort={ true } filter={ { type: 'TextFilter' } } editable={false}>Broker</TableHeaderColumn>
			<TableHeaderColumn ref='market' dataField='market' dataSort={ true } filter={ { type: 'TextFilter' } } editable={false}>Market</TableHeaderColumn>
			<TableHeaderColumn ref='itemId' dataField='itemId' dataSort={ true } filter={ { type: 'TextFilter' } } customEditor={ { getElement:createItemTable} }>Item</TableHeaderColumn>
			<TableHeaderColumn ref='itemDescr' dataField='itemDescr' filter={ { type: 'TextFilter' } } dataSort={ true } customEditor={ { getElement:createItemTable} }>Item descripton</TableHeaderColumn>
			<TableHeaderColumn ref='startDate' dataField='startDate' filter={ { type: 'TextFilter' } } dataSort={ true } editable={false}>Start date</TableHeaderColumn>
			<TableHeaderColumn ref='endDate' dataField='endDate' filter={ { type: 'TextFilter' } } dataSort={ true } editable={false}>End date</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}
