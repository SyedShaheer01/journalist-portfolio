
import { Route, Routes } from 'react-router-dom'
// import Home from './components/page/home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageWrapper from './components/layout/PageWrapper'
import { useEffect, useState } from 'react'
import SideBar from './components/sideBar/sidebar.jsx'
import Add from './components/add/addJournalism.jsx'
import LoginModal from './components/page/adminAuth.jsx'
import DashBoard from './components/page/dashboard.jsx'

function App() {
useEffect(() => {
  const userToken = localStorage.getItem("token");

  if (userToken) {
    // Token hai → dashboard bhejo
    if (location.pathname !== "/dashboard") {
      window.location = "/dashboard";
    }
  } else {
    // Token nahi hai → dashboard se hatao
    if (location.pathname === "/dashboard") {
      window.location = "/";
    }
  }
}, [location.pathname]);

  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginModal/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
      
        {/* <div className='app-content'>

      <SideBar detail={detail} setDetail={setDetail}/>
      {detail === "add" && <Add/> }
        </div> */}

        {/* <LoginModal/> */}

      <PageWrapper>

      <Footer/>
      </PageWrapper>

    </div>
  )
}

export default App
