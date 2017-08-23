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
        let bool=true
        $('.zxs-hd-addin-li-p').click(function () {
            if(bool){
                $(this).parent().children(1).stop().slideDown('slow');
            }else{
                $('.zxs-hd-addin-li-ul').stop().slideUp('slow');
            }
            bool=!bool


        })

        $('.zxs-hd-connect').click(function(){
            $('.zxs-hd-addin-li-ul').stop().slideUp('slow');
            bool=!bool

        })

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

            {/*所有住户*/}
            <div className="zxs-hd-all"><Icon type="team" /> 所有住户</div>
            <div className="zxs-hd-table">
                <p className="zxs-hd-name">户主：赵晓姝</p>
                <div className="zxs-hd-card">
                    <p>性别：女</p>
                    <p>联系方式：13663428487</p>
                    <p>住址：颐和天璟别墅园E区008天香栋</p>
                    <p>入住时间：2017-8-23</p>
                </div>
            </div>
            <div className="zxs-hd-table">
                <p className="zxs-hd-name">户主：王小立</p>
                <div className="zxs-hd-card">
                    <p>性别：女</p>
                    <p>联系方式：13663428487</p>
                    <p>住址：颐和天璟别墅园A区006郁金香栋</p>
                    <p>入住时间：2017-8-23</p>
                </div>
            </div>
            <div className="zxs-hd-table">
                <p className="zxs-hd-name">户主：赵晓姝</p>
                <div className="zxs-hd-card">
                    <p>性别：女</p>
                    <p>联系方式：13663428487</p>
                    <p>住址：颐和天璟别墅园E区008天香栋</p>
                    <p>入住时间：2017-8-23</p>
                </div>
            </div>
            <div className="zxs-hd-table">
                <p className="zxs-hd-name">户主：赵晓姝</p>
                <div className="zxs-hd-card">
                    <p>性别：女</p>
                    <p>联系方式：13663428487</p>
                    <p>住址：颐和天璟别墅园E区008天香栋</p>
                    <p>入住时间：2017-8-23</p>
                </div>
            </div>
            <div className="zxs-hd-table">
                <p className="zxs-hd-name">户主：赵晓姝</p>
                <div className="zxs-hd-card">
                    <p>性别：女</p>
                    <p>联系方式：13663428487</p>
                    <p>住址：颐和天璟别墅园E区008天香栋</p>
                    <p>入住时间：2017-8-23</p>
                </div>
            </div>
            {/*所有住户end*/}
        </div>
    }
}

export default Household;