import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup'

class Reset extends React.Component{
constructor(props){
		super(props);
		this.toggle1=this.toggle1.bind(this);		
	}
	
	
	toggle1(e){
	{
    var x = document.getElementById('rname').value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }	
		
	}
	}

render(){
 return <div >
<div className="row">
<div className="rrow">
<div><img className="img-responsive rimg" src="./assets/sysco.jpg"/></div><br/>
<div className="rtext">Reset your password</div><br/>
<div className="rbox">
<div className="rone">Enter your email address and we will send you a link to reset your password</div><br/>
<input type = "text" className='rmyClass' id="rname"  name="name"  placeholder = "Enter your email address"  style={{width:"80%"}}/><br/>
<br/><Button type="submit" bsStyle="success" className="rbutton" onClick={this.toggle1}> Send password reset email </Button><br/>
<br/></div>
</div>
</div>
</div>
        }
}

export default Reset;
