import React from 'react'
import CardData from './CardData'
import { Link, Outlet } from 'react-router-dom';
function Card() {
  return (
    <div >
      <ul className='grid grid-cols-5 gap-4 mt-10'>
      {CardData.map((val, index) => (
          <li key={index} 
          className=' w-28 h-24 border border-[#EFDDBB] rounded-lg  p-3 '
          >
            <Link to={val.link}>
              <div className=''>
                <div className='text-[#8C6321] flex justify-center mt-1 mb-4'>{val.icon}</div>
                <div className='text-[#1A1A1A] flex justify-center'>{val.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
