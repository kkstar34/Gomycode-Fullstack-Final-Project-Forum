import React from 'react'
import IllustrationCoding from './illustrations/IllustrationCoding';
import { Link } from 'react-router-dom';


function AuthSideBar() {
  return (
    <>
        <div className="col-md-12 col-lg-6 auth__sidebar">
            <h1>
                <Link to='/' className="text-white no-underline">
                    Dev Forum
                </Link>
            </h1>
            <IllustrationCoding/>
        </div>

    </>
  )
}

export default AuthSideBar