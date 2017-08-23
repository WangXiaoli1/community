
import React, { Component } from 'react';
import '../../css/wuye/Wuye_Active.css';

class Wuye_Active extends Component {

    componentDidMount() {
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
                    <li>
                        <span>发布人：赵晓姝</span><br/>
                        <span>发布内容：2017.8.23晚上7点小区广场举行K歌之王比赛</span><br/>
                        <span>发布时间：2017.8.10</span>
                    </li>
                </ul>
                {/*组织活动发表内容 end*/}
            </div>
        );
    }
}

export default Wuye_Active;

