import React from 'react'
import { Link } from 'react-router-dom'
function Successfull() {
  return (
    <>
     <div className="py-5 flex flex-column justify-center items-center" style={{ minHeight: '80vh' }}>
      <h3 className="text-red-800 text-center">Order Successfully Submitted</h3>
      <Link to='/' className='bg-red-900 py-2 px-2 text-decoration-none text-white '>Back to Home page</Link>
    </div></>
  )
}

export default Successfull