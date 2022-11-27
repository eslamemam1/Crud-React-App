import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserLogin from '../UserLogin.png'
import PasswordLogin from '../PasswordLogin.png'

function Home() {
  const [data, setData] = useState(null)
  const [UserN, setUserN] = useState("")
  const [pass, setPass] = useState("")
  const navigat = useNavigate();
  const Swal = require('sweetalert2')
  useEffect(() => {
    axios.get("http://localhost:3004/userData").then(
    res=>{setData(res.data)}
  )
  }, [])
  if (!data) return null
  const login = () => {
    if (UserN === data[0].userName && pass === data[0].Password)
    {
      navigat("/AllProdects")
    } else
    {
      Swal.fire({
            title: 'Wronge Password',      
        })
    }
  }
  return (
    <div className=" bg-gradient-to-bl from-[#6253ec] to-[#bd69c9] h-screen w-full">
      <div className=" h-full w-full text-2xl flex justify-center items-center">
        <div className=' w-[400px] h-[450px] bg-white flex flex-col m-auto justify-start items-center rounded-xl'>
          <p className=' font-semibold text-gray-700 mt-10 '>USER LOGIN</p>
        <form className=' pt-10' onSubmit={(e) => {e.preventDefault();}}>  
          <div className=' flex'>
            <img src={UserLogin} alt="ss" className=' w-10 h-10' />
            <input type="text" placeholder='username' className='focus:outline-none ml-2 bg-[#0000] border-b-2 border-gray-300 ' onChange={(e) =>{setUserN(e.target.value)}} />
          </div>
          <div className='flex mt-16 mb-16'>
            <img src={PasswordLogin} alt="ss" className=' w-10 h-10' />
            <input type="password" placeholder='password' className=' focus:outline-none ml-2 bg-[#0000] border-b-2 border-gray-300 ' onChange={(e) => { setPass(e.target.value) }} />
          </div>
          </form>
          <button onClick={login} className=' bg-gradient-to-bl from-[#6253ec] to-[#bd69c9] text-white rounded-lg w-40 h-10 '>Login</button>
        </div>  
      </div>
    </div>
  )
}

export default Home