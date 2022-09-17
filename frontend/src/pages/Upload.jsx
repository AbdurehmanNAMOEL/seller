import React from 'react'
import FileBase64 from 'react-filebase64';
import { useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import { uploadStone, editStone, editedStone } from '../redux/features/gemstoneSlice'
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';


const Upload = () => {
  const [newImage,setImage]= useState("")
  const [title,setTitle]= useState("")
  const [weight,setWeight]= useState("")
  const [desc,setDesc]= useState("")
  const {user} = useSelector(state=>state.auth)
  const dispatch= useDispatch()
  const {stoneList} = useSelector(state=>state.stone)
  const {id} = useParams()
  const navigate= useNavigate()


  const handleEdit=()=>{
   const newData={
    title:title,
    desc:desc,
    weight:weight,
    image:newImage
   }
  dispatch(editedStone({id,newData,toast,navigate}))
    setTitle('')
    setImage('')
    setDesc('')
    setWeight('')
    
}

 
  const handleStoneUpload=()=>{

        const stoneData={
        title:title,
        desc:desc,
        weight:weight,
        image:newImage
    }
    if(title&& desc && newImage){

    dispatch(uploadStone({stoneData,toast,navigate}))
    setTitle('')
    setImage('')
    setWeight('')
    setDesc('')
   } else toast.error('First fill all the inputs')  
}


useEffect(()=>{
    if(id){
    const {title,desc,weight,image} = stoneList?.find(stone=> stone._id === id)
    setTitle(title)
    setImage(image)
    setWeight(weight)
    setDesc(desc)
    console.log(stoneList)
    }
  },[id])
  
  return (
    <div className='w-full h-[100vh]  flex flex-col '>
    <NavBar
     path={'/'}
     buttonLabel={'Home'} 
     email={user?.email}
     profileImage={user?.profileImage}
     />
     <div className='w-full h-[100vh] border-2 border-[#1212122f] md:w-full md:h-full shadow-md flex flex-col justify-center items-center'>
       <span className='w-full h-[50px] mt-16 md:mt-[50px] text-xl flex justify-center items-center text-[#b4afafd5]'>{id ? 'EditTour':'AddTour'}</span>
        <div className='w-[80%]  h-[100px] md:w-[40%] md:h-16 flex flex-col justify-center items-center md:flex-row'>
       <select
        onChange={(e)=>setTitle(e.target.value)} 
        value={title}  
        className='w-full mb-4 md:w-[40%] bg-white h-8 indent-2 border-2 border-[#12121234]'  
       >
        <option value="type">Type</option>
        <option value="emralde">Emralde</option>
        <option value="Sapphire">Sapphire</option>
        <option value="Ruby">Ruby</option>
        <option value="peridot">peridot</option>
        <option value="opal">Opal</option>
        <option value="gold">Gold</option>
        </select> 

        <input 
        type="text" 
        placeholder='Weight' 
        className='w-full md:-mt-4  mb-3 md:mb-0 md:w-[32%] h-[32px] md:ml-3 indent-2 border-2 border-[#53535334]'
        onChange={(e)=>setWeight(e.target.value)} 
        value={weight} 
        />
       </div>

       <div className='w-[80%] md:w-[30%] h-[40%]'>
        <textarea 
        onChange={(e)=>setDesc(e.target.value)} 
        value={desc} 
        className='w-full h-[60%] indent-4 border-2 border-[#12121246]' 
        placeholder='Write your description here'
        />
       </div>

       <div className='-mt-24 w-[80%] md:w-[30%] h-[50px] flex justify-start items-center md:-mt-20'>
       <FileBase64
        type="file"
        multiple={false}
        onDone={({base64})=>setImage(base64)}
     
        />
        </div>
        
       <div className='w-[80%] md:w-[30%] h-[30%] -mt-2 bg-white  border-[#0d66da83] border-2 border-dashed'>
        <img src={newImage} alt="TourImage"  className='w-full h-full border-none flex justify-center items-center'/>
       </div>
       
        <div onClick={id ? handleEdit :handleStoneUpload}
         className='w-[80%] md:w-[30%] h-10 cursor-pointer mt-2 bg-blue-400 flex justify-center items-center text-white font-bold hover:bg-blue-500'>{id ? 'Edit':'Submit'}</div>
     </div>
    </div>
  )
}

export default Upload