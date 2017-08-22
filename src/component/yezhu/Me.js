
import React, { Component } from 'react';
import '../../css/yezhu/Me.css';
import Person from '../../component/yezhu/Me_person';
class Me extends Component {
    render() {
        return (<div>
                {/*头像昵称住址*/}
                <Person/>
                {/*头像昵称住址完*/}
                {/*人员*/}
                <div className="lhx-crew">
                    {/*身份验证*/}
                    <div className="lhx-identity">
                        <p>身份</p>
                        <p>待审核</p>
                    </div>
                    {/*身份验证完*/}
                    {/*当前人数*/}
                    <div className="lhx-num">
                        <p>当前房屋人数</p>
                        <p>0</p>
                    </div>
                    {/*当前人数完*/}
                </div>
                {/*人员完*/}
                {/*我发表的心情说说*/}
                <div className="Me_list">
                    <span>我发表的心情说说</span>
                    <span>&gt;</span>
                </div>
                {/*我发表的心情说说完*/}

                {/*我参与的活动*/}
                <div className="Me_list">
                    <span>我参与的活动</span>
                    <span>&gt;</span>
                </div>
                {/*我参与的活动完*/}

                {/*关于我们*/}
                <div className="Me_list">
                    <span>关于我们</span>
                    <span>&gt;</span>
                </div>
                {/*关于我们完*/}

                {/*退出登录*/}
                <div className="Me_quit">
                    退出登录
                </div>
                {/*退出登录完*/}
            </div>
        );
    }
}

export default Me;