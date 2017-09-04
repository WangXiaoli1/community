import {combineReducers} from 'redux';


import {updateDiscuss } from './lhx';
import {newChuzu,newRepair,newActivity } from './wxl';
import { newTongzhi,newParcel,newHousehold,WU_addpackage } from './zxs';



export default combineReducers({
	updateDiscuss,newTongzhi,newParcel,newChuzu,newRepair,newActivity,newHousehold
	,WU_addpackage

})
