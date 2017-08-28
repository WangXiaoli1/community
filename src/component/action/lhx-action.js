import config from '../../config';
import $ from 'jquery';
// 发表论坛评论
// 点赞
const showDiscuss = (data) => {
    return {
        type:'SHOW_DIS',
        data
    }
}
const getDiscuss = () => {
    return (a) => {
        return fetch(config.url+'/luntan')
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
export function pinglun(data){
    return {
        type:"PINGLUN",
        data
    }
}
export function post_pinglun(){
    return dispatch=>{
        return $.ajax({
            url:"http://localhost:8005/luntan/addpinglun",
            type:"get",
            success:e=>{dispatch(pinglun(e))},
            error:function () {
                alert('出错了！！！')
            }
        })
    }
}
//评论完


// const pinglun = (id,num) => {
//     return {
//         type:"PINGLUN",
//         id,
//         num
//     }
// };
// const post_pinglun= (id,con,time,nickName) => {
//     return (dispatch) => {
//         return fetch('http://localhost:8005/luntan/addpinglun,{
//             method:"POST",
//             headers:{
//                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//             },
//             body:`id=${id}&con=${con+1}`
//         })
//             .then((data) => {
//                 return data.json()
//             })
//             .then((data) => {
//                 return dispatch(pinglun(id,con))
//
//             })
//     }
// }
// 点赞完
export { getDiscuss , addFabulous }

// 发表论坛评论完
