/**
 * Created by Administrator on 2017/8/22.
 */
import React, {Component} from 'react';
import '../../css/yezhu/reset.css';
import '../../css/wuye/zxs_household.css';
import $ from 'jquery';
import { Input,Icon } from 'antd';

class Household extends Component {
    componentDidMount = function () {
        // 下拉
        var num=null;
        $('.zxs-hd-addin-li-p').click(function () {
            num++;
            if(num%2==1){
                $(this).parent().children(1).stop().slideDown('slow');
            }else {
                $('.zxs-hd-addin-li-ul').stop().slideUp('slow');
            }
        })
    };

    render() {
        return <div className="zxs-hd-wrap">
            <div className="zxs-hd-header">邮包</div>
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
                                <span className="zxs-hd-addin-li-span">添加时间：8月22</span>
                                <button className="zxs-hd-connect">确认添加</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/*添加新住户end*/}

            {/*所有住户*/}
            <div className="zxs-hd-all"><Icon type="team" /> 所有住户</div>
            <div className="zxs-hd-table">

            </div>
            {/*所有住户end*/}
        </div>
    }
}

export default Household;