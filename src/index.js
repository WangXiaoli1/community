import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';


import Wuye from './component/Wuye';
import Yezhu from './component/Yezhu';
import zhuce from './component/zhuce';
import WHome from './component/yezhu/Home';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import './rem'

let store=createStore(reducer,applyMiddleware(thunk))
ReactDOM.render(
	<Provider store={store}>
		<Router>
	{/*<App/>*/}
	<div>
			<Route path="/" exact component={App}/>
		<Route path="/yezhu" component={Yezhu}/>
		<Route exact path="/wuye" component={Wuye}/>
		<Route path="/wuye/WHome" component={WHome}/>
		<Route path="/zhuce" component={zhuce}/>
	</div>
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
