/**
 * Created by Administrator on 2017/8/22.
 */
import React, {Component} from 'react';
import '../../css/yezhu/reset.css';
import '../../css/wuye/zxs_parcel.css';
import $ from 'jquery';
import { Input,Icon } from 'antd';

class Parcel extends Component {
    componentDidMount = function () {
        // 下拉
        let bool=true
        $('.zxs-pl-addin-li-p').click(function () {
            $('.zxs-pl-success').stop().hide();
            if(bool){
                $(this).parent().children(1).stop().slideDown('slow');
            }else{
                $('.zxs-pl-addin-li-ul').stop().slideUp('slow');
            }
            bool=!bool


        })

        $('.zxs-pl-connect').click(function(){
            $('.zxs-pl-addin-li-ul').stop().slideUp('fast');
            $('.zxs-pl-success').stop().show();
            bool=!bool

        })

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

            {/*添加成功*/}
            <div className="zxs-pl-success">
                <Icon type="check-circle-o" /> 添加成功！<br/>
                <span className="zxs-pl-come">入住码：11231221</span>
            </div>
            {/*添加成功end*/}

            {/*所有邮包*/}
            <div className="zxs-pl-all"><Icon type="smile-o" /> 所有邮包</div>
            <div className="zxs-pl-table">
                <p className="zxs-pl-name">收件人：萝莉</p>
                <div className="zxs-pl-card">
                    <p>电话：13663428487</p>
                    <p>收货地址：颐和天璟别墅园E区008天香栋</p>
                    <p>快递名称：韵达</p>
                    <p>收货时间：2017-8-23</p>
                    <p>是否收货：是</p>
                </div>
            </div>
            <div className="zxs-pl-table">
                <p className="zxs-pl-name">收件人：萝莉</p>
                <div className="zxs-pl-card">
                    <p>电话：13663428487</p>
                    <p>收货地址：颐和天璟别墅园E区008天香栋</p>
                    <p>快递名称：韵达</p>
                    <p>收货时间：2017-8-23</p>
                    <p>是否收货：是</p>
                </div>
            </div>
            <div className="zxs-pl-table">
                <p className="zxs-pl-name">收件人：萝莉</p>
                <div className="zxs-pl-card">
                    <p>电话：13663428487</p>
                    <p>收货地址：颐和天璟别墅园E区008天香栋</p>
                    <p>快递名称：韵达</p>
                    <p>收货时间：2017-8-23</p>
                    <p>是否收货：是</p>
                </div>
            </div>
            {/*所有邮包end*/}
        </div>
    }
}

export default Parcel;