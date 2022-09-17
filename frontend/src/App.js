import SignUp from "./pages/SignUp";
import { BrowserRouter ,Routes,Route, useNavigate } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import DashBoard from "./pages/DashBoard";
import Upload from "./pages/Upload";
 import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

function App() {
 
    const [isLoggedIn,setLogIn] =useState(false)


    useEffect(()=>{
      if(localStorage.getItem('profile')){
        setLogIn(true)
   
        console.log('true')
      }
      console.log('false')
   
    },[])
  return (
    <div className="w-full h-auto flex justify-center items-center ">
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
      <Route path={'/'} exact  element={<Home/>}/>
      <Route path={'/signup'} exact  element={<SignUp/>}/>
      <Route path={'/login'} exact  element={<Login/>}/>
      <Route path={'/aboutUs'} exact  element={<AboutUs/>}/>
      <Route path={'/contactUs'} exact  element={<ContactUs/>}/>
      <Route path={'/dashBoard'} exact  element={<DashBoard/>}/>
      <Route path={'/upload'} exact  element={<Upload/>}/>
      <Route path={'/edit/:id'} exact  element={<Upload/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
