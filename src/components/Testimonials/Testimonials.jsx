import React from 'react'

const Testimonials = ({name, designation, description}) => {
  return (
    <div className='min-w-[360px] min-h-[150px] rounded-lg border space-y-2 bg-white text-black px-4 py-4'>
        <p className='font-semibold text-base'>{name} 
            <span className='text-gray-400 text-sm'> {designation} </span>
        </p>
        <p className='font-semibold text-sm'>{description}</p>
    </div>
  )
}

export default Testimonials