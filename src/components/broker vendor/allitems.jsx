/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import NavBar1 from '../admin welcome/navbar.jsx';
import ItemTable from '../item/itemTable.jsx'


let arr=[];
var rowPushed=[];
function setStartDate(){
	  console.log("as")
  } 
  
function onSelectAll(isSelected, currentDisplayAndSelectedData){
  alert("is select all: " + isSelected);
  alert("Current display and selected data: ");
  for(let i=0;i<currentDisplayAndSelectedData.length;i++){
    console.log(currentDisplayAndSelectedData[i]);
  }
}
var comp;
var mailId,brokerUserId;
const createItemTable = (onUpdate, props) => (<div><h1>ghrt</h1><ItemTable onUpdate={ onUpdate } {...props}/></div>);

export default class AllItems extends React.Component {
	constructor(props) {
    super(props);
	console.log("all item props",this.props.location.state);
    this.state = {
      selected: [], startDate:"",products:[],
	  data:{brokerNumber:this.props.location.state.brokerNumber, brokerCode:this.props.location.state.brokerCode, brokerName:this.props.location.state.brokerName, mailId:this.props.location.state.mailId}
    };
	
	mailId=this.props.location.state.mailId;
	brokerUserId=this.props.location.state.brokerUserId;
	console.log("all item state",this.state);
	comp=this;
	this.name=this.props.location.state.data;
	this.group=this.props.location.state.group;
	this.addItem=this.addItem.bind(this);
	
  }
  
  addItem(e){
	  console.log("you",rowPushed);
  var comp=this;
	  var param={
			"data":rowPushed
		  
	  }
	  console.log("param",JSON.stringify(param.data));
	  $.ajax({
		headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
     },
	 beforeSend: function(){
    // Show image container
    $("#loader").show();
		},
   'type': 'POST',
    'url': 'http://localhost:8015/vendorBrokerTie/addItem',
	'contentType': 'application/json',
    'dataType': 'json',
   'data': JSON.stringify(param.data),
	complete:function(data){
    // Hide image container
		$("#loader").hide();
	}
  })
  .done(function(data) {
	
	
		alert(data.message);
	
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });	  
	  
  }
  
  
  
  
  componentWillMount(){
	  var comp=this;
	  
	  
	  
	  $.ajax({
		headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
     },
	 beforeSend: function(){
    // Show image container
    $("#loader").show();
		},
   'type': 'POST',
    'url': 'http://localhost:8015/vendorBrokerTie/getItems',
	'contentType': 'application/json',
    'dataType': 'json',
	complete:function(data){
    // Hide image container
		$("#loader").hide();
	}
  })
  .done(function(data) {
	
	for (var el in data.rows){
		comp.state.products.push({
			"vendorNumber":data.rows[el].vendorNumber,
			"vendorName":data.rows[el].vendorName,
			"itemId":data.rows[el].itemId,
			"itemDescr":data.rows[el].itemDescr,
			"opcoId":data.rows[el].opcoId,
			"startDate":'',
			"endDate":''
		})
		comp.setState({products:comp.state.products});
		
	}
	console.log(data);
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
  }
getSelectedRowKeys() {
    console.log(this.refs.table.state.selectedRowKeys)
  }
onRowSelect(row, isSelected){
  console.log("row selected",row);
  var ip=document.querySelector(".sdate").value;
  var ip1=document.querySelector(".edate").value;
  row["startDate"]=ip;
  row["endDate"]=ip1;
  row["mailId"]=mailId;
  row["brokerUserId"]=brokerUserId;
    
  
  // console.log("is selected: " + isSelected + ", " + rowStr);
  if(isSelected){ 
	  rowPushed.push(row)
  }
  else{
	  rowPushed.splice(rowPushed.indexOf(row),1)
  }
  console.log("rows pushed",rowPushed);
}
  
  

 editFormatter(cell, row){
	 
      return '<input type="date" class="sdate"  />';
    }
editFormatter1(cell,row){
return '<input type="date" class="edate" / >';
}	
	
	
	

  render() {
	const selectRowProp = {
	  mode: "checkbox",
	  clickToSelect: true,
	  onSelect: this.onRowSelect,
	  onSelectAll: onSelectAll
	}; 	

	const cellEditProp = {
		mode: 'click',
		blurToSave: true
	};
	
		
	
    return (
		<div>
  <NavBar1 name={this.name} group={this.group}  brokerNumber={this.state.data.brokerNumber} brokerCode={this.state.data.brokerCode} brokerName={this.state.data.brokerName} mailId={this.state.data.mailId}/><br/><br/><br/><br/>
	<div className="row tab" style={{align:"center"}}>
      <BootstrapTable ref='table' data={ this.state.products } selectRow={ selectRowProp }  cellEdit={cellEditProp} pagination >
	  
        <TableHeaderColumn ref='vendorNumber' dataField='vendorNumber' isKey={ true } filter={ { type: 'TextFilter' } } dataSort={ true }>Vendor Number</TableHeaderColumn>
        <TableHeaderColumn dataField='vendorName' ref='vendorName'   filter={ { type: 'TextFilter'}} dataSort={ true } >Vendor Name
        </TableHeaderColumn>
       
		<TableHeaderColumn ref='item' dataField='itemId' filter={ { type: 'TextFilter' } } dataSort={ true } customEditor={ { getElement:createItemTable} }  >Item</TableHeaderColumn>
		
		<TableHeaderColumn ref='idesc' dataField='itemDescr' filter={ { type: 'TextFilter' } } dataSort={ true } customEditor={ { getElement:createItemTable} } >Item description</TableHeaderColumn>
		
        <TableHeaderColumn ref='opco' dataField='opcoId' filter={ { type: 'TextFilter' } } dataSort={ true } >OPCO</TableHeaderColumn>
		
		<TableHeaderColumn dataFormat={this.editFormatter} filter={ { type: 'TextFilter' } } editable={false} dataSort={ true } >Start date</TableHeaderColumn>
		
		<TableHeaderColumn ref='edate' dataFormat={this.editFormatter1} dataField='endDate' editable={false} filter={ { type: 'TextFilter' } } dataSort={ true } >End date</TableHeaderColumn>
       
      </BootstrapTable><br/>
	  </div>
	  
	  <button className="btn btn-primary aiadd" style={{float:"left",position:"relative",bottom:"6.5em"}} onClick={this.addItem}>ADD</button>
	  </div>
    );
  }

}
