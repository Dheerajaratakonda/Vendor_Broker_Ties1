import React from 'react';
import ReactDOM from 'react-dom';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import NavBar1 from './navbar.jsx';

class EditScreen extends React.Component{
	
	constructor(props){
		super(props);
		console.log("props",this.props.location.state.row.brokerNumber);
		this.state={
			data:{
				brokerNumber:this.props.location.state.row.brokerNumber,
				brokerCode: "",
				brokerName: "",
				contactPersonName: "",
				mailId: "",
				password: "",
				phoneNumber: "",
				syscoId: "",
				userGroup: "",
				userId: "",
				userName: ""
			}
		};
		console.log("bn",this.state.data.brokerNumber);
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
		this.setEmpState=this.setEmpState.bind(this);
		this.editRows=this.editRows.bind(this);
	}
	
	componentWillMount(){
		var comp=this;
		var param={
			"brokerNumber":this.state.data.brokerNumber
		}
		$.ajax({
		headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
     },
	 
    'type': 'POST',
    'url': 'http://localhost:8015/vendorBrokerTie/editBroker',
	'contentType': 'application/json',
    'dataType': 'json',
    'data': JSON.stringify(param),
  })
  .done(function(data) {
		
		comp.state.data={
			brokerCode: data.rows[0].brokerCode,
			brokerName: data.rows[0].brokerName,
			contactPersonName: data.rows[0].contactPersonName,
			mailId: data.rows[0].mailId,
			password: data.rows[0].password,
			phoneNumber: data.rows[0].phoneNumber,
			syscoId: data.rows[0].syscoId,
			userGroup: data.rows[0].userGroup,
			userId: data.rows[0].userId,
			userName: data.rows[0].userName,
			brokerNumber:data.rows[0].brokerNumber
		}
		comp.setState({data:comp.state.data});
		
	
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
	}
	
		
	setEmpState(e){
               var field = e.target.name;
               var value = e.target.value;
			   console.log("field",field);
			   console.log("value",value);
			   console.log("state",this);
               this.state.data[field] = value;
               this.setState({ data: this.state.data });
              }
	editRows(e){
		e.preventDefault();
		var comp=this;
		console.log("comp",comp);
		var param={
			"brokerCode": comp.state.data.brokerCode,
			"brokerName": comp.state.data.brokerName,
			"contactPersonName": comp.state.data.contactPersonName,
			"mailId": comp.state.data.mailId,
			"password": comp.state.data.password,
			"phoneNumber": comp.state.data.phoneNumber,
			"syscoId": comp.state.data.syscoId,
			"userGroup": comp.state.data.userGroup,
			"userId": comp.state.data.userId,
			"userName": comp.state.data.userName,
			"brokerNumber":comp.state.data.brokerNumber
		}
		$.ajax({
		headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
     },
	 
    'type': 'POST',
    'url': 'http://localhost:8015/vendorBrokerTie/updateUser',
	'contentType': 'application/json',
    'dataType': 'json',
    'data': JSON.stringify(param),
  })
  .done(function(data) {
		if(data.result){
			alert('edited successfully')
		}else{
			alert("Duplicate entry")
		}
  })
  .fail(function(jqXhr) {
    console.log('failed to register');
  });
		
	}
	
	render(){
		console.log(this.state.data.brokerNumber)
		return 	(<div>
					<NavBar1 name={this.name} group={this.group}/>
					
					<br/><br/><br/>
					<div className="class1">
					<div className="row">
					<h3 className="headings">Update Broker details</h3>
						
						<div>
							<form className="form-horizontal col-md-offset-1 col-md-5" onSubmit={this.editRows}>
							<h6 style={{color:"red"}}>Note:All fields are mandatory</h6>
								<FormGroup>
									<div className="col-md-4 aname"><label>Code: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="text" value={this.state.data.brokerCode} name="brokerCode"  pattern="[A-Z]{2}" onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Name: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="text" name="brokerName" value={this.state.data.brokerName} onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Email: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="email" value={this.state.data.mailId} name="mailId" onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Broker Number: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="number" name="brokerNumber" value={this.state.data.brokerNumber} pattern="[0-9]{6}" onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Contact Person Name: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="text" name="contactPersonName" value={this.state.data.contactPersonName} onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Phone Number: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="number" name="phoneNumber" value={this.state.data.phoneNumber} pattern="[0-9]{10}" onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Password: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="text" name="password" value={this.state.data.password} onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Sysco Id: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="text" name="syscoId" value={this.state.data.syscoId} onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Username: </label></div>
									<div className="col-md-6">
										<input className="form-control" type="text" name="userName" value={this.state.data.userName} onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								
								
								<div  className="col-md-offset-2 col-md-4">
									<Button type="submit" className=" btn btn-primary"> Update </Button>
								</div>
							</form>
							<div className="col-md-5">
								<img src="./assets/handshake.png" style={{paddingTop:"10%"}} className="handshake" />
							</div>
						</div>
						</div>
					</div>
				</div>)
	}
}
export default EditScreen;