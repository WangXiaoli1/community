/**
 * Created by Administrator on 2017/8/22.
 */
import React, {Component} from 'react';
import '../../css/yezhu/reset.css';
import '../../css/wuye/zxs_household.css';
import $ from 'jquery';
import { Input,Icon } from 'antd';
import { getHousehold } from '../../component/action/zxs-action';
import {connect} from 'react-redux';

class Household extends Component {
    componentDidMount = function () {
        // 下拉
        let bool=true
        $('.zxs-hd-addin-li-p').click(function () {
            $('.zxs-hd-success').stop().hide();
            if(bool){
                $(this).parent().children(1).stop().slideDown('slow');
            }else{
                $('.zxs-hd-addin-li-ul').stop().slideUp('slow');
            }
            bool=!bool


        })

        $('.zxs-hd-connect').click(function(){
            $('.zxs-hd-addin-li-ul').stop().slideUp('fast');
            $('.zxs-hd-success').stop().show();
            bool=!bool

        })

        //所有住户
        getHousehold() //zxs-action

    };

    render() {
        return <div className="zxs-hd-wrap">
            {/*添加新住户*/}
            <div className="zxs-hd-add">
                <ul className="zxs-hd-addin">
                    <li className="zxs-hd-addin-li">
                        <p className="zxs-hd-addin-li-p"><Icon type="usergroup-add" /> 添加新住户</p>
                        <ul className="zxs-hd-addin-li-ul">
                            <li><Input placeholder="请输入住户名字" /></li>
                            <li><Input placeholder="请输入用户性别" /></li>
                            <li><Input placeholder="请输入住户电话" /></li>
                            <li><Input placeholder="请输入住户住址" /></li>
                            <li>
                                <span className="zxs-hd-addin-li-span">入住时间：8月22</span>
                                <button className="zxs-hd-connect">确认添加</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/*添加新住户end*/}
            
            {/*添加成功*/}
            <div className="zxs-hd-success">
                <Icon type="check-circle-o" /> 添加成功！<br/>
                <span className="zxs-hd-come">入住码：11231221</span>
            </div>
            {/*添加成功end*/}

            {/*所有住户*/}
            <div className="zxs-hd-all"><Icon type="team" /> 所有住户</div>

            {this.props.data.map((v,i)=>{
                return (
                    <div className="zxs-hd-table" key={i}>
                        <p className="zxs-hd-name">户主：{v['yeName']}</p>
                        <div className="zxs-hd-card">
                            <p>性别：{v['sex']}</p>
                            <p>联系方式：{v['phone']}</p>
                            <p>住址：{v['adress']}</p>
                            <p>入住时间：{v['time']}</p>
                        </div>
                    </div>
                )
            })}
            {/*所有住户end*/}
        </div>
    }
}
let state=(e)=>{
    return{
        data:e.newHousehold//reducer
    }
}
export default connect(state,getHousehold)(Household);