/**
 * Created by Administrator on 2017/8/22.
 */
import React, { Component } from 'react';
import '../../css/yezhu/reset.css';
import '../../css/yezhu/zxs_mood.css';
import { Icon } from 'antd';


class Me_Mood extends Component {
    render() {
        return (
            <div className="zxs-md-wrap">
                <div className="zxs-md-header">
                    <Icon type="heart-o" /> 我的心情说说
                </div>

                {/*说说*/}
                <div className="zxs-md-tell">
                    {/*用户信息*/}
                    <dl className="zxs-md-msg">
                        <dt className="zxs-md-msg-img"><img src="" alt=""/></dt>
                        <dd>赵晓姝土豪姐</dd>
                        <dd>2017-8-23发表</dd>
                    </dl>

                    {/*说说内容*/}
                    <p className="zxs-md-con">赵晓姝300万买了一套房，非常奢侈，非常有钱，然后天天走好
                        几十里路去公司写代码，天天加班，没时间回家哈哈哈哈哈哈，
                        回家了也没时间休息，就知道学习，每天学习。
                    </p>

                    <div className="zxs-md-good">
                        <Icon type="like-o" />
                        <span>10</span>
                        <Icon type="message" />
                        <span>5</span>
                    </div>
                </div>
                <div className="zxs-md-tell">
                    {/*用户信息*/}
                    <dl className="zxs-md-msg">
                        <dt className="zxs-md-msg-img"><img src="" alt=""/></dt>
                        <dd>老五</dd>
                        <dd>2017-8-13发表</dd>
                    </dl>

                    {/*说说内容*/}
                    <p className="zxs-md-con">老五300万买了一套房，非常奢侈，非常有钱，然后天天走好
                        几十里路去公司写代码，天天加班，没时间回家哈哈哈哈哈哈，
                        回家了也没时间休息，就知道学习，每天学习。
                    </p>

                    <div className="zxs-md-good">
                        <Icon type="like-o" />
                        <span>10</span>
                        <Icon type="message" />
                        <span>5</span>
                    </div>
                </div>
                <div className="zxs-md-tell">
                    {/*用户信息*/}
                    <dl className="zxs-md-msg">
                        <dt className="zxs-md-msg-img"><img src="" alt=""/></dt>
                        <dd>土豪姐</dd>
                        <dd>2016-8-23发表</dd>
                    </dl>

                    {/*说说内容*/}
                    <p className="zxs-md-con">买了一套房，非常奢侈，非常有钱，然后天天走好
                        几十里路去公司写代码，天天加班，没时间回家哈哈哈哈哈哈，
                        回家了也没时间休息，就知道学习，每天学习。
                    </p>

                    <div className="zxs-md-good">
                        <Icon type="like-o" />
                        <span>10</span>
                        <Icon type="message" />
                        <span>5</span>
                    </div>
                </div>
                {/*说说end*/}
            </div>
        );
    }
}

export default Me_Mood;