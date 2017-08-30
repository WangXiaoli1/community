
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getActivity} from '../../component/action/wxl-action';
import '../../css/yezhu/Steward_Plan.css';

class Steward_Plan extends Component {
    componentDidMount() {
        getActivity()
    }
    render() {
        return (
            <div className="Steward_Plan">
                <div className="plan_header">友邻计划（未开放）</div>
                <ul className="plan_conent">
                    {this.props.data.map((v,i)=>{
                        return (
                            <li key={i}>
                                <span>发布人:{v["person"]}</span><br/>
                                <span>发布内容：{v["con"]}</span><br/>
                                <span>发布时间：{v["time"]}</span>
                                <button>我要参加</button>
                            </li>
                        )

                    })}
                </ul>
            </div>
        );
    }
}
let state=(e)=>{
    return {
        data:e.newActivity
    }
};
export default connect(state,getActivity)(Steward_Plan)
