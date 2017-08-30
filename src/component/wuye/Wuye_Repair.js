
import React, { Component } from 'react';
import '../../css/wuye/Wuye_Repair.css';
import {getRepair} from '../../component/action/wxl-action';
import {connect} from 'react-redux';


class Wuye_Repair extends Component {
    componentDidMount (){
        getRepair();
    }
    render() {
        return (
            <div className="wuye_repair">
                {/*报修通知标题 start*/}
                <h2>报修通知</h2>
                {/*报修通知标题 end*/}
                {/*报修通知具体情况 start*/}
                {this.props.data.map((v,i)=>{
                    return (
                        <div className="repair_con" key={i}>
                                <p>业主名称：{v['user']}</p>
                                <p>居住地址：{v['address']}</p>
                                <p>报修内容：{v['repair']}</p>
                                <p>发布时间：{v['time']}</p>
                            <button>未处理</button>
                        </div>
                    )
                })}
                {/*<div className="repair_con">*/}
                    {/*<p>业主名称:王小立</p>*/}
                    {/*<p>居住地址:北京市朝阳区德馨家园3单元308室</p>*/}
                    {/*<p>报修内容:天花板漏水</p>*/}
                    {/*<p>发布时间:2017.8.23</p>*/}
                    {/*<button>未处理</button>*/}
                {/*</div>*/}
                    {/*报修通知具体情况 end*/}
                    </div>
    );
    }
}
let state=(e)=>{
    return{
        data:e.newRepair//reducer
    }
};
export default connect(state,getRepair)(Wuye_Repair);




