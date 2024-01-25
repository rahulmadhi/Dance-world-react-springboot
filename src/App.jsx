import React from 'react'
import "./global.css"
import Nav from './components/navbar/Nav'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './components/navbar/Home'
import About from './components/navbar/About'
import Login from './components/navbar/Login'
import Register from './components/navbar/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adminregister from './components/navbar/Adminregister'
import Pagenotfound from './components/navbar/Pagenotfound'
import Dashboard from './components/admin/Dashboard'
import Addaccmanager from './components/admin/adminaside/manager/Addaccmanager'
import Viewmanager from './components/admin/adminaside/manager/Viewmanager'
import Adminprotectedroute from './serviceroutes/Adminprotectedroute'
import Footer from './components/footer/Footer'
import Vieweachmanager from './components/admin/adminaside/manager/Vieweachmanager'
import Editmanager from './components/admin/adminaside/manager/Editmanager'
const App = () => {
  return (
        <>
        <Router>
           <ToastContainer />
           <Nav/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/adminregister' element={<Adminregister/>}/>
              <Route path='*'  element={<Pagenotfound/>}/>

               {/* Admin routes */}
               <Route path='/dashboard' 
               element={<Adminprotectedroute>
                           <Dashboard/>
                        </Adminprotectedroute>}>
               <Route path='/dashboard/addaccmanager' element={<Addaccmanager/>}/>
               <Route path='/dashboard/viewmanager' element={<Viewmanager/>}/>
               <Route path='/dashboard/vieweachmanager/:id' element={<Vieweachmanager/>}/>
               <Route path='/dashboard/editmanager/:id' element={<Editmanager/>}/>
               </Route>
                  


           </Routes>
        </Router>
        <Footer/></>
  )
}

export default App
