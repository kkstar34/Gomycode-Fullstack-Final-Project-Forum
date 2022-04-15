import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../redux/actions/questionAction';


function Banner() {
  const dispatch = useDispatch();

  const hanldeChangeFilter = (e) => {
    e.preventDefault();
    dispatch(updateFilter(e.target.value));


  }
  return (
    <div className="banner">
        <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                <div className="container banner__container">
                    <h1 className="text-white font-weight-bold">Questions</h1>
                    <p className="banner__description">
                        Ce forum est ouvert à toutes les questions liées à la programmation.
                        <br/>
                        (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)
                    </p>

                    <div className="w-100">
                        <input type="text" className="form-control form-control-lg w-100"  placeholder="Rechercher des questions" onChange={hanldeChangeFilter}/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Banner