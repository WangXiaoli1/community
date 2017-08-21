import React,{Component} from 'react';
import '../../css/wuye/WHome.css';
class WHome extends Component{
    render(){
        return <div>
            {/*title start*/}
            <h2 className="w_title">小区物业</h2>
            {/*title end*/}
            {/*change start*/}
            <div className="w_change">
                  <h3>切换样式</h3>
            </div>
            <ul className="w_footer">
                <li>发通知</li>
                <li>邮包</li>
                <li>报修</li>
                <li>组织活动</li>
                <li>添加用户</li>
            </ul>
            {/*change end*/}
        </div>
    }
}
export default WHome;