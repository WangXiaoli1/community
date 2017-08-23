import React, { Component } from 'react';
import '../../css/yezhu/Parcel.css';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Parcel extends Component{
    constructor(){
        super()
    }
    render(){
        return <Link to='/yezhu/Home_ParcelIn'> <div className="wxl_parcel">
            <div className="parcel_text">
                <p>邮包</p>
                <p>收发更便捷</p>
            </div>
            <img src="../img/parcel.png" alt=""/>
        </div></Link>
    }
}
export default Parcel;

