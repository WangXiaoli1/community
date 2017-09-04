import React from 'react' ;
import { connect } from 'react-redux';
import {getDiscuss,addFabulous,postPinglun} from '../action/lhx-action';
import '../../css/yezhu/discrss.css';
import { Icon } from 'antd';
import $ from 'jquery';

class Discrss extends React.Component{
    componentDidMount (){
        var showNum=4;
        this.props.getDiscuss(showNum)
    }
    addF (id,num){
        return ()=>{
          this.props.addFabulous(id,num)
        }
    }
    pinLunTrue(x){

        return (ev)=>{
            // ev.persist()    react的事件源为空，因为react是虚拟DOM,并不会触发真正的事件源，如果需要看，就用ev.persist()

            var id=x;
            var pinglun=ev.target.parentNode.children[0].value;
            this.props.postPinglun(id,pinglun);

        }



    }
    render (){
        return (
            <div className="lhx-dis">
                论坛
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
                                {/*赵晓姝300万买了一套房，非常奢侈，非常有钱，然后天天走好几十里路去公司写代码，天天加班，没时间回家哈哈哈哈哈哈，回家了也没时间休息，就知道学习，每天学习。*/}
                                { v['con'] }
                            </p>

                            <div className="lhx-md-good">
                                <Icon type="like-o" onClick={this.addF(v['id'],v['num'])}/>
                                <span onClick={this.addF(v['id'],v['num'])}>{v['num']}</span>
                                <Icon type="message" />
                                {/*<span>5</span>*/}
                            </div>
                            <div className="lhx-pinglun">
                                <input type="text" className="lhxPingLun"/>
                                {/*<input type="text" className={"lhxPingLun"+i}/>*/}

                                <button onClick={this.pinLunTrue(v['id']).bind(this)}>确定</button>
                        </div>
                            {/*{v["arrs"].map((v2,i) => {*/}
                                {/*return (<p className="show-pinglun" key={i}>*/}
                                    {/*{v2['pinglun']}*/}
                                {/*</p>)*/}
                            {/*})*/}
                            {/*}*/}
                        </div>
                    )
                })
            )
            }
                <div className="lhx-kong"></div>
            </div>
        )
    }
}
let state = (data) => {
    return {
        data:data.updateDiscuss
    }
}
export default connect(state,{getDiscuss,addFabulous,postPinglun})(Discrss)
