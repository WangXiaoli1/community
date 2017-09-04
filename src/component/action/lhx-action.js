import config from '../../config';
import $ from 'jquery';
// 发表论坛评论
// 点赞

//调取数据 start
const showDiscuss = (data,showNum) => {
    return {
        type:'SHOW_DIS',
        data,
        showNum
    }
};

const getDiscuss = (showNum) => {
    return (a) => {
        return fetch(config.url+'/luntan')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                return a(showDiscuss(data,showNum))
            })
            .catch((err) => {
                return new Error(err)
            })
    }

};

//调取数据 end


const Fabulous = (id,num) => {

    return {
        type:"Fabulous",
        id,
        num
    }
};

const addFabulous = (id,num) => {
    return (dispatch) => {
        return fetch(config.url+'/luntan/luntanNum',{
            method:"POST",
            headers:{
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:`id=${id}&num=${num+1}`
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                return dispatch(Fabulous(id,num))

            })
    }
}
// 评论
// const pingluns=(id,pinglun)=>{
//     return {
//         type:"PINGLUN",
//         id,
//         pinglun
//     }
// }
const postPinglun=(id,pinglun) =>{
    return dispatch=>{
        return $.ajax({
            url:config.url+'/luntan/addpinglun',
            type:"post",
            data:{"id":id,"pinglun":pinglun},
            success:e=>{dispatch(showDiscuss(e))},
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}
//评论完



// 发表论坛评论完

// 我的心情说说
const My_Moods = (data) => {
    return {
        type:'MYMOODS',
        data
    }
}
const getMy_Moods=(data) =>{
    return dispatch=>{
        return $.ajax({
            url:config.url+'/mymood',
            type:"post",
            data:{con:data},
            success:e=>{dispatch(showDiscuss(e))},
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}

// 我的心情说说完


// HOME调取数据
const showluntan = (data) => {
    return {
        type:'SHOW_LUNTAN',
        data
    }
}
const getluntan = () => {
    return (a) => {
        return fetch(config.url+'/luntan/part')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data)
                return a(showDiscuss(data))
            })
            .catch((err) => {
                return new Error(err)
            })
    }

}
// HOME调取数据完


export { getDiscuss , addFabulous , postPinglun , getMy_Moods,getluntan}