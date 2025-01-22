import React from 'react'
import Adds from '@/components/Adds'
import Categories from '@/components/Categories'
import Brands from '@/components/Brands'
import Favorites from '@/components/Favorites'

const page = () => {
  return (
    <div className='w-full'>
      <Adds />
      <Categories/>
      <Favorites />
      <Brands/>
    </div>
  )
}

export default page