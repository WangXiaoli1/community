import React, { Component } from 'react';
import '../../css/yezhu/Parcel.css';
class Parcel extends Component{
    constructor(){
        super()

    }
    render(){
        return <div className="wxl_parcel">
            <div className="parcel_text">
                <p>邮包</p>
                <p>收发更便捷</p>
            </div>
            <img src="../img/parcel.png" alt=""/>
        </div>
    }
}
export default Parcel;

