import React from 'react'
import PropTypes from 'prop-types';
import { Icon, InlineIcon } from '@iconify/react'
import Buttons from '../../../public/components/Buttons';
function Navbar() {
  return (
    <div>
       <div className="relative flex mt-4 ml-20">
            <input
                type="text"
                placeholder="What can we help you find ?"
                className="pl-10 text-sm w-96  text-slate-400 bg-white border-2 border-slate-200 rounded-full p-2 mb-4 "
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <InlineIcon icon="material-symbols:search" className='mb-4 ml-2 text-slate-500'/>
            </span>
            <Buttons
      className={`text-center w-32 -ml-14 text-white bg-orange-600 rounded-full h-10  `}
      label="filter"
    />
            {/* <button type="text" class="bg-orange-500 text-white rounded-full px-2  md:px-3 py-0 md:py-1">filter</button> */}
        </div>
    </div>
  )
  // onClick={onClick}
}

  


export default Navbar
