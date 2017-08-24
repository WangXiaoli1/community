/**
 * Created by Administrator on 2017/8/20.
 */
import React, { Component } from 'react';
import '../../css/yezhu/reset.css';
import '../../css/yezhu/zxs_Tongzhi.css';


class Steward_Tongzhi extends Component {
    render() {
        return (
            <div className="zxs-ti-wrap">
                <div className="zxs-md-header">小区物业通知</div>

                {/*发通知内容 start*/}
                <ul className="zxs-notice-content">
                    <li>
                        <span>发布人：赵晓姝</span><br/>
                        <span>发布内容：今天可能停电停水，请住户提前做好准备！</span><br/>
                        <span>发布时间：2017.8.11</span>
                    </li>
                    <li>
                        <span>发布人：李海璇</span><br/>
                        <span>发布内容：今天可能停电停水，请住户提前做好准备！</span><br/>
                        <span>发布时间：2017.8.11</span>
                    </li>
                </ul>
                {/*发通知内容 end*/}
            </div>
        );
    }
}

export default Steward_Tongzhi;