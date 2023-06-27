"use client";

import { AiOutlinePlus } from 'react-icons/ai'

import './Home.css'

import Image from 'next/image'
import { useState } from 'react';
import AddModal from '@/components/AddModal';

const Home = async () => {

  const [showAddNewModal, setShowAddNewModal] = useState(false);
  const handleAddNewModalClose = () => setShowAddNewModal(false);

  return (
    <div className='relative overflow-hidden'>
      <div className='main-body min-h-screen w-full absolute -z-10'></div>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='w-[80%] mx-auto md:h-[38rem] h-[calc(100vh-5rem)] bg-white rounded-md shadow-xl show_all_users' >
          <div className='sticky top-0 bg-white'>
            <div className='flex items-center justify-between border-b-2 pb-3 p-5'>
              <h3 className='md:text-xl text-sm font-semibold'>Vendor <span className='text-[#131e9f]' >Management</span></h3>
              <button title='Add new user' onClick={() => setShowAddNewModal(true)} className='md:text-base text-xs flex items-center md:gap-2 gap-1 md:border-2 border border-blue-600 md:px-2 px-1 py-1 rounded-md text-blue-600 font-semibold hover:text-white hover:bg-blue-600 duration-200'> <AiOutlinePlus /> Add New</button>
            </div>
            <div>
              {showAddNewModal && <AddModal handleAddNewModalClose={handleAddNewModalClose} />}
              {/* {showEditModal && <EditModal updateData={updateData} handleEditModalClose={handleEditModalClose} refetch={refetch} />} */}
            </div>
          </div>
          {/* {
            isLoading ?
              <div className='h-[20rem] w-full grid place-content-center' ><span className="loading loading-spinner loading-lg"></span> </div>
              :
              <div className='grid md:grid-cols-4 grid-cols-1 gap-5 pt-5 px-5 '>
                {
                  users.map(v => <div key={v._id} className='shadow-xl bg-slate-50 rounded-xl flex justify-between overflow-hidden'>
                    <div className='p-4 text-sm'>
                      <h1>Name: {v.name} </h1>
                      <h1>Email: {v.email}</h1>
                      <h1>Phone: {v.phone}</h1>
                    </div>
                    <div className='flex flex-col justify-between' >
                      <button title='Delete user' onClick={() => handleDelete(v._id)} className='bg-red-500 p-2 text-red-200 flex-1 hover:opacity-75' ><AiFillDelete /></button>
                      <button title='Edit user' onClick={() => dataUpdate(v._id)} className='bg-green-400 p-2 text-green-800 flex-1 hover:opacity-75' ><AiFillEdit /></button>
                    </div>
                  </div>)
                }
              </div>
          } */}

        </div>
      </div>
    </div>
  )
}


export default Home;