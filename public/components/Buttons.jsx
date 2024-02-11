import React from 'react'
import { prototype } from 'postcss/lib/at-rule'
import PropTypes from 'prop-types';
import { Icon, InlineIcon } from '@iconify/react'
function Buttons({label,className,icon,name}) {
  // onClick,disabled
  return (
    <div>
      <button   className={className}>
      <InlineIcon  icon={icon} className=''/>
        <span className=''>
        {label}
        </span>
        <span className='ml-2'>
        {name}
        </span>
      </button>
      {/* disabled={disabled} */}
    </div>
  )
  // onClick={onClick}
}
Buttons.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired,
    // disabled: PropTypes.bool,
  };
export default Buttons
