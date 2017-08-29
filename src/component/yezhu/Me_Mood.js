/**
 * Created by Administrator on 2017/8/22.
 */
import React, { Component } from 'react';
import '../../css/yezhu/reset.css';
import '../../css/yezhu/zxs_mood.css';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import {getMy_Moods,postPinglun} from '../action/lhx-action';
import $ from 'jquery';




class Me_Mood extends Component {
    render() {
        return (
            <div className="zxs-md-wrap">
                <div className="zxs-md-header">
                    <Icon type="heart-o" /> 我的心情说说
                </div>

                {/*说说*/}
                {this.props.data.length > 0 && (
                    this.props.data.map((v,i) => {
                        return (
                            <div className="lhx-md-tell" key={i}>
                                {/*用户信息*/}
                                <dl className="lhx-md-msg">
                                    <dt className="lhx-md-msg-img"><img src={ v['img'] } alt=""/></dt>
                                    <dd className="nickName">{ v['nickName'] }</dd>
                                    <dd>{ v['time'] }</dd>
                                </dl>

                                {/*说说内容*/}
                                <p className="lhx-md-con">
                                    { v['con'] }
                                </p>

                                <div className="lhx-md-good">
                                    <Icon type="like-o"/>
                                    <span>{v['num']}</span>
                                    <Icon type="message" />
                                    {/*<span>5</span>*/}
                                </div>
                                <div className="lhx-pinglun">
                                    <input type="text" className="lhxPingLun"/>
                                    <button>确定</button>
                                </div>
                            </div>
                        )
                    })
                )
                }
                </div>

        );
    }
}

{/*export default Me_Mood*/}
let state = (data) => {
      return {
          data:data.updateDiscuss
      }
}

 export default connect(state,{getMy_Moods,postPinglun})(Me_Mood)

