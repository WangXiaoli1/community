const updateDiscuss = (state=[],action) => {
    switch (action.type) {
        case 'SHOW_DIS':
            return [...action.data];
        case 'Fabulous':
            return state.filter((v,i,a) => {
                if(v['uid']==action.uid){

                    v['num']=Number(action.num)+1
                }
                console.log()
                return v
            });

        default:
            return state;

    }
};
export default updateDiscuss
