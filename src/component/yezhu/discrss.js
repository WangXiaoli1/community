import React from 'react' ;
import { connect } from 'react-redux'
import {getDiscuss,addFabulous} from '../action/lhx-action';
import '../../css/yezhu/discrss.css';
import { Icon } from 'antd';

class Discrss extends React.Component{
    componentDidMount (){
        console.log(this.props);
        this.props.getDiscuss()
    }
    addF (uid,num){
        return ()=>{
          this.props.addFabulous(uid,num)
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
                                <dd>{ v['nicename'] }</dd>
                                <dd>{ v['time'] }</dd>
                            </dl>

                            {/*说说内容*/}
                            <p className="lhx-md-con">
                                {/*赵晓姝300万买了一套房，非常奢侈，非常有钱，然后天天走好几十里路去公司写代码，天天加班，没时间回家哈哈哈哈哈哈，回家了也没时间休息，就知道学习，每天学习。*/}
                                { v['con'] }
                            </p>

                            <div className="lhx-md-good">
                                <Icon type="like-o" onClick={this.addF(v['uid'],v['num'])}/>
                                <span onClick={this.addF(v['uid'],v['num'])}>（{v['num']}）</span>
                                <Icon type="message" />
                                {/*<span>5</span>*/}
                            </div>
                            <div className="lhx-pinglun">
                                <input type="text"/>
                                <button>确定</button>
                            </div>
                        </div>
                    )
                })
            )
            }
            </div>
        )
    }
}
let state = (data) => {
    return {
        data:data.updateDiscuss
    }
}
export default connect(state,{getDiscuss,addFabulous})(Discrss)
