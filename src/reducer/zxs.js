
//物业通知
const newTongzhi = (state=[],action) => {
    switch (action.type) {
        case 'TONGZHI':
            return action.data;
        default:
            return state;

    }
};
//所有邮包
const newParcel = (state=[],action) => {
    switch (action.type) {
        case 'YOUBAO':
            return action.data;
        default:
            return state;

    }
};

//所有住户
const newHousehold = (state=[],action) => {
    switch (action.type) {
        case 'ZHUHU':
            return action.data;
        default:
            return state;

    }
};

// 物业邮包
const WU_addpackage = (state=[],action) => {
    switch (action.type) {
        case 'WU_YOUBAO':
            return action.data;
        default:
            return state;

    }
};
// 物业邮包完
export { newTongzhi,newParcel,newHousehold ,WU_addpackage}