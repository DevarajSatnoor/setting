import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { Suspense, lazy } from 'react';


import "./RouteCompo.css"
import Bird from '../components/assets/bird.png'
import MainDashboard from '../components/pages/dashboard/MainDashboard.jsx';
const Signup = lazy(() => import('./../components/login/Signup'));
const TrainerSiginUp = lazy(() => import('../components/login/TrainerSiginUp'));
const Employee = lazy(() => import('../components/login/EmployerSiginUp.jsx'));
const RoleSelection = lazy(() => import('../components/login/RoleSelection'));
const Login = lazy(() => import('../components/login/Login'));
// const Chat = lazy(() => import('../components/pages/messages/Chat'))
const Dashboard=lazy(()=>import ('../components/pages/dashboard/MainDashboard.jsx'))
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const TrainerDashboard=lazy(()=>import ('../components/pages/dashboard/TrainerDashboard.jsx'))




function RouteCompo() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className='route-lazy-parent'><img src={Bird} alt='imglazy' className='lazy-img' /></div>}>
        <Routes>
          <Route element={<PrivateRoute />}>
            {/* <Route path='/chat' element={<Chat />} /> */}
          </Route>
            <Route path='/dashboard' element={<MainDashboard/>}/>
            <Route path='/trainersignup' element={<TrainerSiginUp />} />
            <Route path='/selectrole' element={<RoleSelection />} />
          <Route path='/' element={<Signup />} />
          <Route path='/otpverify' element={<Login />} />
          <Route path='/employer' element={<Employee />} />
          <Route path='/trainerDashboard' element={<TrainerDashboard/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )

}


export default RouteCompo