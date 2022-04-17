import React from 'react'
import Header from './../components/Header';
import { useUserAuth } from './../context/UserAuthContextProvider';

function Profil() {
    const {user} = useUserAuth();
  return (
    <div>
        <Header />

        <div className="d-flex justify-content-center">
            <div>
                <h2>Profil en cours de construction</h2>
                <h3>{user.email}</h3>
                <h3>{user.name}</h3>
            </div>
        </div>
    </div>
  )
}

export default Profil