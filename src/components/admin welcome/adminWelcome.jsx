
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
 import FormGroup from 'react-bootstrap/lib/FormGroup';
import {Redirect, BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import NavBar1 from './navbar.jsx';

var comp;
var rowKeys=[];



class Login extends React.Component {
	constructor(props){
        
		super(props);
		console.log(sessionStorage);
		

		this.state={data:[]};
		this.name=this.props.location.state.data;
        this.group=this.props.location.state.group;
		this.add=this.add.bind(this);
		this.routeToNotf=this.routeToNotf.bind(this);
	}
   
    componentWillMount(){
		console.log(this.name,this.group);
       comp=this;
	   let param={
			"userGroup": "admin"
		}
         $.ajax({
            headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
         },   
		'type': 'POST',
        'url': 'http://localhost:8015/vendorBrokerTie/Admin',
        'contentType': 'application/json',
        'dataType': 'json',
		'data': JSON.stringify(param)
      })
      .done(function(data) {
		console.log("brokers",data);

        for (var el in data.rows){
            comp.state.data.push({
                code:data.rows[el].brokerCode,
                name:data.rows[el].brokerName,
				brokerNumber:data.rows[el].brokerNumber,
				mailId:data.rows[el].mailId
            })
            comp.setState({data:comp.state.data});
			}
			
        
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });
        }
    
   
	add(e){
		   comp.props.history.push({pathname:'/add', state:{data:this.name,group:this.group}});
		
	}
  
    
    handleDeleteButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
	  var comp=this;
	  var brokerCode="";
	  
	  if (rowKeys.length>1){
		  brokerCode=rowKeys.join(",");
	  }else{
		  brokerCode=rowKeys[0];
	  }
	  
	  var param={
		  "brokerCode":brokerCode
	  };
	  
	  console.log(param)
	  $.ajax({
		headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
     },
   'type': 'POST',
    'url': 'http://localhost:8015/vendorBrokerTie/deleteUser',
	'contentType': 'application/json',
    'dataType': 'json',
   'data': JSON.stringify(param),
  })
  .done(function(data) {
	// alert("Broker code " + brokerCode + " delete successfully!");
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
	  
      onClick();
    }
    createCustomDeleteButton = (onClick) => {
      return (
                
                    <button type="button" className="btn btn-warning react-bs-table-del-btn buttonDelete" style={{backgroundColor:"red"}} onClick={ () => this.handleDeleteButtonClick(onClick)}>
                        <span><i className="glyphicon glyphicon-trash"> </i>Delete</span>
                    </button>
           
      );
    }
    
	routeToNotf(e){
		this.props.history.push({pathname:'/notification', state:{data: this.name,group:this.group
																		}})
	}
    
	

        render(){
            const selectRow = {
                mode: 'checkbox' ,//radio or checkbox
				onSelect: function(row,isSelected){
					console.log("code",row.code,isSelected);
					if(isSelected){
						rowKeys.push(row.code);
					}else{
						rowKeys.splice( rowKeys.indexOf(row.code), 1 );
					}
					console.log(rowKeys)
				},
				onSelectAll: function(isSelected, rows){
					console.log(isSelected, rows);
					rowKeys=[];
					if (isSelected){
						for (var el in rows){
							rowKeys.push(rows[el].code);
						}
						console.log("selectall",rowKeys);
					}
					else{
						rowKeys=[];
						console.log("selectall",rowKeys);
					}
				}
              };
            const options = {
                deleteBtn: this.createCustomDeleteButton,
                onRowClick:  function(row){
                    comp.props.history.push({pathname:'/viewbroker',
                                            state:{
                                                data:comp.name,
                                                group:comp.group,
                                                row:row
                                            }})
				
                },
				sizePerPage:6
            };
      	     return (	
						<div className="container">
						
							<NavBar1 name={this.name} group={this.group}/>
							<br/><br/><br/><br/>
							<div className="row"><a style={{float:"left"}} onClick={this.routeToNotf}>
							Resolve Duplicates
							</a><h3 className="headings" style={{display:"inline"}}>Strategic Brokers' Details</h3><button className="button button2 btn btn-primary" style={{border:"none",backgroundColor:"lightseagreen",float:"right"}} onClick={this.add}>+ ADD</button> </div>
							
                                <div className="row">
                                    <BootstrapTable ref='table' data={ this.state.data } pagination selectRow={selectRow} options={options} deleteRow>
									<TableHeaderColumn dataField='brokerNumber' dataSort={ true }  filter={ { type: 'TextFilter'}} >Broker Number
                                        </TableHeaderColumn>
                                        <TableHeaderColumn dataField='code' isKey={ true } dataSort={ true }  filter={ { type: 'TextFilter'}} >Code
                                        </TableHeaderColumn>
                                        <TableHeaderColumn dataField='name' dataSort={ true }  filter={ { type: 'TextFilter'} } >Name</TableHeaderColumn>
                                        
                                        <TableHeaderColumn  dataField='mailId' dataSort={ true }  filter={ { type: 'TextFilter' } }>Email</TableHeaderColumn>

                                    </BootstrapTable>
                                    
                                </div>
                            </div>

            )
            }

						
						 
    }


export default Login;