// import React from 'react'
import ServiceCard from './ServiceCard'

const FrequentServices = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
      {data.map((course) => (
        <div key={course._id} className="animate-fadeSlideUp">
          <ServiceCard data={course} />
        </div>
      ))}
    </div>
  )
}

export default FrequentServices;