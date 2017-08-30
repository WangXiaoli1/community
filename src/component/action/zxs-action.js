/**
 * Created by Administrator on 2017/8/21.
 */
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
