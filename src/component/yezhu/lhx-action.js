
// 发表论坛评论
const showDiscuss = (data) => {
    return {
        type:'SHOW_DIS',
        data
    }
}
const getDiscuss = () => {
    return (a) => {
        return fetch('http://localhost:8005/luntan')
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
const Fabulous = (uid,num) => {
    return {
        type:"Fabulous",
        uid,
        num
    }
}
const addFabulous = (uid,num) => {
    return (dispatch) => {
        return fetch('http://localhost:8005/luntan/luntanNum',{
            method:"POST",
            headers:{
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:`uid=${uid}&num=${num+1}`
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                return dispatch(Fabulous(uid,num))

            })
    }
}
export { getDiscuss , addFabulous }

// 发表论坛评论完
