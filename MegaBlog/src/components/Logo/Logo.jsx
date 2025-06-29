import React from 'react'
import blog from '../../blog.png'
function Logo({width = '80px'}) {
  return (
    <div >
       <img src={blog} alt="error" className={`w-[${width}] h-[50px]`} />
    </div>
  )
}

export default Logo