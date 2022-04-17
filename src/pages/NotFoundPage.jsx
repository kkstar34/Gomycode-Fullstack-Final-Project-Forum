import React from 'react'
import {  useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import errorPage1Animation from '../lotties/errorPage1.json';

function NotFoundPage() {
    const navigate = useNavigate();
  return (
    <div>
            <Lottie animationData={errorPage1Animation} style={{height: "500px"}} />
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <button className="btn btn-primary text-white" onClick={() => navigate('/')}>Aller à l'accueil</button>
                </div>
            </div>
         

    </div>
  )
}

export default NotFoundPage