import React, { Component } from 'react';
import './App.css';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path='/' render={() => (
                    <div className="app">
                        <div>我是业主</div>
                        <p>昵称</p>
                        <input type="text" placeholder="请输入昵称"/>
                        <p>请输入密码</p>
                        <input type="text" placeholder="请输入密码"/>
                        <Link to="/yezhu"><p>登录</p></Link>
                        <Link to="/zhuce"><p>新住户？请注册</p></Link>
                        <Link to="/wuye"><p>我是物业</p></Link>
                    </div>
                )} />

                {/*<Route path="/yezhu" component={Yezhu}/>*/}
                {/*<Route exact path="/wuye" component={Wuye}/>*/}
                {/*<Route path="/wuye/WHome" component={WHome}/>*/}
                {/*<Route path="/zhuce" component={zhuce}/>*/}
                {/*<Route path="/yezhu" component={}/>*/}
                <Route path="/yezhu" component={Yezhu}/>
                <Route path="/wuye" component={Wuye}/>
                <Route path="/wuye/WHome" component={WHome}/>
                <Route path="/zhuce" component={zhuce}/>
            </div>
        );
    }

}

export default App;


