import React, { Component } from 'react';
import '../../css/wuye/Wuye_Parcel.css';
import Parcel from './zxs_parcel';

class Wuye_Parcel extends Component {
    render() {
        return <div>
            <div  className="wuye_parcel">
                <h2>邮包</h2>
            </div>
            <Parcel/>
        </div>
    }
}

export default Wuye_Parcel;


