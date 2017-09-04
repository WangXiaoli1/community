
import config from '../../config';
import $ from 'jquery';
//管家页通知
const tongZhi=(data)=>{
    return{
        type:'TONGZHI',
        data
    }
}
export function getTongzhi(){
    return dispatch=>{
        return $.ajax({
            url:config.url+'/tongzhi/aa',
            type:"get",
            success:data=>{
                dispatch(tongZhi(data))
                },
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}

//所有邮包
const youBao=(data)=>{
    return{
        type:'YOUBAO',
        data
    }
}
export function getParcel(){
    return dispatch=>{
        return $.ajax({
            url:config.url+'/youbao/youbao',
            type:"get",
            success:data=>{
                dispatch(youBao(data))
            },
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}

//所有住户
const zhuHu=(data)=>{
    return{
        type:'ZHUHU',
        data
    }
}
export function getHousehold(){
    return dispatch=>{
        return $.ajax({
            url:config.url+'/zhuhu/zhuhu',
            type:"get",
            success:data=>{
                dispatch(zhuHu(data))
            },
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}


/*物业   添加邮包*/
export function add_package(data) {
    return {
        type:"ADD_PACKAGE",
        datas:data
    }
}
export function addpackage(name,address,phone,kuaidi){
    return dispatch=>{
        return $.ajax({
            type:"post",
            url:config.url+"/youbao/WU_mail",
            data:{
                name:name,
                address:address,
                phone:phone,
                kuaidi:kuaidi
            },
            success:function(data){
                dispatch(add_package(data))
            },
            error:function(){
                alert("错了")
            }
        })
    }
}
/*物业   添加邮包完*/

