import React, { Component } from 'react';
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
          <div className="lhx-footer">
              <Link to="/yezhu/Home">住这儿</Link>
              <Link to="/yezhu/Steward">管家</Link>
              <Link to="/yezhu/Community">社区</Link>
              <Link to="/yezhu/Me">我</Link>
          </div>
           <Route path="/yezhu/Home" component={Home}/>
           <Route path="/yezhu/Steward" component={Steward} />
           <Route path="/yezhu/Community" component={Community} />
           <Route path="/yezhu/Me" component={Me} />
       </div>
    );
  }
}

export default Yezhu;