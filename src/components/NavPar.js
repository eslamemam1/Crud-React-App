import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'
import UserLogin from '../UserLoginw.png'

function NavPar() {
  const [togol , setTogol] = useState(true)
  const ftogol = () => {
    setTogol(!togol)
  }
  console.log(togol)
  return (
      <div className=" w-full h-14 bg-[#1d3557] text-xl font-bold text-white ">
      <div className='w-[95%] h-14 m-auto flex items-center'>
      <div className='flex items-center w-1/2'>
          <img src={Logo} alt="ss" className='w-10 h-10' />
          <span>products</span>
          </div>
          <div className='w-1/2 h-14 flex justify-end items-center  relative'>
          <img src={UserLogin} alt="ss" className='w-8 h-8' />
          <span className=' cursor-pointer' onClick={ftogol}>Eslam Emam</span>
          <div className=' absolute top-14'>
          {togol ? "" :
            <div className=' flex justify-center bg-slate-100 h-14 w-52 text-lg font-medium '>
            <ul className='  text-black'>
              <li><Link to='/AllProdects'>All Prodects</Link></li>
              <hr className=' border-black w-52'/>
              <li><Link to='/'>logout</Link></li>
              <hr className=' border-black'/>
           </ul>
          </div>}
          </div>
          </div>
      </div>
      
      </div>
  )
}

export default NavPar