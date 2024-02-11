import React from 'react'
import CardData from './CardData'
import { Link, Outlet } from 'react-router-dom';
function Card() {
  return (
    <div >
      <ul className='grid grid-cols-5 gap-4'>
      {CardData.map((val, index) => (
          <li key={index} 
          className=' w-28 h-24 border-2 border-orange-200 rounded-lg  p-3 mt-10'
          >
            <Link to={val.link}>
              <div className=''>
                <div className='text-slate-900 flex justify-center mt-1 mb-4'>{val.icon}</div>
                <div className='text-slate-900 flex justify-center'>{val.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
