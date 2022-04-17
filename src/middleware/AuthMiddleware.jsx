import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./../context/UserAuthContextProvider";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { connexionRefused } from './../redux/actions/questionAction';
import PageLoader from './../components/loaders/PageLoader';

function AuthMiddleware({ children }) {
  let { user, loading } = useUserAuth();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  if (loading) {
    return <PageLoader/>;
  } else {
    if (!user) {
      dispatch(connexionRefused())
      return <Navigate to="/" />;
    }
  }
  return children;
}

export default AuthMiddleware;
