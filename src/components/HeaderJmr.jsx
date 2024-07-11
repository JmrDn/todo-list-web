import React from 'react'

const HeaderJmr = () => {
  return (
    <div className='bg-gray-900 h-[300px] font-kanit '>
        <div className='container mx-auto flex items-center '>
            <div className='inline-block relative mx-auto  py-20'>
                <div className='text-white text-8xl text-center font-semibold'>Todo List</div>
                <div className='text-2xl text-white font-semibold absolute top-[170px] right-0'>Jmr.<span className='text-yellow-400'>Dev</span></div>
            </div>
        </div>
    </div>
  )
}

export default HeaderJmr