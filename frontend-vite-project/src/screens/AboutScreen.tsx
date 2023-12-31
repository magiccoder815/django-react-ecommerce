import React from 'react'
import { useSelector } from 'react-redux'

function AboutScreen() {

  const userInfo = useSelector((state)=>state.userLogin.userInfo)
  return (
    <div>
      {userInfo?(
        <p>user Info : {JSON.stringify(userInfo)}</p>
      ):(
        <p>User not info</p>
      )}



    </div>
  )
}

export default AboutScreen