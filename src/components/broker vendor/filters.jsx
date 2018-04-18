
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var itemId;
class ItemTable extends React.Component {
    constructor(props) {
    super(props);
    var row='';
    this.state = {
      name: itemId,
      open: true,
      data:[]
    };
	console.log("modal",	this.state);
    console.log(this.state.name);
  }
    close = () => {
    this.setState({ open: false });
    this.props.onUpdate(this.props.defaultValue);
  }
    componentWillMount(){
		var comp=this;
        var param={
			"itemId":this.state.name		 
		}
		console.log("hui",this.state.name);
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
		'url': 'http://localhost:8015/vendorBrokerTie/getSUPC',
		'contentType': 'application/json',
		'dataType': 'json',
	   'data': JSON.stringify(param),
		complete:function(data){
		// Hide image container
			$("#loader").hide();
		}
	  })
  .done(function(data) {
	console.log("response",data);
	for (var el in data.rows){
		comp.state.data.push({
				itemId: data.rows[el].itemId,
				itemPack: data.rows[el].itemPack,
				itemSize: data.rows[el].itemSize,
				itemDescr: data.rows[el].itemDescr,
				brand: data.rows[el].brand,
				category: data.rows[el].category,
				major: data.rows[el].major,
				intermediate: data.rows[el].intermediate,
				minor: data.rows[el].minor
		})
	}
	comp.setState({data:comp.state.data})
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
    }
  
  
  
  render() {
    const row=[];
    for (var i in this.state.data){
    row.push(<tr key={i}>
    <td>{this.state.data[i].itemId}</td>
    <td>{this.state.data[i].itemPack}</td>
    <td>{this.state.data[i].itemSize}</td>
    <td>{this.state.data[i].itemDescr}</td>
    <td>{this.state.data[i].category}</td>
    <td>{this.state.data[i].minor}</td>
    <td>{this.state.data[i].intermediate}</td>
    <td>{this.state.data[i].major}</td>

    </tr>)
    }
	
    const fadeIn = this.state.open ? 'in' : '';
    const display = this.state.open ? 'block' : 'none';
    return (
      <div className={ `modal fade ${fadeIn}` } id='myModal' role='dialog' style={ { display } } >
        <div className='modal-dialog modal-lg'>
		
          <div className='modal-content'>
            <div className='modal-body' >
              <div className="inside" style={{width:"65vw"}}>
				<BootstrapTable ref='itemtable' data={this.state.data}  maxHeight={'200px'}>
	     <TableHeaderColumn ref='itemId' dataField='itemId' isKey={ true } width='50' >
		 Item Id</TableHeaderColumn>
        <TableHeaderColumn dataField='itemPack' ref='itemPack'   width='50'>Item pack
        </TableHeaderColumn>
        
     
        <TableHeaderColumn ref='itemSize' dataField='itemSize'  width='30' >Item Size</TableHeaderColumn>
        <TableHeaderColumn ref='itemDescr' dataField='itemDescr'  width='100' >Item Description</TableHeaderColumn>
		
        <TableHeaderColumn ref='category' dataField='category'  width='50' >Category</TableHeaderColumn>
		<TableHeaderColumn ref='minor' dataField='minor'  width='50' >Minor</TableHeaderColumn>
		<TableHeaderColumn ref='intermediate' dataField='intermediate' width='50' >Intermediate</TableHeaderColumn>
		<TableHeaderColumn ref='major' dataField='major'  width='50' >Major</TableHeaderColumn>
      </BootstrapTable>
            </div></div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' onClick={ this.close }>Close</button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const createItemTable = (onUpdate, props) => (<ItemTable onUpdate={ onUpdate } {...props}/>);


export default class AllFilters extends React.Component {
	constructor(props){
		super(props);
		this.state={brokerNumber:this.props.brokerNumber,products:[]};
	}
	componentWillMount(){
		var comp=this;
		
		var param={
			"brokerNumber":this.state.brokerNumber
		}
		$.ajax({
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
			 
		   'type': 'POST',
			'url': 'http://localhost:8015/vendorBrokerTie/Broker',
			'contentType': 'application/json',
			'dataType': 'json',
		   'data': JSON.stringify(param),
			complete:function(data){
			// Hide image container
				$("#loader").hide();
			}
		})
		.done(function(data) {
			console.log("bd",data);
			for (var el in data.rows){
				comp.state.products.push({
					"vendorNumber":data.rows[el].vendorNumber,
					"vendorName":data.rows[el].vendorName,
					"market":data.rows[el].market,
					"item_Id":data.rows[el].item_Id,
					"itemDescr":data.rows[el].itemDescr,
					"opcoName":data.rows[el].opcoName,
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
			mode: 'click',
			blurToSave: true,	
		  
		};
		
		const options={
			onRowClick: function(row){
				itemId=row.item_Id
			}
		}
		
		return (
		<div>
		
			<div id='loader' style={{display: 'none'}}>
					<img src='./assets/loading.gif' width='32px' height='32px' />
			</div>
			
			<BootstrapTable ref='table' data={this.state.products}  pagination cellEdit={cellEditProp} options={options}>
				<TableHeaderColumn ref='vendorNumber' dataField='vendorNumber' isKey={ true } filter={ { type: 'TextFilter' } } dataSort={ true } editable={false} >Vendor Number</TableHeaderColumn>
				<TableHeaderColumn dataField='vendorName' ref='vendorName'   filter={ { type: 'TextFilter'}} dataSort={ true }  editable={false}>Vendor Name
				</TableHeaderColumn>
				<TableHeaderColumn ref='market' dataField='market' filter={ { type: 'TextFilter'} }  dataSort={ true } editable={false} >Market</TableHeaderColumn>
				<TableHeaderColumn ref='item_Id' dataField='item_Id' customEditor={ { getElement:createItemTable} } filter={ { type: 'TextFilter' } } dataSort={ true } >Item Id</TableHeaderColumn>
				<TableHeaderColumn ref='itemDescr' dataField='itemDescr' filter={ { type: 'TextFilter' } } dataSort={ true }   customEditor={ { getElement:createItemTable} }>
				Item Description</TableHeaderColumn>
				<TableHeaderColumn ref='opcoName' dataField='opcoName' filter={ { type: 'TextFilter' } } dataSort={ true } editable={false}>OPCO</TableHeaderColumn>
				<TableHeaderColumn ref='startdate' dataField='startDate' filter={ { type: 'TextFilter' } } dataSort={ true }  editable={false}>Start date</TableHeaderColumn>
				<TableHeaderColumn ref='enddate' dataField='endDate' filter={ { type: 'TextFilter' } } dataSort={ true } editable={false} >End date</TableHeaderColumn>
			</BootstrapTable>
			
		</div>
		);
	}
}
