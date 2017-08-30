import {combineReducers} from 'redux';

import { updateDiscuss } from './lhx';
// import {} from './wxl';
import { newTongzhi,newParcel } from './zxs';


export default combineReducers({
	updateDiscuss,newTongzhi,newParcel
})