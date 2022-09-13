import React from 'react';
import "./SidebarOption.css"

function SidebarOption({text, Icon}) {
  return (
    <div className='flex items-center cursor-pointer sidebarOption text-[#ffffff]'>
      <Icon className="m-[20px]" />
      <h2 className='font-extrabold text-[20px] mr-[20px]'>{text}</h2>
    </div>
  )
}

export default SidebarOption;