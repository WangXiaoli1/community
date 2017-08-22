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
        var num=null;
        $('.zxs-pl-addin-li-p').click(function () {
            num++;
            if(num%2==1){
                $(this).parent().children(1).stop().slideDown('slow');
            }else {
                $('.zxs-pl-addin-li-ul').stop().slideUp('slow');
            }
        })
    };

    render() {
        return <div className="zxs-pl-wrap">
            <div className="zxs-pl-header">邮包</div>
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
            <div className="zxs-pl-table">

            </div>
            {/*所有邮包end*/}
        </div>
    }
}

export default Parcel;