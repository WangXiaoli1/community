
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
export { newTongzhi,newParcel }