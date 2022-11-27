import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavPar from './NavPar';


function AllProdects() {
    const navegat = useNavigate();
    const Swal = require('sweetalert2')
    const [prodects, setProdects] = useState(null)
    const GetAllProdects = () => {
        axios.get("http://localhost:3004/products")
    .then(res => setProdects(res.data))
    }
    useEffect(() => {
      GetAllProdects()
    }, [])
    
    if (!prodects) return null
    
    const Delete = (prodictId) => {
 Swal.fire({
            title: 'Are You Sure To Delete This Prodect!',
            showCancelButton : "true"        
        }).then((data) => {
            if (data.isConfirmed)
            {
                axios.delete(`http://localhost:3004/products/${prodictId}`)
                .then(res=>{GetAllProdects()})
            }
        })
    }

    const UpData = (id) => {
        console.log(id)
        navegat("/UpData", { state:{ id: id }})
    }

    return (      
        <div className='w-full h-screen'>
          <NavPar/>
      <div className='w-[95%] m-auto'>
          <div className='flex w-full'>
          <div className=" w-full">
            <div className=' h-20 flex justify-between items-center'>
                <p className=' text-4xl font-bold text-gray-700'>All Products</p>
                <Link to='/AddNewProdect'>
                <button type="button" className="focus:outline-none text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">Add New Prodect</button>
                </Link>
            </div>
    <table className="w-full text-xl text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                    ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Brand
                </th>
                <th scope="col" className="py-3 px-6">
                    Category
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
                      {
        prodects.map((p) => {
          return (
                <tbody key={p.id}>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {p.id}
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {p.title}
                </th>
                <td className="py-4 px-6">
                    {p.brand}
                </td>
                <td className="py-4 px-6">
                    {p.category}
                </td>
                <td className="py-4 px-6">
                    ${p.price}
                </td>
                <td className="py-4 px-6">
                    <button onClick={()=> Delete(p.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                    <button onClick={()=> UpData(p.id)} className="ml-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">UpData</button>
                </td>
                </tr>
        </tbody>
          )
        })
      }
    </table>
</div>
      </div>
      </div>
        </div>
  );
}

export default AllProdects