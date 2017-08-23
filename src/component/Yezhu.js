import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import '../css/yezhu/yezhu.css';
// HOME
import Home from '../component/yezhu/Home';
import Home_VisitorIn from '../component/yezhu/Home_VisitorIn';
import Home_ParcelIn from '../component/yezhu/Home_ParcelIn';
// 社区论坛
// import Community from '../component/yezhu/Community';
import Discrss from '../component/yezhu/discrss';
// 我
import Me from '../component/yezhu/Me';
import PersonChange from '../component/yezhu/Me_PersonChange';
import Me_Mood from '../component/yezhu/Me_Mood';
import Me_Activity from '../component/yezhu/Me_Activity';
import Me_AboutMe from '../component/yezhu/Me_AboutMe';
// 管家
import Steward from '../component/yezhu/Steward';
import Steward_Tongzhi from '../component/yezhu/Steward_Tongzhi';
import Steward_Plan from '../component/yezhu/Steward_Plan';
import Steward_Lease from '../component/yezhu/Steward_Lease';
import Steward_Complaint from '../component/yezhu/Steward_Complaint';

class Yezhu extends Component {
  render() {
    return (
       <div>
           <div className="lhx-yezhu-change">
               {/*Home*/}
               <Route path="/yezhu" exact component={Home}/>
               <Route path="/yezhu/Home_VisitorIn" exact component={Home_VisitorIn}/>
               <Route path="/yezhu/Home_ParcelIn" exact component={Home_ParcelIn}/>
               {/*管家*/}
               <Route path="/yezhu/Steward" component={Steward}/>
               <Route path="/yezhu/Steward_Tongzhi" component={Steward_Tongzhi}/>
               <Route path="/yezhu/Steward_Plan" component={Steward_Plan}/>
               <Route path="/yezhu/Steward_Lease" component={Steward_Lease}/>
               <Route path="/yezhu/Steward_Complaint" component={Steward_Complaint}/>
               {/*社区论坛*/}
               {/*<Route path="/yezhu/Community" component={Community}/>*/}
               <Route path="/yezhu/Discrss" component={Discrss}/>
               {/*我*/}
               <Route path="/yezhu/Me" component={Me}/>
               <Route path="/yezhu/Me_PersonChange" component={PersonChange}/>
               <Route path="/yezhu/Me_Mood" component={Me_Mood}/>
               <Route path="/yezhu/Me_Activity" component={Me_Activity}/>
               <Route path="/yezhu/Me_AboutMe" component={Me_AboutMe}/>


           </div>
           <div className="lhx-footer">
               <Link to="/yezhu">住这儿</Link>
               <Link to="/yezhu/Steward">管家</Link>
               {/*<Link to="/yezhu/Community">社区</Link>*/}
               <Link to="/yezhu/Discrss">社区</Link>
               <Link to="/yezhu/Me">我</Link>
           </div>
       </div>
    );
  }
}

export default Yezhu;