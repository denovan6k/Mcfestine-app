import React from 'react'
import CardData from './CardData'
import { Link, Outlet } from 'react-router-dom';
function Card() {
  return (
    <div >
      <ul>
      {CardData.map((val, index) => (
          <li key={index} 
          className='grid w-28 h-24 border-2 mb-4'
          >
            <Link to={val.link}>
              <div className=''>
                <div className='text-slate-700 '>{val.icon}</div>
                <div className='text-slate-700 '>{val.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
