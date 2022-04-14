import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './../context/UserAuthContextProvider';

function GuestMiddleware({children}) {


 let {user} = useUserAuth();
    if(user) {
       return <Navigate to="/home" />
    }
  return children;
}

export default GuestMiddleware;