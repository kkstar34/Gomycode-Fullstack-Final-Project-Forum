import React from 'react'
import { Link } from 'react-router-dom';

function Category({category}) {
  console.log(category.categoryQuestions)
  return (
    <>
            <li className="list-group-item d-flex justify-content-between align-items-center category__item">
           
                <Link className="category__link" to="/test">
                    {category.title}
                </Link>
                <span className="badge badge-primary badge-pill">{category.categoryQuestions.length}</span>
            </li>
    </>
  )
}

export default Category