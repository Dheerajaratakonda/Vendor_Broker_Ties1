import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import Vendor from '../broker vendor/vendor.jsx';
import Item from '../broker vendor/item.jsx';
import Opco from '../broker vendor/opco.jsx';
import Supc from '../broker vendor/supc.jsx';
import NavBar1 from '../admin welcome/navbar.jsx';
import AllFilters from '../broker vendor/filters.jsx';
class ABMainScreen extends React.Component{
	constructor(props){
		super(props);
		this.state={data: {	
							leadBroker:'Ashely',
							email:'ashely@com',
							startdate:'', 
							enddate:'',
							value: '1'
					},
					edit:"none"
					
					};
		this.name=this.props.location.state.data;
		
		this.group=this.props.location.state.group;
		this.setEmpState = this.setEmpState.bind(this);
	
		this.item=this.item.bind(this);
		this.edit=this.edit.bind(this);
	}
	
    componentWillMount(){
        if (this.group==="admin"){
            this.setState({edit:"block"});
            this.row=this.props.location.state.row;
        }
    }
	
	setEmpState(e){
			var field = e.target.name;
			var value = e.target.value;
			this.state.data[field] = value;
			this.setState({ data: this.state.data, value: event.target.value });
            this.state = {value: 'coconut'};
    }
	
  	
	item(e){
		this.props.history.push({pathname:'/allitems',state:{data:this.name}});
	}	
		
	enableDesc(){
		this.setState({searchDesc:true});
	}
    
    edit(e){
        this.props.history.push({pathname:"/edit",
                                state:{
                                    data:this.name,
                                    row:this.row
                                }})
    }
	render(){
		return 	<div className="container-fluid">
					<NavBar1 name={this.name}/><br/><br/>
					<div className="bms" style={{fontWeight:"bold"}}><span>AC </span><span>ACOSTA </span>
                        <a href="#" data-toggle="tooltip" style={{display:this.state.edit}} data-placement="bottom" title="Edit" onClick={this.edit}><i className="fa fa-edit my"></i></a>
							</div>
							<br/><br/>
					<form className="form-horizontal">
					
					<div className="row">
						<div className="col-md-6"><Item/></div>
						
					</div><br/><br/>

					<div className="row" style={{align:"center"}}>
						<div><AllFilters /></div>
					</div>	
					
										
			</form>
			<br/><br/><br/>
			</div>
	
}

}
export default ABMainScreen;