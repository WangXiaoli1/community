/**
 * Created by Administrator on 2017/8/20.
 */

const updateDiscuss = (state=[],action) => {
    switch (action.type) {
        case 'SHOW_DIS':
            return [...action.data];
        case 'Fabulous':
            return state.filter((v,i,a) => {
                if(v['id']==action.id){

                    v['num']=Number(action.num)+1
                }
                return v;
            });
        // 评论
        case 'PINGLUN':
            return [...action.data];
        // 我的心情说说
        case 'MYMOODS':
            return [...action.data];
        default:
            return state;
    }
};
export { updateDiscuss }
