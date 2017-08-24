import React, { Component } from 'react';
import '../../css/yezhu/Visitor.css';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'



class Visitor extends Component{
    constructor(){
        super()
    }
    render(){
        return <Link to='/yezhu/Home_VisitorIn'>
            <div className="wxl_visitor">
            <div className="visitor_text">
                <p>访客邀请</p>
                <p>扫码过门禁</p>
            </div>
            <img src="../img/code.png" alt=""/>
        </div>
            </Link>
    }
}
export default Visitor;
