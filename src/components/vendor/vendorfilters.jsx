/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ItemTable from '../item/itemTable.jsx'

const createItemTable = (onUpdate, props) => (<div><h1>ghrt</h1><ItemTable onUpdate={ onUpdate } {...props}/></div>);

export default class VendorFilters extends React.Component {
	constructor(props){
		super(props);
		this.state={vendorNumber:this.props.vendorNumber,products:[]};
	}
	
	componentWillMount(){
		var comp=this;
		
		var param={
			"vendorNumber":this.state.vendorNumber
		}
		$.ajax({
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
		   'type': 'POST',
			'url': 'http://localhost:8015/vendorBrokerTie/Vendor',
			'contentType': 'application/json',
			'dataType': 'json',
		   'data': JSON.stringify(param),
		})
		.done(function(data) {
			console.log("bd",data);
			for (var el in data.rows){
				comp.state.products.push({
					"brokerCode":data.rows[el].brokerCode,
					"opcoName":data.rows[el].opcoName,
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
		
		return (
			<BootstrapTable ref='table' data={ this.state.products } pagination  cellEdit={ cellEditProp }>
				<TableHeaderColumn refs="brokerCode" dataField='brokerCode' dataSort={ true } isKey={ true }  filter={ { type: 'TextFilter'}} editable={false}>Broker
				</TableHeaderColumn>
				<TableHeaderColumn refs="opcoName" dataField='opcoName' dataSort={ true } filter={ { type: 'TextFilter'} } editable={false} >Opco</TableHeaderColumn>
				<TableHeaderColumn refs="market" dataField='market' dataSort={ true } filter={ { type: 'TextFilter' } } editable={false}>Market</TableHeaderColumn>
				<TableHeaderColumn refs="itemId" dataField='itemId' dataSort={ true } customEditor={ { getElement:createItemTable} } filter={ { type: 'TextFilter' } }>Item Id</TableHeaderColumn> 
				<TableHeaderColumn ref='itemDescr' dataField='itemDescr' filter={ { type: 'TextFilter' } } dataSort={ true } customEditor={ { getElement:createItemTable} }>Item descripton</TableHeaderColumn>
				<TableHeaderColumn ref='startDate' dataField='startDate' filter={ { type: 'TextFilter' } } dataSort={ true } editable={false}>Start date</TableHeaderColumn>
				<TableHeaderColumn ref='endDate' dataField='endDate' filter={ { type: 'TextFilter' } } dataSort={ true } editable={false}>End date</TableHeaderColumn>
			</BootstrapTable>
		);
	}  
}
