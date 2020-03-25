import axios from 'axios'
const urls = {
    getList: "/api/blog/list",
    login: "/api/user/login"
}
const httpServer = (method,adress,parmas) => {
    // let url = urls[adress]
     return axios({
         method,
         url:adress,
         data: parmas
     }).then(res=>{
         if(res.status === 200){
             return res.data
         }
     })
}
export { httpServer,urls}