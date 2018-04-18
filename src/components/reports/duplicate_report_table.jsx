import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const data= {
           data1:[{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"},
	{"broker1":"AC", "vendor_no":"123", "market":'North-East', "cmim": "567", "item": "23","idesc":"olive","broker2":"XY","ResolvedTime":"12/3/2018"}      
     ]
};
function addProducts() {
  for (let i = 0; i < data.data1.length ; i++) {
  products.push({
                  broker1: data.data1[i].broker1,
                  vendor_no:  data.data1[i].vendor_no,
                  market:  data.data1[i].market,
                  cmim:  data.data1[i].cmim,
				  broker2: data.data1[i].broker2,
				  ResolvedTime: data.data1[i].ResolvedTime,
				  item:    data.data1[i].item
				  
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
      <BootstrapTable ref='table' data={ products } options={options} pagination  exportCSV  csvFileName='locations.csv'>
   
        <TableHeaderColumn ref='broker1' dataField='broker1' isKey={ true }dataSort={ true } filter={ { type: 'TextFilter'} } >Broker1</TableHeaderColumn>
		
		<TableHeaderColumn ref='broker2' dataField='broker2' dataSort={ true } filter={ { type: 'TextFilter'} } >Broker2</TableHeaderColumn>
        
		<TableHeaderColumn ref='item' dataField='item' dataSort={ true } filter={ { type: 'TextFilter' } }>Item</TableHeaderColumn>
        
		<TableHeaderColumn ref='vendor_no' dataField='vendor_no' dataSort={ true } filter={ { type: 'TextFilter' } }>Vendor Number</TableHeaderColumn>
        
		<TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } }>CMIM</TableHeaderColumn>
        
		<TableHeaderColumn dataField='cmim'  dataSort={ true }  filter={ { type: 'TextFilter'}}>OPCO
        </TableHeaderColumn>
		
        <TableHeaderColumn ref='ResolvedTime' dataField='ResolvedTime' dataSort={ true } filter={ { type: 'TextFilter' }}> ResolvedTime</TableHeaderColumn>
      </BootstrapTable>
    );
  }

  handlerClickCleanFiltered() {
    this.refs.broker1.cleanFiltered();
    this.refs.broker2.cleanFiltered();
    this.refs.item.cleanFiltered();
    this.refs.vendor_no.cleanFiltered();
	this.refs.cmim.cleanFiltered();
	this.refs.ResolvedTime.cleanFiltered();
    
  }
}
