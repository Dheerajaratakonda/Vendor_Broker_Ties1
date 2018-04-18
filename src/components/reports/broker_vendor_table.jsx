import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const data= {
     data1:[{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"}      
     ]
};
function addProducts() {
  for (let i = 0; i < data.data1.length ; i++) {
  products.push({
                  broker: data.data1[i].broker,
                  vendor_no:  data.data1[i].vendor_no,
                  market:  data.data1[i].market,
                  cmim:  data.data1[i].cmim,
				  item:    data.data1[i].item,
				  idesc: data.data1[i].idesc,
				  sdate: data.data1[i].sdate,
				  edate:data.data1[i].edate
				  
  })
  }
}
addProducts();

export default class Table2 extends React.Component {
  render() {
	   
	   const options={
		   exportCSVText: 'Download CSV',
		   sizePerPage:8
	   }
    return (
      <BootstrapTable ref='table' data={ products } pagination exportCSV options={options}  csvFileName='locations.csv'>
   
        <TableHeaderColumn ref='broker' dataField='broker' isKey={ true }dataSort={ true } filter={ { type: 'TextFilter'} } >Broker</TableHeaderColumn>
		
		<TableHeaderColumn ref='vendor_no' dataField='vendor_no' dataSort={ true } filter={ { type: 'TextFilter'} } >Vendor Number</TableHeaderColumn>
		
		<TableHeaderColumn ref='market' dataField='market' dataSort={ true } filter={ { type: 'TextFilter' } }>Market</TableHeaderColumn>
        
		<TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } }>CMIM</TableHeaderColumn>
		
		<TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } }>OPCO</TableHeaderColumn>
        
		<TableHeaderColumn ref='item' dataField='item' dataSort={ true } filter={ { type: 'TextFilter' } }>Item</TableHeaderColumn>
        
		<TableHeaderColumn dataField='idesc'  dataSort={ true }  filter={ { type: 'TextFilter'}}>Item descripton 
        </TableHeaderColumn>
		
        <TableHeaderColumn ref='sdate' dataField='sdate' dataSort={ true } filter={ { type: 'TextFilter' }}>start date</TableHeaderColumn>
		
		<TableHeaderColumn ref='edate' dataField='edate' dataSort={ true } filter={ { type: 'TextFilter' }}>End date</TableHeaderColumn>
		
      </BootstrapTable>
    );
  }

  handlerClickCleanFiltered() {
    this.refs.broker.cleanFiltered();
	this.refs.vendor_no.cleanFiltered();
    this.refs.market.cleanFiltered();
	this.refs.cmim.cleanFiltered();
    this.refs.item.cleanFiltered();
	this.refs.idesc.cleanFiltered();
	this.refs.sdate.cleanFiltered();
	this.refs.sdate.cleanFiltered();
    
  }
}
