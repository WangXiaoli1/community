/**
 * Created by Administrator on 2017/8/20.
 */
const newTongzhi = (state=[],action) => {
    switch (action.type) {
        case 'TONGZHI':
            return action.data;
        default:
            return state;

    }
};
export { newTongzhi }