
import React, { Component } from 'react';
import {getChuzu} from '../../component/action/wxl-action';
import {connect} from 'react-redux';
import '../../css/yezhu/reset.css';
import '../../css/yezhu/zxs_Lease.css';

class Steward_Lease extends Component {
    componentDidMount (){
        getChuzu();
    }
    render() {
        return (
            <div className="zxs-le-wrap">
                <div className="zxs-md-header">房屋租赁</div>
                {this.props.data.map((v,i)=>{
                    return (
                        <div className="zxs-le-table" key={i}>
                            <p className="zxs-le-name">收件人：{v['user']}</p>
                            <div className="zxs-le-card">
                                <p>联系方式：{v['tel']}</p>
                                <p>房屋信息：{v['text1']}</p>
                                <p>租金：{v['text2']}</p>
                                <p>发布时间：{v['time']}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
let state=(e)=>{
    return{
        data:e.newChuzu//reducer
    }
};

export default connect(state,getChuzu)(Steward_Lease);