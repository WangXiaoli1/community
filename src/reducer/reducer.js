import {combineReducers} from 'redux';


import {updateDiscuss } from './lhx';
import {newChuzu,newRepair,newActivity } from './wxl';
import { newTongzhi,newParcel,newHousehold } from './zxs';



export default combineReducers({
	updateDiscuss,newTongzhi,newParcel,newChuzu,newRepair,newActivity,newHousehold

})
