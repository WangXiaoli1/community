import React,{Component} from 'react';
import '../../css/wuye/Wuye_Home.css';
import Wuye_Notice from './Wuye_Notice';//通知
import Wuye_Parcel from './Wuye_Parcel';//邮包
import Wuye_Active from './Wuye_Active';//组织活动
import Wuye_AddUser from './Wuye_AddUser';//添加用户
import Wuye_Repair from './Wuye_Repair';//报修
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
                {/*发通知*/}
                <Route path="/wuye/WHome" exact component={Wuye_Notice}/>
                {/*邮包*/}
                <Route path="/wuye/Wuye_Parcel" component={Wuye_Parcel}/>
                {/*报修*/}
                <Route path="/wuye/Wuye_Repair" component={Wuye_Repair}/>
                {/*活动*/}
                <Route path="/wuye/Wuye_Active" component={Wuye_Active}/>
                {/*添加用户*/}
                <Route path="/wuye/Wuye_AddUser" component={Wuye_AddUser}/>
            </div>
            <ul className="w_footer">
                <Link to="/wuye/WHome"><li>发通知</li></Link>
                <Link to="/wuye/Wuye_Parcel"><li>邮包通知</li></Link>
                <Link to="/wuye/Wuye_Repair"><li>报修通知</li></Link>
                <Link to="/wuye/Wuye_Active"><li>组织活动</li></Link>
                <Link to="/wuye/Wuye_AddUser"><li>添加用户</li></Link>
            </ul>
            {/*change end*/}
        </div>
            </Router>
    }
}
export default WHome;