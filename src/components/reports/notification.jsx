import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import NavBar1 from '../admin welcome/navbar.jsx';

const products = [];
var rowKeys=[];
var rowPushed=[];
const data= [{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5671", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
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
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5627", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5637", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5647", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5667", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5657", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5697", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5687", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "5607", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "56127", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "56347", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "56756", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "56778", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "56750", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"},
	{"broker":"AC", "vendor_no":"123", "market":'North-East', "cmim": "56719", "item": "23","idesc":"olive","sdate":"01/3/3018","edate":"31/3/2018"}      
     ]


function onSelectAll(isSelected, currentDisplayAndSelectedData){
  alert("is select all: " + isSelected);
  alert("Current display and selected data: ");
  for(let i=0;i<currentDisplayAndSelectedData.length;i++){
    console.log(currentDisplayAndSelectedData[i]);
  }
}
function addProducts() {
  for (let i = 0; i < data.length ; i++) {
  products.push({
               
                  cmim:  data[i].cmim,
				  item:    data[i].item,
				  idesc: data[i].idesc,
				  sdate: data[i].sdate
				 
				  
  })
  }
}
addProducts();


export default class Notif extends React.Component {
	
	constructor(props) {
    super(props);
	console.log("all item props",this.props.location.state);
   
	console.log("all item state",this.state);

	this.name=this.props.location.state.data;
	this.group=this.props.location.state.group;
	
  }
  
	
	getSelectedRowKeys() {
    console.log(this.refs.table.state.selectedRowKeys)
  }
onRowSelect(row, isSelected){
  
  console.log("row selected",row);

  
    
  
  // console.log("is selected: " + isSelected + ", " + rowStr);
  if(isSelected){ 
	  rowPushed.push(row)
  }
  else{
	  rowPushed.splice(rowPushed.indexOf(row),1)
  }
  console.log("rows pushed",rowPushed);
}

 createCustomDeleteButton = (onClick) => {
      return (
                
                    <button type="button" id= "delete" className="btn btn-warning react-bs-table-del-btn buttonDelete" style={{backgroundColor:"red"}} onClick={ () => this.handleDeleteButtonClick(onClick)}>
                        <span><i className="glyphicon glyphicon-trash"> </i>Delete</span>
                    </button>
           
      );
    }
    
  handleDeleteButtonClick = (onClick) => {
	  onClick();
  }
  render() {
	  
const selectRowProp = {
	  mode: "checkbox",
	  clickToSelect: true,
	  onSelect: this.onRowSelect,
	  onSelectAll: onSelectAll
	
	 
	}; 	
	   const options={
		    deleteBtn: this.createCustomDeleteButton,
		   sizePerPage:8
	   };
	   

  
	  
    return (
		<div className="container-fluid">
					<NavBar1 name={this.name} group={this.group}  /> <br/><br/><br/>
      <BootstrapTable ref='table' data={ products } pagination className="scrollme1 tab"   selectRow={ selectRowProp }    options={options} deleteRow>
   
        
		<TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } } isKey={ true }>Broker USERID</TableHeaderColumn>
		
		<TableHeaderColumn ref='cmim' dataField='cmim' dataSort={ true } filter={ { type: 'TextFilter' } }>OPCO</TableHeaderColumn>
        
		<TableHeaderColumn ref='item' dataField='item' dataSort={ true } filter={ { type: 'TextFilter' } }>Item ID</TableHeaderColumn>
        
	
        <TableHeaderColumn ref='sdate' dataField='sdate' dataSort={ true } filter={ { type: 'TextFilter' }}>Conflict resolution date</TableHeaderColumn>
		
	
      </BootstrapTable>
	  </div>
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
