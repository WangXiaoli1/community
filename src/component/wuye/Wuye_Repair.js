
import React, { Component } from 'react';
import '../../css/wuye/Wuye_Repair.css';


class Wuye_Repair extends Component {
    render() {
        return (
            <div className="wuye_repair">
                {/*报修通知标题 start*/}
                <h2>报修通知</h2>
                {/*报修通知标题 end*/}
                {/*报修通知具体情况 start*/}
                <div className="repair_con">
                    <p>业主名称:王小立</p>
                    <p>居住地址:北京市朝阳区德馨家园3单元308室</p>
                    <p>报修内容:天花板漏水</p>
                    <p>发布时间:2017.8.23</p>
                    <button>未处理</button>
                </div>
                    {/*报修通知具体情况 end*/}
                    </div>
    );
    }
}

export default Wuye_Repair;



