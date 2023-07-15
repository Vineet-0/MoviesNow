import React, { useState } from 'react'
import logo from './../assets/Images/logo-d-plus.svg'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
function Header() {
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between px-8 py-5 w-screen'>
        <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[40px] 
            md:w-[60px] object-cover' />
            <div className='hidden lg:flex gap-8 pt-[10px]'>
            {menu.map((item)=>(
                <HeaderItem name={item.name} Icon={item.icon} />
            ))}
        </div>
        <div className='flex pt-[11px] lg:hidden gap-5'>
            {menu.map((item,index)=>index<3&&(
                <HeaderItem name={''} Icon={item.icon} />
            ))}
            <div className='lg:hidden' onClick={()=>setToggle(!toggle)}>       
                <HeaderItem name={''} Icon={HiDotsVertical} />
                {toggle? <div className='absolute mt-3 bg-[#121212] 
                        border-[1px] border-gray-700 p-3 px-5 py-4'>
                        {menu.map((item,index)=>index>2&&(
                            <HeaderItem name={item.name} Icon={item.icon} />
                        ))}
                        </div>:null}
                </div> 
            </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header