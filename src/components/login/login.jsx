import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import axios from "axios";
import * as styles from './styles.css'

class Login extends React.Component{
constructor(props){
					sessionStorage.clear();
                   super(props);
                   this.setEmpState = this.setEmpState.bind(this);
                   this.handleLogin = this.handleLogin.bind(this);
				   this.state={border:"none",borderBottom: '1px solid gray', data: {name: '', password: ''}};
                  };
			  
onFocus() {
				this.setState({
				borderBottom: '1.5px solid darkcyan'
				})
};

onBlur() {
			this.setState({
			borderBottom: '1px solid gray'
		})
};

setEmpState(e){
               var field = e.target.name;
               var value = e.target.value;
               this.state.data[field] = value;
               this.setState({ data: this.state.data });
              }

handleLogin(e){                 
           var comp=this;
		  e.preventDefault();
		  
		  var param={
			  "syscoId":this.state.data.name,
			  "password":this.state.data.password
		  }
		  if((this.refs.name.value=="") || (this.refs.pwd.value==""))
		  { alert("Please enter details"); }
		  else{
				$.ajax({
					headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json' 
					},
				   'type': 'POST',
					'url': 'http://localhost:8015/vendorBrokerTie/getLogin',
					'contentType': 'application/json',
					'dataType': 'json',
				   'data': JSON.stringify(param),
					
				})
				.done(function(data) {
					console.log("hi",data);
					if(data.result==true){
						if (data.rows[0].userGroup.toLowerCase()=="admin"){
							sessionStorage.setItem("userName",data.rows[0].userName)
							sessionStorage.setItem("group","admin")
							comp.props.history.push({pathname:'/admin', 
													state:{data:data.rows[0].userName,
													group:"admin"}})
						}
						else if(data.rows[0].userGroup.toLowerCase()=="broker"){
							comp.props.history.push({pathname:'/broker',
							state:{
								data:data.rows[0].userName,
								brokerNumber:data.rows[0].brokerNumber,
								mailId:data.rows[0].mailId,
								brokerCode:data.rows[0].brokerCode,
								brokerName:data.rows[0].brokerName,
								brokerUserId:data.rows[0].userId,
								group:"user"}})
						}else if(data.rows[0].userGroup.toLowerCase()=="vendor"){
											
							comp.props.history.push({pathname:'/vendor', 
													state:{
													data:data.rows[0].userName,
													vendorNumber:data.rows[0].vendorNumber,
													 group:"viewer"}})
						
						}else if(data.rows[0].userGroup.toLowerCase()==="opco"){
							comp.props.history.push({pathname:'/opcoviewer', 
										state:{
										data:data.rows[0].userName,
										opcoId:data.rows[0].opcoId,
										group:"opcoviewer"}})
						}
					}
					else{
						alert(data.message);
					}
				})
				.fail(function(jqXhr) {
					console.log('failed to register');
				});
		  
			}
        }

render(){
 return (<div className="row">
			<div className = "col-sm-6 col-md-6 lthree"><img src = "./assets/logincover.jpg" className="img-responsive one"/></div>
			<div className = "  col-sm-6 col-md-6  two">
					<div><img className="img-responsive" src="./assets/sysco.jpg" style={{paddingTop:"10%"}}/></div>
					<div>
						<form style={styles.style.container} onSubmit={this.handleLogin}>
							   
							   <FormGroup>
							   <div  className="inner-addon left-addon">
									<i className="glyphicon glyphicon-user"></i>
									
									<input type = "text"  ref="name" className='login_c' name="name"  placeholder = "User Name" value = {this.state.data.name} onChange = {this.setEmpState} />
							   </div>
							   </FormGroup><br/>
							   <FormGroup>
							   <div  className="inner-addon left-addon">
									<i className="glyphicon glyphicon-pencil"></i>
									<input type = "password" ref="pwd" className='login_c' name="password" value = {this.state.data.password} placeholder = "Password" onChange = {this.setEmpState} />
									<br/><br/>
									</div>
							   </FormGroup>
							   <FormGroup>
									
								
									<span style={{textAlign:"right"}}><Link to="/reset">Forgot Password?</Link></span>
									
							   </FormGroup>
							   
							   <Button type="submit" bsStyle="success" style={{width:"20em"}}> Login</Button>
							   
							   
						</form>
					</div>
			</div>
		</div>)
		
        }
}

export default Login;
