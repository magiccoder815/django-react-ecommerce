import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userControl } from '../hooks/actions/UserAction';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAppSelector } from '../store';

function AboutScreen() {
  const dispatch = useDispatch();
  const {userInfo, error:UserInfoError ,loading:UserInfoLoading} =useAppSelector((state)=>state.user);

  useEffect(()=>{
    dispatch(userControl())

}, [dispatch]);
  return (
    <div>
      {UserInfoLoading ? (
        <p><LoadingSpinner></LoadingSpinner> </p>
      ) : UserInfoError ? (
        <p>Error</p>
      ): userInfo ? (
        <p>userInfo : {JSON.stringify(userInfo)}</p>

      ):(
        <p> user not into</p>
      )

      
    }
      



    </div>
  )
}

export default AboutScreen