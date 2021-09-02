// import react from 'react';
// import { useState, useEffect } from 'react';

// export default function IsLogin(result) {

//     const isLogin = false;
//     if( result == true && JSON.parse(sessionStorage.getItem("user")) != null){
//         isLogin = true
//         return isLogin
//     } else
//         return isLogin
// }

const isLogin = () => !!sessionStorage.getItem("user");
export default isLogin;