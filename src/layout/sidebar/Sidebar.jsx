// 
import React, { useState,useEffect } from 'react';
import SidebarData from './SidebarData';
import { Link, Outlet } from 'react-router-dom';
import img1 from '../sidebar/images/Logo.png';
import img2 from './images/image 55 (1).png';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';



function Sidebar() {
 
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  // const [act,setAct]=useState(false)
  useEffect(() => {
    // Navigate to the dashboard route and set it as the active component when the component mounts
    navigate('/layout/home');
   
  }, []);
  const handleClick = (index) => {
    setActiveItem(index);
    // if (val.title === 'Dashboard') {
    //   setAct(true);
    // } else {
    //   setAct(false);
    // }
  };
  return (
    <div className='ml-10'>
      <img className='mt-8 mb-20' src={img1} alt='boy' />
      <ul className=''>
        {SidebarData.map((val, index) => (
          <li key={index} onClick={() => handleClick(index)} 
          className={`hover:text-[#CF9832] hover:bg-[#F5EAD6] hover:rounded-3xl mb-6 p-2 ${activeItem === index? 'text-[#CF9832] bg-[#F5EAD6] rounded-3xl ' : ''} `}
          >
            {/* ${val.title === 'Dashboard' && act ?'text-[#CF9832] bg-[#F5EAD6] rounded-3xl ':''} */}
            <Link to={val.link}>
              <div className='flex space-x-2'>
                <div className='text-[#404040] ml-4 '>{val.icon}</div>
                <div className='text-[#404040] '>{val.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <img className='mt-20 mb-20' src={img2} alt='girl' />
      <div className='flex space-x-4 mb-20 text-[#404040]'>
        <Icon icon='ic:round-logout' width={24} height={24} />
        <span className=''><p>Log out</p></span>
      </div>
    
    </div>
  );
}

export default Sidebar;
