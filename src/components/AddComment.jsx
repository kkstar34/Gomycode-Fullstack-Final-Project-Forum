import React from 'react'

function AddComment() {
  return (
    <>
        <div className="mt-3">
            <textarea name="content" id="" cols="30" rows="3" className="form-control" placeholder="Ajouter un commentaire..."></textarea>
            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary text-white text-right shadow-sm" >Commenter</button>
            </div>
        </div>
    </>
  )
}

export default AddComment