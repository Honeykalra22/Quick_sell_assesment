import React from 'react'
import Todo from './Todo.jsx'
import Navbar from './Navbar.jsx'
import KambanBoard from './StatusSort.jsx'
import UserSort from './UserSort.jsx'
import PrioritySort from './PrioritySort.jsx'


function Home() {
  return (
    <div className='flex flex-col items-center gap-[5vh] my-[10vh]'>
        <h1 className='capitalize text-5xl font-semibold text-gray-700 underline'>select the sort type from Navbar to see the result</h1>
        <h3 className=' capitalize text-xl'>Created by <span className='cursor-pointer text-blue-600 font-semibold hover:text-blue-800 hover:underline'>Hitesh Kalra</span></h3>
    </div>
  )
}

export default Home