const localstorage = window.localStorage;
function setUserLocal(option){
    option = {...option,}
    const data = JSON.stringify(option)
    localstorage.setItem('user',data);
}
function getUserLocal(){
    const obj= localstorage.getItem('user')
    return JSON.parse(obj)
}
function removeUserLocal(){
    localstorage.removeItem('user')
}
export {
    setUserLocal,
    getUserLocal,
    removeUserLocal,
}