import React from "react"
import { Icon, iconExists } from '@iconify/react';
const SidebarData=  [
    {
       title:'Dashboard',
       icon: <Icon icon='material-symbols:dashboard-outline' height={24}/>,
       link:'/layout/Home'
    },
    
    {
        title:'Inventory',
       icon: <Icon icon='ic:outline-inventory-2' height={24}/>,
       link:'/layout/inventory'

    },
    {
        title:'My List',
       icon: <Icon icon='material-symbols:list'height={24}/>,
       link:'/layout/mylist'
    },
    {
        title:'Order reports',
       icon: <Icon icon='material-symbols:history'height={24}/>,
       link:'/layout/Orderreports'
    },
    {
        title:'Reservations',
       icon: <Icon icon='material-symbols:event-seat-outline'height={24}/>,
       link:'/layout/reservation'
    },  
    {
        title:'Settings',
       icon: <Icon icon='uil:setting' height={24}/>,
       link:'/layout/settings'
    },
    {
        title:'My Account',
       icon: <Icon icon='material-symbols:account-circle' height={24}/>,
       link:'/layout/myaccount'
    },

]
export default SidebarData;
