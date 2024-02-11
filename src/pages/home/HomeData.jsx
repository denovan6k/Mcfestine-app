import React from "react"
import { Icon, iconExists } from '@iconify/react';
const HomeData=  [
    {
       title:'softdrinks',
       icon: <Icon icon='material-symbols:liquor-outline' height={32}/>,
       link:'/Dashboard'
    },
    {
        title:'Beverages',
       icon: <Icon icon='ic:outline-emoji-food-beverage' height={32}/>,
       link:'/Inventory'

    },
    {
        title:'pizza',
       icon: <Icon icon='material-symbols-light:list'height={32}/>,
       link:'/MyList'
    },
    {
        title:'Vegetables',
       icon: <Icon icon='material-symbols:history'height={32}/>,
       link:'/Orderreports'
    },
    {
        title:'Beverage',
       icon: <Icon icon='material-symbols:event-seat-outline'height={32}/>,
       link:'/Reservations'
    },  
    {
        title:'pizza',
       icon: <Icon icon='material-symbols:account-circle' height={32}/>,
       link:'/My Account'
    },
    {
        title:'Soups',
       icon: <Icon icon='uil:setting' height={32}/>,
       link:'/Settings'
    },

    {
        title:'Bakery',
       icon: <Icon icon='material-symbols:account-circle' height={32}/>,
       link:'/My Account'
    },
    {
        title:'fruits',
       icon: <Icon icon='material-symbols:account-circle' height={32}/>,
       link:'/My Account'
    },

]
export default HomeData;
