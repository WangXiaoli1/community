/**
 * Created by Administrator on 2017/8/22.
 */
import React, { Component } from 'react';
import '../../css/yezhu/reset.css';
import '../../css/yezhu/zxs_aboutme.css'


class Me_AboutMe extends Component {

    render() {
        return (
            <div className="zxs-ae-wrap">
                <div className="zxs-ae-header">关于我们</div>
                <div className="zxs-ae-logo">
                    <div className="zxs-ae-logo-in">
                        <img src="../img/logo.png" alt=""/>
                    </div>
                </div>
                <div className="zxs-ae-say">
                    <p>爱家是一个记录和分享社区生活的平台，经过短短的几年时间，已经稳步成长为国内较为完善的物业管理平台。</p>
                    <p>在爱家上，用户可以用照片和文字记录自己生活的点点滴滴，也可以通过社区面板获取最新的物业消息，或者向物业请求帮助等。</p>
                    <p>
                        所有内容均由用户自行发布，爱家只作为平台进行展示。用户通过爱家，找到自己需要的信息，享受更快速的社区服务。
                    </p>
                    <p>爱家，因为有爱所以有家。</p>
                </div>
            </div>
        );
    }
}

export default Me_AboutMe;