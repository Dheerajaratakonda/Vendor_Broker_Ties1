import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect,BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import adminWelcome from './components/admin welcome/adminWelcome';
import Login from './components/login/login';
import EditScreen from './components/admin welcome/editScreen';
import AddScreen from './components/admin welcome/addScreen';
import Reset from './components/resetPassword/reset';
import MainScreen2 from './components/broker vendor/brokermscreen';
import App from './components/broker vendor/filters';
import Vendor from './components/vendor/vendor';
import VendorOpco from './components/vendor opco/vendoropco';
import DuplicateReport from './components/reports/duplicate_report';
import BrokerVendorReport from './components/reports/broker_vendor_report'
import AuditLogs from './components/reports/audit_logs';
import Unassigned from './components/reports/unassigned_dropdown';
import AllItems from './components/broker vendor/allitems';
import Notif from './components/reports/notification';
// import Login1 from './login';
// ReactDOM.render(<Login1/>,document.querySelector('.container-fluid'));
ReactDOM.render((<Router>
<div><Switch>
<Route exact path = "/" component = {Login} />
<Route path="/admin" component={adminWelcome} />
	
<Route path="/edit" component={EditScreen} />
<Route path="/add" component={AddScreen} />
<Route path="/reset" component={Reset} />
<Route path="/broker" component={MainScreen2}/>
<Route path="/vendor" component={Vendor}/>
<Route path="/opcoviewer" component={VendorOpco}/>
<Route path="/logout" component={Login} />
<Route path="/duplicate_report" component={DuplicateReport} />
<Route path="/broker_vendor_report" component={BrokerVendorReport} />
<Route path="/audit_logs" component={AuditLogs}/>
<Route path="/allitems" component={AllItems}/>
<Route path="/viewbroker" component={MainScreen2}/>
<Route path="/unassigned_report" component={Unassigned}/>
<Route path="/notification" component={Notif}/>
</Switch>
</div>

</Router>),document.querySelector('.container-fluid'));
