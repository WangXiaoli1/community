/**
 * Created by Administrator on 2017/8/20.
 */
import React, { Component } from 'react';
import {getTongzhi} from '../action/zxs-action';
import { connect } from 'react-redux';
import '../../css/yezhu/reset.css';
import '../../css/yezhu/zxs_Tongzhi.css';


class Steward_Tongzhi extends Component {
    componentDidMount (){
        this.props.getTongzhi()
    }
    render() {
        return (
            <div className="zxs-ti-wrap">
                <div className="zxs-md-header">小区物业通知</div>

                {/*发通知内容 start*/}
                <ul className="zxs-notice-content">
                    {this.props.data.map((v,i)=>{
                        return (
                            <li key={i}>
                                <span>发布人：{v['personName']}</span><br/>
                                <span>发布内容：{v['con']}</span><br/>
                                <span>发布时间：{v['time']}</span>
                            </li>
                        )
                    })}
                </ul>
                {/*发通知内容 end*/}
            </div>
        );
    }
}

// export default Steward_Tongzhi;
let state = (e) => {
    return {
        data:e.newTongzhi
    }
}
export default connect(state,{getTongzhi})(Steward_Tongzhi)
