import React from 'react'
import logo from "../images/logo.jpg"
import { auth } from "../firebase/index"
function User(){ 

    return ( 
        <div className = 'User'>
            <div className = "logo"> 
            <img src = {logo} alt= "logo" />
            </div>
            <div className='info'>
                <p> Melts</p>
                <p><button className='button-signin' onClick={() => auth.signOut()
                }>Sign out</button></p>
            </div>
        </div>
    )
}

export default User