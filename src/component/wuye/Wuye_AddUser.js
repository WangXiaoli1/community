
import React, { Component } from 'react';
import '../../css/wuye/Wuye_AddUser.css';
import Household from './zxs_household';

class Wuye_AddUser extends Component {
    render() {
        return <div>
            <div className="wuye_adduser">
                <h2>添加用户</h2>
            </div>
            <Household/>
        </div>
    }
}

export default Wuye_AddUser;


