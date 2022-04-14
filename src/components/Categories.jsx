
import React from 'react'
import Category from './Category';


function Categories({categories}) {

    

  return (
    <>
        <div className="col-lg-3 col-md-12">
                <ul className="list-group">
                    {categories.map((category) => {
                        return (
                            <Category category={category} key={category.id}/>
                        )
                    })}
                  
                </ul>
            </div>
    </>
  )
}

export default Categories