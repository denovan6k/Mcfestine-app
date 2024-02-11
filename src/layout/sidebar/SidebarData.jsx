import React from "react"
import { Icon, iconExists } from '@iconify/react';
const SidebarData=  [
    {
       title:'Dashboard',
       icon: <Icon icon='material-symbols-light:dashboard-outline' height={24}/>,
       link:'/layout/Home'
    },
    
    {
        title:'Inventory',
       icon: <Icon icon='material-symbols:inventory-2' height={24}/>,
       link:'/layout/Dashboard'

    },
    {
        title:'My List',
       icon: <Icon icon='material-symbols-light:list'height={24}/>,
       link:'/MyList'
    },
    {
        title:'Order reports',
       icon: <Icon icon='material-symbols:history'height={24}/>,
       link:'/Orderreports'
    },
    {
        title:'Reservations',
       icon: <Icon icon='material-symbols:event-seat-outline'height={24}/>,
       link:'/Reservations'
    },  
    {
        title:'Settings',
       icon: <Icon icon='uil:setting' height={24}/>,
       link:'/Settings'
    },
    {
        title:'My Account',
       icon: <Icon icon='material-symbols:account-circle' height={24}/>,
       link:'/My Account'
    },

]
export default SidebarData;
