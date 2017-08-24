/**
 * Created by Administrator on 2017/8/20.
 */
import React, { Component } from 'react';
import '../../css/yezhu/reset.css';
import '../../css/yezhu/zxs_Lease.css';

class Steward_Lease extends Component {
    render() {
        return (
            <div className="zxs-le-wrap">
                <div className="zxs-md-header">房屋租赁</div>
                
                {/*租赁信息*/}
                <div className="zxs-le-table">
                    <p className="zxs-le-name">发布人：赵晓姝</p>
                    <div className="zxs-le-card">
                        <p>联系方式：13663428487</p>
                        <p>房屋信息：三室一厅，100平米</p>
                        <p>租金：面议</p>
                        <p>发布时间：2017-8-23</p>
                    </div>
                </div>
                {/*租赁信息end*/}
            </div>
        );
    }
}

export default Steward_Lease;