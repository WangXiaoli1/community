import React, { Component } from 'react';
import '../../css/yezhu/Visitor.css';
class Visitor extends Component{
    constructor(){
        super()

    }
    render(){
        return <div className="wxl_visitor">
            <div className="visitor_text">
                <p>访客邀请</p>
                <p>扫码过门禁</p>
            </div>
            <img src="../img/code.png" alt=""/>
        </div>
    }
}
export default Visitor;
