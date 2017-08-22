import React, { Component } from 'react';
import '../css/yezhu/yezhu.css';

import Home from '../component/yezhu/Home';
import Steward from '../component/yezhu/Steward';
import Community from '../component/yezhu/Community';
import Me from '../component/yezhu/Me';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'





class Yezhu extends Component {
  render() {
    return (
       <div>
           <div className="lhx-yezhu-change">
               {/*<Route path="/yezhu/Home" exact component={Home}/>*/}
               <Route path="/yezhu" exact component={Home}/>
               <Route path="/yezhu/Steward" component={Steward}/>
               <Route path="/yezhu/Community" component={Community}/>
               <Route path="/yezhu/Me" component={Me}/>
           </div>
           <div className="lhx-footer">
               <Link to="/yezhu">住这儿</Link>
               <Link to="/yezhu/Steward">管家</Link>
               <Link to="/yezhu/Community">社区</Link>
               <Link to="/yezhu/Me">我</Link>
           </div>
       </div>
    );
  }
}

export default Yezhu;