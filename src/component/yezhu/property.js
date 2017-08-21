/**
 * Created by Administrator on 2017/8/21.
 */
import React, {Component} from 'react';
import '../../css/reset.css';
import '../../css/property.css';
import $ from 'jquery';
import {Rate,Icon} from 'antd';

class Property extends Component {
    state = {
        value: 3,
        count: null,
    }
    handleChange = (value) => {
        this.setState({value});
    }
    componentDidMount = function () {
        $('#newstop').ready(function () {

            var timer = null;
            clearInterval(timer);
            timer = setInterval(function() {
                $("#oli").animate({top:'-1.3rem'},500,function () {
                    $(this).css('top',0)
                    $("#oli").append($('#oli>li:first'))
                });
            }, 2000)
        });
    };

    render() {
        const {value} = this.state;
        return <div>
            {/*管家页面*/}
            <div className="zxs-wrap">
                <div className="zxs-header">去电管家</div>

                {/*留言*/}
                <div className="zxs-send">
                    <div className="zxs-textarea-out">
                        <textarea placeholder="请输入留言" className="zxs-textarea"></textarea>
                    </div>
                    <button className="zxs-submit">通知管家</button>
                </div>
                {/*留言end*/}

                {/*提示*/}
                <div id="zxs-newstop">
                    <p className="zxs-youcan">您可以这样与我们互动：</p>
                    <div>
                        <ul id="oli" style={{position:'relative'}}>
                            <li><span>维修</span>家里灯不亮了，请安排维修师来修一下</li>
                            <li><span>维修</span>马桶堵了，麻烦找人帮忙疏通</li>
                            <li><span>帮忙</span>忘拿钥匙了，求个开锁师傅</li>
                            <li><span>维修</span>天花板漏水啦，快来个维修工</li>
                            <li><span>帮忙</span>1608谢总的宠物狗丢了，有见到的请尽快联系他</li>
                            <li><span>帮忙</span>管家，怎么给一卡通充值？</li>
                        </ul>
                    </div>

                </div>
                {/*提示end*/}

                {/*评价*/}
                <div className="zxs-evaluate">
                    <p className="zxs-aug">上月综合物业服务评价</p>
                    <div className="zxs-stars">
                        <span><Rate onChange={this.handleChange} value={value}/>
                             {value && <span className="ant-rate-text">{value} 星</span>}
                        </span>
                    </div>
                </div>
                {/*评价end*/}

                {/*功能区*/}
                <ul className="zxs-shop">
                    <li>小区物业通知<span><Icon type="right-circle-o" /></span></li>
                    <li>友邻计划<span><Icon type="right-circle-o" /></span></li>
                    <li>房屋租赁<span><Icon type="right-circle-o" /></span></li>
                </ul>
                {/*功能区end*/}

                {/*投诉*/}
                <div className="zxs-complaint">
                    <button className="zxs-submit2">我要投诉</button>
                </div>
                {/*投诉end*/}

            </div>
        </div>
    }
}

export default Property;