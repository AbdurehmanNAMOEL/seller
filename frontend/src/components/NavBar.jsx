import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Logo from '../images/ethiopiaLogo.jpg'
import User from '../images/user.gif'
import UpLoad from '../images/upload.svg'
import {motion} from 'framer-motion'
import { logOut } from '../redux/features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import './miniContainer.css'

const NavBar = ({toggleClicked,Logo2,email,profileImage}) => {
  const [isMenu,setMenu]=useState(false)
  const dispatch = useDispatch()
  
  const displayMenuBar=()=>{
       setMenu(!isMenu);
  }

  return (
   <div className={`fixed z-[100] flex w-full
                 h-16 ${toggleClicked?
                 'bg-[#121212]':
                 'bg-white'} 
                 shadow-md`}>
  
  {/* for desktop and tablet size */}
  
  
  <div className='hidden md:flex flex-row w-full items-center justify-between'>
  <Link to={'/'} className="logo w-40 ml-6">
       <img src={`${toggleClicked ? Logo2:Logo}`} alt="" className='h-16' />
   </Link>
  <div className="w-[60%] flex flex-row items-center justify-between gap-10 mr-10">

      <Link to={'/'} className='hover:border-b-2 border-b-green-400'>
        <label className={`cursor-pointe text-[#333]`} htmlFor="#">Home</label>
       </Link>

     <Link to={'/upload'} className='hover:border-b-2 border-b-green-400'>
        <label className={`cursor-pointe text-[#333] flex justify-center items-center`} htmlFor="#">
          <div className='w-[50px] h-[50px] cursor-pointer'>
            <img src={UpLoad} alt="" />
          </div>
          <span>UpLoad</span>
         </label>
       </Link>

     <div  className='hover:border-b-2 border-b-green-400'>
      <Link to={'/dashBoard'} className='hover:border-b-2 border-b-green-400'>
         <label className={`cursor-pointe text-[#333]`} htmlFor="#">DashBoard</label>
       </Link>     
      </div>
     <Link to={'/contactUs'} className='hover:border-b-2 border-b-green-400'>
        <label className={`cursor-pointe text-[#333]`} htmlFor="#">Contact Us</label>
     </Link>
    
    <Link to={'/AboutUs'} className='hover:border-b-2 border-b-green-400'>
         <label className={`cursor-pointe text-[#333]`} htmlFor="#">About Us</label>
    </Link>

   
 <div className='flex justify-center items-center'>
       <Link to={'/login'}   onClick={()=>dispatch(logOut())} className='container  ' >
         <label className='cursor-pointer text-[16px] text-[#333333c9]' htmlFor="#">
          {email}
          </label>
          <div 
        
           className='mini-menu w-[150px] hidden h-[100px] bg-white shadow-md mt-[25px] absolute'>
           <div>Profile</div>
           <div>LogOut</div>
          </div>
    </Link>
        
          <div className='w-[40px] h-[35px] flex justify-center items-center cursor-pointer border-2 border-blue-500 rounded-full'>
            <img src={profileImage ? profileImage:User} alt="" className='w-[30px] h-[30px] rounded-full'/>
          </div>
        


     
    </div>


  </div>
</div>

 
 {/* for Mobile*/}

 <Menu
  isMenu={isMenu}
  displayMenuBar={displayMenuBar}
 />
</div>
  )
}

export default NavBar