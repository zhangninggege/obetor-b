import axios from 'axios';
const instance = axios.create({
    baseURL:'https://mallapi.duyiedu.com/'
});
instance.interceptors.response.use(res=>{
   if(res.data.status === 'fail'){
       return Promise.reject(res.data.msg);
   }else{
       return res.data;
   }
},err=>{
    Promise.reject(err)
});
function login(params){
    return instance.post('/passport/login',params)
}
export {
    login
}
