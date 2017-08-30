/**
 * Created by Administrator on 2017/8/22.
 */
import React, {Component} from 'react';
import '../../css/yezhu/reset.css';
import '../../css/wuye/zxs_parcel.css';
import {getParcel} from '../../component/action/zxs-action'
import $ from 'jquery';
import { Input,Icon } from 'antd';
import {connect} from 'react-redux';

class Parcel extends Component {
    componentDidMount = function () {
        // 下拉
        let bool=true
        $('.zxs-pl-addin-li-p').click(function () {
            if(bool){
                $(this).parent().children(1).stop().slideDown('slow');
            }else{
                $('.zxs-pl-addin-li-ul').stop().slideUp('slow');
            }
            bool=!bool
        })

        $('.zxs-pl-connect').click(function(){
            $('.zxs-pl-addin-li-ul').stop().slideUp('fast');
            bool=!bool

        })

        //所有邮包
        getParcel()//SHIJIAN

    };

    render() {
        return <div className="zxs-pl-wrap">
            {/*添加邮包*/}
            <div className="zxs-pl-add">
                <ul className="zxs-pl-addin">
                    <li className="zxs-pl-addin-li">
                        <p className="zxs-pl-addin-li-p"><Icon type="plus" /> 添加邮包</p>
                        <ul className="zxs-pl-addin-li-ul">
                            <li><Input placeholder="请输入收件人名称" /></li>
                            <li><Input placeholder="请输入收件人电话" /></li>
                            <li><Input placeholder="请输入地址" /></li>
                            <li><Input placeholder="请输入快递名称" /></li>
                            <li>
                                <span className="zxs-pl-addin-li-span">当前时间：8月22</span>
                                <button className="zxs-pl-connect">确认添加</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/*添加邮包end*/}


            {/*所有邮包*/}
            <div className="zxs-pl-all"><Icon type="smile-o" /> 所有邮包</div>
            {this.props.data.map((v,i)=>{
                return (
                    <div className="zxs-pl-table" key={i}>
                        <p className="zxs-pl-name">收件人：{v['recevier']}</p>
                        <div className="zxs-pl-card">
                            <p>电话：{v['phone']}</p>
                            <p>收货地址：{v['address']}</p>
                            <p>快递名称：{v['kuaidi']}</p>
                            <p>收货时间：{v['time']}</p>
                            <p>是否收货：{v['uif']}</p>
                        </div>
                    </div>
                )
            })}
            {/*<div className="zxs-pl-table">*/}
                {/*<p className="zxs-pl-name">收件人：萝莉</p>*/}
                {/*<div className="zxs-pl-card">*/}
                    {/*<p>电话：13663428487</p>*/}
                    {/*<p>收货地址：颐和天璟别墅园E区008天香栋</p>*/}
                    {/*<p>快递名称：韵达</p>*/}
                    {/*<p>收货时间：2017-8-23</p>*/}
                    {/*<p>是否收货：是</p>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*所有邮包end*/}
        </div>
    }
}
let state=(e)=>{
    return{
        data:e.newParcel//reducer
    }
}

export default connect(state,getParcel)(Parcel);//ACTION