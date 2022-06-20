import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserAction } from '../redux/Actions/UserAction';

const Dashboard = () => {
  const {userInfo} = useSelector((state) => state.user)
  
  const dispach = useDispatch()

  useEffect(() =>{
    dispach(getUserAction())
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard