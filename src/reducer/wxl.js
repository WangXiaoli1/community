//房屋租赁
const newChuzu = (state=[],action) => {
    switch (action.type) {
        case 'CHUZU':
            return action.data;
        default:
            return state;

    }
};
//物业端/业主端 报修
const newRepair = (state=[],action) => {
    switch (action.type) {
        case 'REPAIR':
            return action.data;
        default:
            return state;

    }
};

//物业端 组织活动
const newActivity= (state=[],action) => {
    switch (action.type) {
        case 'ACTIVITY':
            return action.data;
        default:
            return state;

    }
};
export {newChuzu,newRepair,newActivity};