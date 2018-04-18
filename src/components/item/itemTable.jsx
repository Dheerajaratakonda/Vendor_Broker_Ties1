import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


export default class ItemTable extends React.Component {
    constructor(props) {
    super(props);
    var row='';
	console.log("props",this.props);
    this.state = {
      name: this.props.row.itemId,
      open: true,
      data:[]
    };
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
              <div style={{width:"60vw"}}>
				<BootstrapTable ref='itemtable' data={this.state.data} className="scrollme1" maxHeight={'200px'}>
	     <TableHeaderColumn ref='itemId' dataField='itemId' isKey={ true } width='50'>
		 Item Id</TableHeaderColumn>
        <TableHeaderColumn dataField='itemPack' ref='itemPack'   width='50'>Item pack
        </TableHeaderColumn>
        
     
        <TableHeaderColumn ref='itemSize' dataField='itemSize'  width='50' >Item Size</TableHeaderColumn>
        <TableHeaderColumn ref='itemDescr' dataField='itemDescr'  width='90' >Item Description</TableHeaderColumn>
		
        <TableHeaderColumn ref='category' dataField='category'width='50' >Category</TableHeaderColumn>
		<TableHeaderColumn ref='minor' dataField='minor' width='50'>Minor</TableHeaderColumn>
		<TableHeaderColumn ref='intermediate' dataField='intermediate' width='50'>Intermediate</TableHeaderColumn>
		<TableHeaderColumn ref='major' dataField='major' width='50'>Major</TableHeaderColumn>
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