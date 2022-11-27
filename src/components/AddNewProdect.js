import React, { useState } from 'react'
import axios from 'axios';
import NavPar from './NavPar';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddNewProdect() {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCatigory] = useState("");
  const [price, setPrice] = useState("");
  const navigat = useNavigate(); 
  const submitData = () => {
    if (title !== "" && brand !== "" && category !== "" && price !== "0" && price !== "")
    {
      axios.post("http://localhost:3004/products", {
        'title': title, 'brand': brand, 'category': category, 'price': price
      })
        .then(
          Swal.fire({
            title: 'New item has been created',
          }),
          navigat("/AllProdects")
        )
    }else
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
    <div className='w-full'>
      <div className='w-full'>
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
      <button className=' w-1/2 mt-10 border-2 rounded-lg border-[#96c2ff] text-2xl' onClick={()=>submitData()}>submit</button>
    </form>
      </div>
    </div>
  )
}

export default AddNewProdect