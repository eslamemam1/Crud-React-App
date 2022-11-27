import React, { useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import NavPar from './NavPar';
import Swal from 'sweetalert2';
function UpData() {
    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCatigory] = useState("");
    const [price, setPrice] = useState("");
    const navigat = useNavigate(); 
    const location = useLocation()
    console.log(location.state.id)
    const locationId = location.state.id;
  const upData = (locationId) => {
    if ( title !== "" && brand !== "" && category !== ""  && price !== "0" && price !== ""  )
    {
      axios.put(`http://localhost:3004/products/${locationId}`, {
      'title': title, 'brand' : brand , 'category' : category , 'price' : price
    })
      .then(
      Swal.fire({
      title: 'Item has been updated',      
    }),
      navigat("/AllProdects")
    )
    } else
    {
       Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
})
  }
    }

  return (
     <div className=' h-screen w-full'>
      <div className=' w-full '>
      <NavPar/>
      </div>
      <div className='w-full h-[820px] flex justify-center items-center bg-[#3e6294]'>
      <form className=' w-[450px] h-[400px] m-auto  bg-white flex flex-col justify-center items-center rounded-xl' onSubmit={(e) => {
          e.preventDefault();
    }}>
      <input className=' w-10/12 border-b-2 border-[#96c2ff] text-2xl focus:outline-none' type='text' placeholder='PRODUCT NAME' onChange={(e)=> setTitle(e.target.value)} />
      <input className=' w-10/12 mt-5 border-b-2 border-[#96c2ff] text-2xl focus:outline-none' type='text' placeholder='BRAND' onChange={(e)=> setBrand(e.target.value)} />
      <input className=' w-10/12 mt-5 border-b-2 border-[#96c2ff] text-2xl focus:outline-none' type='text' placeholder='CATEGORY' onChange={(e)=> setCatigory(e.target.value)} />
      <input className=' w-10/12 mt-5 border-b-2 border-[#96c2ff] text-2xl focus:outline-none' type='number' placeholder='PRICE' onChange={(e)=> setPrice(e.target.value)} />
      <button className=' w-1/2 mt-10 border-2 rounded-lg border-[#96c2ff] text-2xl' onClick={()=>upData(locationId)}>submit</button>
    </form>
      </div>
    </div>
  )
}

export default UpData