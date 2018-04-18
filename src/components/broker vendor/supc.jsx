import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from "axios";
import FormGroup from 'react-bootstrap/lib/FormGroup';

var suggestions=[];
  
const languages = [
  
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  },
  {
    name: 'Olive',
    year: 2003
  }
];
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true// enable click to select
  };


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters

class Supc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  search: false,
	  response:[]
    };   
	this.itemdescr=this.itemdescr.bind(this);
	this.enableDesc=this.enableDesc.bind(this);
  }

	enableDesc(){
		console.log(this.state.search);
		this.setState({search:true});
		console.log(this.state.search);

	}
	
	itemdescr(){
		var comp=this;
		console.log("inside");
		console.log(this.refs.item.value);
		let param={
			"itemDesc": this.refs.item.value
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
    console.log(data)
    console.log("done")
	
	for (var el in data.rows){
		comp.state.response.push({
			"itemBrand":data.rows[el].itemBrand,
			"itemDescription":data.rows[el].itemDescription,
			"itemPack":data.rows[el].itemPack,
			"itemSize":data.rows[el].itemSize,
			"status":data.rows[el].status,
			"supc":data.rows[el].supc,
		})
		comp.setState({response:comp.state.response});
		
	}
	console.log(comp.state.response);
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
}
	
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Select Item....",
      value,
      onChange: this.onChange
    };
	 


    return (<div>
		<input type="radio" onClick={this.enableDesc}/>Search by item description
		<div><label>Item Description:</label>
      <input type="text" ref="item" className="form-control itemDesc" disabled={!this.state.search} />
		</div>
	
<div>
<button className="btn btn-primary btn-sm" type="button" data-toggle="modal" data-target="#exampleModal" onClick={this.itemdescr} disabled={!this.state.search}>Add Record</button>
<div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="ModalLabel" >Item Information</h5>
      </div>
		<div className="modal-body">
			<div id='loader' style={{display: 'none'}}>
				<img src='./assets/loading.gif' width='32px' height='32px' />
			</div>
		
			  <BootstrapTable ref='table' data={ this.state.response }  selectRow={ selectRowProp } pagination>
			  
				<TableHeaderColumn dataField='itemBrand' isKey={ true }   dataSort={ true } filter={ { type: 'TextFilter'}}>Item Brand
				</TableHeaderColumn>
				<TableHeaderColumn dataField='itemDescription'  dataSort={ true } filter={ { type: 'TextFilter'} } >Item Description</TableHeaderColumn>
				<TableHeaderColumn dataField='itemPack' dataSort={ true } filter={ { type: 'TextFilter' } }>Item Pack</TableHeaderColumn>
				<TableHeaderColumn dataField='itemSize' dataSort={ true } filter={ { type: 'TextFilter' } }>Item Size</TableHeaderColumn>
				<TableHeaderColumn dataField='status' dataSort={ true } filter={ { type: 'TextFilter' } }>Status</TableHeaderColumn>
				<TableHeaderColumn dataField='supc' dataSort={ true } filter={ { type: 'TextFilter' } }>SUPC</TableHeaderColumn>
			   
				</BootstrapTable>
		</div>
		<div className="modal-footer">
			<button className="btn btn-primary"> Add </button>
			<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			
		</div>
    </div>
  </div>
</div></div>

</div>
    );
  }
  
  
  
  
}


export default Supc;

