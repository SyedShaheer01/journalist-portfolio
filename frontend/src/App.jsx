import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/pages/Home'
import PageWrapper from './components/layout/PageWrapper';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import Journalism from './components/pages/Journalism';
import { Hourglass } from 'react-loader-spinner'
import AOS from 'aos'
import 'aos/dist/aos.css'
import JournalismSingle from './components/pages/JournalismSingle';
import Copywriting from './components/pages/Copywriting';
import CopywritingSingle from './components/pages/CopywritingSingle';

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    
    setTimeout(() => {
      setLoader(false)

    }, 3000)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

 
 return(
   <div>
 <div className='app'>
      {loader ?

        <div className='loader' data-aos="zoom-in">

          <h1>{"SYED JAFFER IMAM"}</h1>
          <h3>PORTFOLIO</h3>

          <Hourglass
            visible={true}
            height="100"
            width="100"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass="glass"
            colors={['rgb(247 200 53)', 'rgb(247 200 53)']}
          />
        </div>
        :
      
        
        
        
        <PageWrapper>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/business' element={}/> */}
      {/* <Route path='/contact' element={}/> */}
      {/* <Route path='/creative' element={}/> */}
      <Route path='/copywriting' element={<Copywriting/>}/>
       <Route path="/copywriting/:slug" element={<CopywritingSingle/>} />
      <Route path='/journalism' element={<Journalism/>}/>
       <Route path="/journalism/:slug" element={<JournalismSingle/>} />


    </Routes>

    <Footer/>
    </PageWrapper>
      }
      </div>
  </div>
 )
}
export default App
