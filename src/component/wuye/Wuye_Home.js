import React,{Component} from 'react';
import '../../css/wuye/Wuye_Home.css';
import Wuye_Notice from './Wuye_Notice';
import Wuye_Parcel from './Wuye_Parcel';
import Wuye_Active from './Wuye_Active';
import Wuye_AddUser from './Wuye_AddUser';
import Wuye_Repair from './Wuye_Repair';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class WHome extends Component{
    render(){
        return <Router>
            <div>
            {/*change start*/}
            <div className="w_change">
                <Route path="/wuye" exact component={Wuye_Notice}/>
                <Route path="/wuye/Wuye_Parcel" component={Wuye_Parcel}/>
                <Route path="/wuye/Wuye_Repair" component={Wuye_Repair}/>
                <Route path="/wuye/Wuye_Active" component={Wuye_Active}/>
                <Route path="/wuye/Wuye_AddUser" component={Wuye_AddUser}/>
            </div>
            <ul className="w_footer">
                <Link to="/wuye"><li>发通知</li></Link>
                <Link to="/wuye/Wuye_Parcel"><li>邮包</li></Link>
                <Link to="/wuye/Wuye_Repair"><li>报修</li></Link>
                <Link to="/wuye/Wuye_Active"><li>活动</li></Link>
                <Link to="/wuye/Wuye_AddUser"><li>添加用户</li></Link>
            </ul>
            {/*change end*/}
        </div>
            </Router>
    }
}
export default WHome;