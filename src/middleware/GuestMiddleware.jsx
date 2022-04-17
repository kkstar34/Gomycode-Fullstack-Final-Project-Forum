import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './../context/UserAuthContextProvider';
import PageLoader from './../components/loaders/PageLoader';

function GuestMiddleware({ children }) {
   let { user, loading } = useUserAuth();


   if (loading) {
      return <PageLoader/>
   } else {
      if (user) {
         return <Navigate to="/home" />
      }
   }
   return children;
}

export default GuestMiddleware;