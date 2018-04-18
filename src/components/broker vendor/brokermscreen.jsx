import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Vendor from './vendor.jsx';
import Item from './item.jsx';
import Opco from './opco.jsx';
import Supc from './supc.jsx';
import NavBar1 from '../admin welcome/navbar.jsx';
import AllFilters from './filters.jsx';
class MainScreen2 extends React.Component{
	constructor(props){
		super(props);
		console.log("broker login details",this.props.location.state);
		this.state={data: {	
							brokerName:'',
							mailId:'',
							brokerCode:'',
							brokerNumber:'',
							brokerUserId:''
					},
					edit:"none",
					viewAll:"block",
					upload:"block",
					item:"block"
					};
		this.name=this.props.location.state.data;
		
		this.group=this.props.location.state.group;
		this.setEmpState = this.setEmpState.bind(this);
	
		this.item=this.item.bind(this);
		this.edit=this.edit.bind(this);
	
	}
	
	
    componentWillMount(){
		this.row=this.props.location.state.row;
		console.log("row brokermscreen for admin",this.row);
        if (this.group==="admin"){
			this.state.data={
				brokerCode:this.row.code,
				brokerName:this.row.name,
				brokerNumber:this.row.brokerNumber,
				mailId:this.row.mailId
			};
			
			this.setState({
				data:this.state.data
			})
			this.setState({edit:"inline-block",viewAll:"none",upload:"none",item:"none"});
            
			console.log("state brokermscreen for admin",this.state.data);
        }
		else if(this.group==="user"){
			
			this.state.data={
				brokerCode:this.props.location.state.brokerCode,
				brokerName:this.props.location.state.brokerName,
				brokerNumber:this.props.location.state.brokerNumber,
				mailId:this.props.location.state.mailId,
				brokerUserId:this.props.location.state.brokerUserId
				
			};
			
			this.setState({
				data:this.state.data
			})
		}
		console.log("broker state",this.state.data);
			
		
    }
	
	setEmpState(e){
			var field = e.target.name;
			var value = e.target.value;
			this.state.data[field] = value;
			this.setState({ data: this.state.data, value: event.target.value });
            this.state = {value: 'coconut'};
			this.fileValidation = this.fileValidation.bind(this);
    }
	
  	
	item(e){
		this.props.history.push({pathname:'/allitems',
		state:{data:this.name,group:this.group,mailId:this.state.data.mailId, brokerNumber:this.state.data.brokerNumber,brokerCode:this.state.data.brokerCode,brokerName:this.state.data.brokerName,brokerUserId:this.state.data.brokerUserId}});
	}	
		
	enableDesc(){
		this.setState({searchDesc:true});
	}
    
    edit(e){
        this.props.history.push({pathname:"/edit",
                                state:{
                                    data:this.name,
                                    row:this.row,
									group:this.group
                                }})
    }
	                fileValidation(e){
                                e.preventDefault();
                                var fileInput = document.getElementById('file');
                                var filePath = fileInput.value;
                                var file = fileInput.files[0]
                                var arr = []
                                var allowedExtensions = /(\.csv|\.xlsx)$/i;
                                if(!allowedExtensions.exec(filePath)){
                                                alert('Please upload file having extensions .csv or .xlsx only.');
                                                fileInput.value = '';
                                                return false;
                                }else{
                                                arr.push(file)
                                                console.log("Uploaded File:", arr)
                                                alert("Upload Successful")
                                }
                }

	render(){
		return 	<div className="container-fluid">
					<NavBar1 name={this.name} group={this.group} brokerNumber={this.state.data.brokerNumber} brokerCode={this.state.data.brokerCode} brokerName={this.state.data.brokerName} mailId={this.state.data.mailId}/>
					<br/><br/><br/>
								
					<div>
					<button className="btn btn-primary" onClick={this.edit} style={{float:"right",border:"none",backgroundColor:"mediumturquoise",display:this.state.edit}}>Edit broker details</button> 
	<div className="row">
	<h3 className="headings"><span>{this.state.data.brokerCode} </span><span>{this.state.data.brokerName}  </span></h3>  
</div><button type="submit" className="button button2 btn btn-primary aitem" style={{display:this.state.item}} onClick={this.item}>view all items</button>
	
	
							
							<br/>
							</div>
							
					
					
					
					<div className="row tab" style={{align:"center"}}>
						<div><AllFilters brokerNumber={this.state.data.brokerNumber}/></div>
					</div>	<br />
					<div className="row">
					<div className="col-md-6 col-xs-12 upload"  style={{display:this.state.upload}}>
                        <form>
                            <input type="file" id="file" style={{marginLeft:"-301px"}}/><br />
                            <button type="submit" className="button button2 btn btn-primary upload" style={{marginLeft:"-501px"}} onClick={this.fileValidation} >Upload</button>
                        </form>
                    </div>

					
					
			</div>
			
			</div>
	
}

}
export default MainScreen2;