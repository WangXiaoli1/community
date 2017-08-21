import React, { Component } from 'react';
import './App.css';
import Boss from './component/Boss';
import Wuye from './component/Wuye';
import Yezhu from './component/Yezhu';
import zhuce from './component/zhuce';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path='/' render={() => (
            	<div className="app">
                    <div>我是业主</div>
                    <p>昵称</p>
                    <input type="text" placeholder="请输入昵称"/>
                    <p>请输入密码</p>
                    <input type="text" placeholder="请输入密码"/>
	            	<Link to="/yezhu"><p className="true">登陆</p></Link>
                    <Link to="/zhuce"><p className="true">新住户？请注册</p></Link>
	            	<Link to="/wuye"><p>我是物业</p></Link>
            	</div>
            )} />
            <Route path="/yezhu" component={Yezhu} />
            <Route path="/wuye" component={Wuye} />
            <Route path="/zhuce" component={zhuce} />

        </div>
      </Router>
    );
  }
}

export default App;
