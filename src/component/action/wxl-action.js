import config from '../../config';
import $ from 'jquery';
// 我的心情说说
const My_Moods = (data) => {
    return {
        type:'MYMOODS',
        data
    }
};
const getMy_Moods=(data) =>{
    return dispatch=>{
        return $.ajax({
            url:config.url+'/mymood',
            type:"post",
            data:{con:data},
            success:e=>{dispatch(My_Moods(e))},
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}

// 我的心情说说完



export {getMy_Moods}