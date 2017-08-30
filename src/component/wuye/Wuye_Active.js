
import React, { Component } from 'react';
import '../../css/wuye/Wuye_Active.css';
import {connect} from 'react-redux';
import {getActivity} from '../../component/action/wxl-action';

class Wuye_Active extends Component {

    componentDidMount() {
        getActivity()
    }
    Click(){
        var activeValue=this.refs.active_val.value;
    }

    render() {
        return (
            <div className="wuye_active">
                {/*组织活动标题 start*/}
                <h2>组织活动</h2>
                {/*组织活动标题 end*/}
                {/*组织活动 input start*/}
                <input type="text" placeholder="活动" className="active_val" ref="active_val"/>
                {/*组织活动 input end*/}
                {/*组织活动发表按钮 start*/}
                <button onClick={this.Click.bind(this)} className="active_btn">发表</button>
                {/*组织活动发表按钮 end*/}
                {/*组织活动发表内容 start */}
                <ul className="active_content">
                    {this.props.data.map((v,i)=>{
                        return (
                            <li key={i}>
                                <span>发布人:{v["person"]}</span><br/>
                                <span>发布内容：{v["con"]}</span><br/>
                                <span>发布时间：{v["time"]}</span>
                            </li>
                            )

                    })}
                </ul>
                {/*组织活动发表内容 end*/}
            </div>
        );
    }
}
let state=(e)=>{
    return {
        data:e.newActivity
    }
};
export default connect(state,getActivity)(Wuye_Active)


