// 业主论坛
const updateDiscuss = (state=[],action) => {
    switch (action.type) {
        case 'SHOW_DIS':
            return [...action.data,action.showNum];
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
        // home部分论坛
        case 'SHOW_LUNTAN':
            return [...action.data];
        default:
            return state;
    }
};
// 业主论坛完




export { updateDiscuss}

