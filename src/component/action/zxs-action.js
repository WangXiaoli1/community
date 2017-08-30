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
                //console.log(data)
                dispatch(tongZhi(data))
                },
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}
