import React, { Component } from 'react';
import WHome from '../component/wuye/Wuye_Home';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class Wuye extends Component {
    // click(e){
    //         e.preventDefault()
    // }
  render() {
    return (
        <div>
            <Route path='/' render={()=>(<div className="app">
                    <div>我是物业</div>
                    <p>姓名</p>
                    <input type="text" placeholder="请输入姓名"/>
                    <p>密码</p>
                    <input type="text" placeholder="请输入密码"/>
                    {/*<Link to="/wuye/WHome" onClick={(e)=>(this.click(e))}><p>登录</p></Link>*/}
                    <Link to="/wuye/WHome"><p>登录</p></Link>
                </div>
            )}/>
        </div>
    );
  }
}

export default Wuye;