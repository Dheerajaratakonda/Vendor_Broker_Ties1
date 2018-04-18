import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import NavBar1 from './navbar.jsx';
var userId,group;
class AddRow extends React.Component{
	
	constructor(props){
		super(props)
		
		this.state={data: {code:'', name:'', password:'', email:'',syscoId:'',contactnumber:'',contactname:'',userGroup:'broker',userName:'',brokerNumber:''}}
		this.setEmpState = this.setEmpState.bind(this)
		
		this.name=this.props.location.state.data;
		this.group=this.props.location.state.group;
		this.addRows = this.addRows.bind(this)
	}
	
	setEmpState(e){
               var field = e.target.name;
               var value = e.target.value;
               this.state.data[field] = value;
               this.setState({ data: this.state.data });
              }
			  
	addRows(e){
		e.preventDefault();
		var comp=this;
		
		var param ={
		  "brokerCode": comp.state.data.code.toString(), 
		   "brokerName": comp.state.data.name.toString(),  
		   "brokerNumber": comp.state.data.brokerNumber.toString(),  
		   "contactPersonName": comp.state.data.contactname.toString(),  
		   "mailId": comp.state.data.email.toString(),  
		   "password": comp.state.data.password.toString(),  
		   "phoneNumber": comp.state.data.contactnumber.toString(),  
		   "syscoId": comp.state.data.syscoId.toString(),  
		   "userGroup": comp.state.data.userGroup.toString(),  
		   "userName": comp.state.data.userName.toString()  
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
    'url': 'http://localhost:8015/vendorBrokerTie/addUser',
	'contentType': 'application/json',
    'dataType': 'json',
   'data': JSON.stringify(param),
	complete:function(data){
    // Hide image container
		$("#loader").hide();
		
	}
  })
  .done(function(data) {
		console.log(comp.name)
		if (data.result){
	    alert('Added Successfully');
		comp.props.history.push({pathname:'/admin/', 
								state:{data:comp.name,
								group:"admin"}})
		}else{
			alert("duplicate records");
		}

  })
  .fail(function(jqXhr) {
	  
    console.log('failed to register');
  });		
  
              }
	
	render(){
		return 	<div>
						
					<NavBar1 name={this.name} group={this.group}/>
					<br/><br/>
					<div className="class1">
						<div className="row">
							<h3 className="headings">Add Broker Details</h3>
							
							
							<form className="form-horizontal col-md-offset-1 col-md-5" onSubmit={this.addRows}>
							<h6 style={{color:"red"}}>Note:All fields are mandatory</h6>
								<FormGroup>
									<div className="col-md-4 aname"><label>Code: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="text" name="code" value={this.state.data.code} pattern="[A-Z]{2}" onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>
									Broker Number: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="number" name="brokerNumber" value={this.state.data.brokerNumber}pattern="[0-9]{6}" onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Name: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="text" name="name" value={this.state.data.name} onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label><span className="addalign">Set password</span>: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="text" name="password" value={this.state.data.password} onChange={this.setEmpState} required/>
									</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Email: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="email" name="email" value={this.state.data.email} onChange={this.setEmpState} required/>
						 			</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Sysco Id: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="text" name="syscoId" value={this.state.data.syscoId} onChange={this.setEmpState} required/>
						 			</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Contact no: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="number" name="contactnumber" value={this.state.data.contactnumber} pattern="[0-9]{10}" onChange={this.setEmpState} required/>
						 			</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>Contact Name: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="text" name="contactname" value={this.state.data.contactname} onChange={this.setEmpState} required/>
						 			</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>User Group: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="text" name="userGroup" value={this.state.data.userGroup} disabled onChange={this.setEmpState}  required/>
						 			</div>
								</FormGroup>
								<FormGroup>
									<div className="col-md-4 aname"><label>User Name: </label></div>
									<div className="col-md-5">
										<input className="form-control" type="text" name="userName" value={this.state.data.userName} onChange={this.setEmpState} required/>
						 			</div>
								</FormGroup>
								<div className="col-md-offset-2 col-md-4">
									<Button type="submit" className="btn btn-primary"> Submit </Button>
								</div>
							</form>
							<div className="col-md-5">
								<img src="./assets/handshake.png" style={{paddingTop:"15%"}} className="handshake" alt="image" />
							</div>
							
						</div>
						
					</div>
				</div>
	}
}
export default AddRow;