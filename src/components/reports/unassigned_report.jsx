import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const data= {
               data1:[{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive"}
           
           
     ]
};
function addProducts() {
  for (let i = 0; i < data.data1.length ; i++) {
  products.push({
      vendor_no: data.data1[i].vendor_no,
	  market:  data.data1[i].market,
	  cmim:  data.data1[i].cmim,
	  item:  data.data1[i].item,
	 idesc: data.data1[i].idesc
  })
  }
}
addProducts();

export default class Table1 extends React.Component {
  render() {
		const options = {
			exportCSVText: 'Download CSV',
			 sizePerPage:8
		  };
    return (
      <BootstrapTable ref='table' data={ products } options={options} pagination  exportCSV
        csvFileName='locations.csv'>
   
        <TableHeaderColumn ref='vendor_no' dataField='vendor_no' isKey={ true }dataSort={ true } filter={ { type: 'TextFilter'} } >Vendor Number</TableHeaderColumn>
        <TableHeaderColumn ref='market' dataField='market' dataSort={ true } filter={ { type: 'TextFilter' } }>Market</TableHeaderColumn>
        <TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } }>CMIM</TableHeaderColumn>
        <TableHeaderColumn ref='item' dataField='item' dataSort={ true } filter={ { type: 'TextFilter' } }>Item</TableHeaderColumn>
        <TableHeaderColumn dataField='idesc'  dataSort={ true }  filter={ { type: 'TextFilter'}}>Item description</TableHeaderColumn>
       
      </BootstrapTable>
    );
  }

  handlerClickCleanFiltered() {
    this.refs.vendor_no.cleanFiltered();
    
    this.refs.opco.cleanFiltered();
    this.refs.market.cleanFiltered();
    this.refs.cmim.cleanFiltered();
    this.refs.item.cleanFiltered();
	this.refs.idesc.cleanFiltered();
	
    
  }
}
