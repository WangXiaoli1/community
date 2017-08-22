/**
 * Created by Administrator on 2017/8/20.
 */
import React, { Component } from 'react';
import '../../css/yezhu/Me_person.css';
import PersonChange from '../../component/yezhu/Me_PersonChange';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class Person extends Component {

    render() {
        return (
            <div>
                {/*头像昵称住址*/}
                <Route path='/yezhu/Me' render={() => (
                    <Link to="/yezhu/Me_PersonChange">
                        <div className="lhx-person">
                            <div className="lhx-img">
                                <img src="../../img/tou.png" alt=""/>
                            </div>
                            <p>昵称</p>
                            <p>住址</p>
                        </div>
                    </Link>
                )}/>
                {/*<Route path="/yezhu/Me/PersonChange" component={PersonChange}/>*/}
                {/*头像昵称住址完*/}
            </div>
        );
    }
}

export default Person;