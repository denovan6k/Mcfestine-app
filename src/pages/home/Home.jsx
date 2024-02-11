import React from 'react'
import img from '../images/Frame 58 (1).png'
import { Icon, InlineIcon } from '@iconify/react'
import Card from './Card'
function Home() {
  return (
    <div className='mt-2'>
      <span className=''><p>Welcome back!  Kelechi 👍</p></span>
      <img src={img} alt='boy' className='mt-6'/>
      <div className='flex justify-between mt-10'>
      
            <span>Featured Item</span>
        
        <ul className='flex mr-4 space-x-4 text-orange-400'>
          <li>
          <span>Go to Store</span>
          </li>
          <li>
            <InlineIcon icon='ph:arrow-right-thin' height={24} width={24}/>
          </li>
        </ul>

    
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default Home
