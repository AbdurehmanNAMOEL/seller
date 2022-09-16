import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteStone, editedStone } from '../redux/features/gemstoneSlice'
import {toast} from 'react-toastify'
import Trash from '../images/toTrash.svg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const StoneCard = ({image,title,name,weight,desc,id}) => {
 const dispatch =  useDispatch()

    const deletedStone= ()=>{
        dispatch(deleteStone({id,toast}))
    }
    
 
  return (
    <div className=' w-[80%] h-[450px] mb-4 mt-4 md:w-[60%] md:h-[180px] flex flex-col md:flex-row shadow-md rounded-md border-2 border-[#a8a8a856]'>
     <div className='w-full h-[50%] md:w-[30%] md:h-full'>
        <img src={image} alt=""  className='w-full h-full'/>
     </div>
     <div className='w-full md:w-[25%] h-full flex flex-col text-white'>
      <span className='text-xl flex w-full justify-center items-center md:justify-start md:ml-4 mt-3'>{title}</span>
      <span className='text-[16px] font-mono w-full flex justify-center items-center md:justify-start md:ml-4 md:mt-3'>{`weight: ${weight}`}</span>
      <span className='text-[12px] mt-2 font-mono w-full flex justify-center items-center md:justify-start md:ml-4 md:mt-3'>{`by ${name}`}</span>
     </div>
     <div className='w-[35%] h-full flex flex-col  text-[#121212af]'>
       <h1 className='mt-4 text-white'>Description</h1>
       <p className='text-sm text-white mt-2 ml-2'>{desc}</p>
     </div>
     <div className=' md:w-[20%] h-full flex justify-center items-center md:flex-col gap-4'>
      <div className='w-[40%] h-[60%] md:h-[20%]  md:w-[50%] flex justify-center items-center border-2 border-blue-400 rounded-md cursor-pointer text-white hover:bg-blue-500'>
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>
      <img onClick={deletedStone} src={Trash} alt="" className='w-[40%] h-[60%] md:h-[30%] md:w-[60%] flex justify-center items-center rounded-md cursor-pointer text-white '/>
     </div>
    </div>
  )
}

export default StoneCard