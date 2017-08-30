import React, { Component } from 'react';
import '../../css/wuye/Wuye_Notice.css';
class Wuye_Notice extends Component {
    //发表通知 start
    componentDidMount() {
    }
    handleClick(){
        var pubValue=this.refs.publish.value;
}
    //发表通知 end
    render() {
        return (
            <div className="wuye_notice">
                {/*发通知标题 start*/}
                <h2>发通知</h2>
                {/*发通知标题 end*/}
                {/*发通知input start*/}
                <input type="text" placeholder="通知" className="publish_notice" ref="publish"/>
                {/*发通知input end*/}
                {/*发表按钮 start*/}
                <button onClick={this.handleClick.bind(this)} className="notice_btn">发表</button>
                {/*发表按钮 end*/}
                {/*发通知内容 start*/}
                <ul className="notice_content">
                    <li>
                        <span>发布人：赵晓姝</span><br/>
                        <span>发布内容：今天可能停电停水，请住户提前做好准备！</span><br/>
                        <span>发布时间：2017.8.11</span>
                    </li>
                </ul>
                {/*发通知内容 end*/}
            </div>
        );
    }
}

export default Wuye_Notice;
