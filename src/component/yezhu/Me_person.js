/**
 * Created by Administrator on 2017/8/20.
 */
import React, { Component } from 'react';
import '../../css/yezhu/Me_person.css';

class Person extends Component {

    render() {
        return (
            <div className="lhx-person">
                {/*头像昵称住址*/}
                <div className="lhx-img">
                    <img src="../img/tou.png" alt=""/>
                </div>
                <p>昵称</p>
                <p>住址</p>
                {/*头像昵称住址完*/}
            </div>
        );
    }
}

export default Person;