import { SignInMethod } from 'firebase/auth'
import React from 'react'
import Login from './auth/Login'
// import Authdetails from './auth/Authdetails'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signup from './auth/Signup';
import Dashboard from '../public/components/Dashboard'
import Sidebar from './layout/sidebar/Sidebar';
import Navbar from './layout/sidebar/Navbar';
import { AuthProvider } from '../public/components/Context';
import Layout from './layout/Layout';
import Home from './pages/home/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
     
        
         <Routes>
         {/* {isLoggedIn && <div></div> <Sidebar/> } */}
           <Route path="/" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        
        {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        

            <Route path="layout" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Home" element={<Home />} />
          {/* <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} /> */}
        </Route>
        {/* <Route path="/Form" element={<Form/>} */}


        </Routes>
        
        
      {/* </div> */}
    </Router>
    </AuthProvider>
  )
}

export default App