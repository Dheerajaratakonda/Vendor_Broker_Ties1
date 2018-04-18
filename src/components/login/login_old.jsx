import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import axios from "axios";
import * as styles from './styles.css'

class Login extends React.Component{
constructor(props){
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
              if((this.refs.name.value=="") || (this.refs.pwd.value==""))
              { alert("Please enter details"); }
              else{
                  axios.get('./cred.json')
                    .then(response => {
                      var flag=false;
                      for ( var index in response.data){
                        if(comp.state.data.name==response.data[index].username && comp.state.data.password===response.data[index].password){
                            if(response.data[index].type==="admin"){
                                flag=true;
                                comp.props.history.push({pathname:'/admin', state:{data:this.state.data.name}})
								console.log("3",this.state.data.name)
                            }
                            else if(response.data[index].type==="user"){
                                flag=true;
                                comp.props.history.push({pathname:'/broker', state:{data:this.state.data.name}})
                            }else if(response.data[index].type==="viewer"){
                                flag=true;
                                comp.props.history.push({pathname:'/vendor', state:{data:this.state.data.name}})
								
                            }else if(response.data[index].type==="opcoviewer"){
                                flag=true;
                                comp.props.history.push({pathname:'/opcoviewer', state:{data:this.state.data.name}})
                            }
				        }
                    }
                    if (!flag){
                        alert("Invalid username or password")
                    }
                      
                  });
              }
             }

render(){
 return (<div className="row">
			<div className = "col-md-6"><img src = "./assets/logincover.jpg" className="img-responsive one"/></div>
			<div className = "col-md-6">
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
