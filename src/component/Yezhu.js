import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import '../css/yezhu/yezhu.css';
import Home from '../component/yezhu/Home';
import Steward from '../component/yezhu/Steward';
import Community from '../component/yezhu/Community';
import Me from '../component/yezhu/Me';

import PersonChange from '../component/yezhu/Me_PersonChange';
import Me_Mood from '../component/yezhu/Me_Mood';
import Me_Activity from '../component/yezhu/Me_Activity';
import Me_AboutMe from '../component/yezhu/Me_AboutMe';






class Yezhu extends Component {
  render() {
    return (
       <div>
           <div className="lhx-yezhu-change">
               <Route path="/yezhu" exact component={Home}/>
               {/*管家*/}
               <Route path="/yezhu/Steward" component={Steward}/>
               <Route path="/yezhu/Community" component={Community}/>
               <Route path="/yezhu/Me" component={Me}/>
               <Route path="/yezhu/Me_PersonChange" component={PersonChange}/>
               <Route path="/yezhu/Me_Mood" component={Me_Mood}/>
               <Route path="/yezhu/Me_Activity" component={Me_Activity}/>
               <Route path="/yezhu/Me_AboutMe" component={Me_AboutMe}/>
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