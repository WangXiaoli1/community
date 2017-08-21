import {combineReducers} from 'redux';
/*
import {} from './lhx';
import {} from './wxl';
import {} from './zxs';
*/


function a(state=[],action){
	switch(action.type){
		case 'SHOWDATA':
		return action.data;
		default:
		return state
	}
}

export default combineReducers({
	a
})