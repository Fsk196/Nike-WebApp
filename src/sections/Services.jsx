import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {

  const visibleServices = services.slice(0, 3);
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {visibleServices.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services