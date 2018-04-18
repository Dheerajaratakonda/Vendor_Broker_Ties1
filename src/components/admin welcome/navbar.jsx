import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,Switch, withRouter} from 'react-router-dom';

class NavBar1 extends React.Component{
	constructor(props){
		super(props);
		console.log("nav props",this.props);
		this.state={data:this.props.name,noti:"none",ur:"none",dr:"none",brokerData:{brokerName:'',brokerCode:'',brokerNumber:'',mailId:''},vendor:{vendorNumber:''},opco:{opcoId:''}};
		this.group=this.props.group;
		this.myFunction = this.myFunction.bind(this);
		this.logout = this.logout.bind(this);
		this.duplicate = this.duplicate.bind(this);
		this.broker_vendor = this.broker_vendor.bind(this);
		this.audit = this.audit.bind(this);
		this.unassigned=this.unassigned.bind(this);
		this.routeToHome=this.routeToHome.bind(this);

	}
	componentWillMount(){
		if (this.group=="admin"){
			this.setState({noti:"block",dr:"block"});
		}else{
			this.setState({noti:"none",dr:"none"});
		};
		
		if (this.group=="user" || this.group=="admin"){
			this.setState({ur:"block"});
		}else{
			this.setState({ur:"none"});
		}
		
		if(this.group=="user"){
			 this.state.brokerData.brokerNumber=this.props.brokerNumber;
			 this.state.brokerData.brokerCode=this.props.brokerCode;
			 this.state.brokerData.brokerName=this.props.brokerName;
			 this.state.brokerData.mailId=this.props.mailId;
			 this.setState({brokerData:this.state.brokerData})
			 console.log("nav broker data",this.state.brokerData);
		}else if (this.group=="viewer"){
			this.state.vendor.vendorNumber=this.props.vendorNumber;
			this.setState({vendor:this.state.vendor})
		}else if (this.group=="opcoviewer"){
			this.state.opco.opcoId=this.props.opcoId;
			this.setState({opco:this.state.opco})
		}
	
	}
		
	myFunction(e){
		var x = document.getElementById("myTopnav");
		console.log("inside func", x);
		if (x.className === "topnav") {
			console.log("inside if");
			x.className += " responsive";
		} else {
			console.log("inside else");
			x.className = "topnav";
		}
	}
	
	routeToHome(){
		if(this.group=="admin"){
			this.props.history.push({pathname:'/admin', 
									state:{data:this.state.data,
									group:"admin"}})
		}else if(this.group=="user"){
			this.props.history.push({pathname:'/broker',
							state:{
								data:this.state.data,
								brokerNumber:this.state.brokerData.brokerNumber,
								mailId:this.state.brokerData.mailId,
								brokerCode:this.state.brokerData.brokerCode,
								brokerName:this.state.brokerData.brokerName,
								group:"user"}})
		}else if(this.group=="viewer"){
			this.props.history.push({pathname:'/vendor', 
									state:{
									data:this.state.data,
									vendorNumber:this.state.vendor.vendorNumber,
									 group:"viewer"}})
		}else if(this.group=="opcoviewer"){
			this.props.history.push({pathname:'/opcoviewer', 
									state:{
									data:this.state.data,
									opcoId:this.state.opco.opcoId,
									group:"opcoviewer"}})
		}
	}
	
	
	
	logout(){
		
		this.props.history.push('/logout');
	}
	duplicate(e){
		this.props.history.push({pathname:'/duplicate_report', state:{data: this.state.data,group:this.group
																		}})
	}
	broker_vendor(e){
		this.props.history.push({pathname:'/broker_vendor_report', state:{data: this.state.data,group:this.group,
		 brokerNumber:this.state.brokerData.brokerNumber, brokerCode:this.state.brokerData.brokerCode, brokerName:this.state.brokerData.brokerName,mailId:this.state.brokerData.mailId,vendorNumber:this.state.vendor.vendorNumber, opcoId:this.state.opco.opcoId}})
		
	}
	unassigned(e){
		this.props.history.push({pathname:'/unassigned_report', state:{data: this.state.data,group:this.group,mailId:this.state.brokerData.mailId, brokerNumber:this.state.brokerData.brokerNumber,brokerCode:this.state.brokerData.brokerCode,brokerName:this.state.brokerData.brokerName}})
	}
	
	audit(e){
		this.props.history.push({pathname:'/audit_logs', state:{data: this.state.data,group:this.group,mailId:this.state.brokerData.mailId, brokerNumber:this.state.brokerData.brokerNumber,brokerCode:this.state.brokerData.brokerCode,brokerName:this.state.brokerData.brokerName}})
	}
	
	render(){
		return	(	<div className="row"><div className="topnav" style={{position:"fixed",zIndex:"2"}}id="myTopnav">
					
					<img className="brand nav-logo" style={{float:"left",color:"white",height:"30px"}} src="./assets/sysco-nav.png"/><i className="fas fa-home" style={{float: "left",color: "white",margin: "15px",fontSize: "19px"}} onClick={this.routeToHome}></i><span className="brand nav-logo" style={{color:"white",fontSize: "20px",position: "absolute",left: "40vw"}} >VENDOR-BROKER TIE</span>
  
					<a href="javascript:void(0);" style={{fontSize:"15px"}} className="icon brand" onClick={this.myFunction}>&#9776;</a> 
					<span style={{float:"right"}}>
					
							 
						<span className="dropdown nav-items" >
							<button className="dropbtn "> Reports 
							 <i className="fa fa-caret-down"></i>
							</button>
							<span className="dropdown-content" style={{cursor:"pointer"}}>
							  <a onClick={this.unassigned} style={{display:this.state.ur}}>Unassigned and New Item</a>
							  <a onClick={this.duplicate} style={{display:this.state.dr}}>Duplicate broker-vendor tie reports</a>
							  <a href="" onClick={this.broker_vendor}>Broker-Vendor tie reports</a>
							</span><span className="line">|</span>
						</span>
						
						<a onClick={this.audit} className="nav-items" style={{color:"white"}}>Audit Logs </a>
						<span className="dropdown">
						<span className="line">|</span>
						
							<button className="dropbtn nav-items"> <span className="glyphicon glyphicon-user"></span> {this.state.data}
							 <i className="fa fa-caret-down"></i>
							</button>
							<span className="dropdown-content" style={{cursor:"pointer"}}>
							  <a onClick={this.logout}>Logout</a>
							</span>
						</span> 	
					</span>
				</div></div>
)
	}
}

export default withRouter(NavBar1);
