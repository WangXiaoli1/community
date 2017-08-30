
import config from '../../config';
import $ from 'jquery';
//业主端房屋租赁
const chuzu=(data)=>{
    console.log(data)
    return{
        type:'CHUZU',
        data
    }
};
export function getChuzu(){
    return dispatch=>{
        return $.ajax({
            url:config.url+'/chuzu',
            type:"get",
            success:data=>{
                dispatch(chuzu(data))
            },
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}
//物业端/业主端 报修通知
const repair=(data)=>{
    return{
        type:'REPAIR',
        data
    }
};
export function getRepair() {
    return dispatch=> {
        return $.ajax({
            url: config.url + '/repair',
            type: "get",
            success: data=> {
                dispatch(repair(data))
            },
            error: function () {
                alert('出错了！！！')
            }
        })
    }
}
//物业组织活动
const activity=(data)=>{
    return{
        type:'ACTIVITY',
        data
    }
};
export function getActivity(){
    return dispatch=>{
        return $.ajax({
            url:config.url+'/activity',
            type:"get",
            success:data=>{
                dispatch(activity(data))
            },
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}
