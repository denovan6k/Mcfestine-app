import React, {useEffect,useState}from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
function Authdetails() {
    const [authUser,setauthUser]=useState(null)
    useEffect(()=>{
        const listen= onAuthStateChanged(auth,(user)=>{
            if (user){
                setauthUser(user);
            } else{
                setauthUser(null)
            }
        })
    },[])
  return (
    <div>
         {authUser ? <p>Signed in</p> : <p>Signed out</p>}
    </div>
  
  )
}

export default Authdetails