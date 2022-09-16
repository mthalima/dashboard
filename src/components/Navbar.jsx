import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chart, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor}) =>(
  <TooltipComponent content={title} position = 'BottomCenter'>
      <button type='button' onClick={customFunc} style={{color}}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      >
        <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
            {icon}
        </span>

      </button>
  </TooltipComponent>
)


const Navbar = () => {

  const { activeMenu, setActiveMenu , isClicked, setIsClicked} = useStateContext();

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton  title='Menu'
       color ='blue' 
       icon={<AiOutlineMenu/>}
       customFunc ={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
       />

      <div className='flex'>
        <NavButton  title='Cart'
        color ='blue' 
        icon={<FiShoppingCart/>}
        customFunc ={() => handleClick('cart')}
        />
      
        <NavButton  title='Chat'
        color ='blue' 
        dotColor='#03c9d7'
        icon={<BsChatLeft/>}
        customFunc ={() => handleClick('chat')}
        />
        
        <NavButton  title='Notifications'
        color ='blue' 
        dotColor='#03c9d7'
        icon={<RiNotification3Line/>}
        customFunc ={() => handleClick('notification')}
        />

        <TooltipComponent
          content = 'Profile'
          position='BottomCenter'
        >
          <div className='flex items-center cursor-pointer 
          gap-2 p-1 hover:bg-light-gray rounded-lg'
          onClick={() => handleClick('userProfile')}
          >
            <img
            className='rounded-full w-8 h-8' 
            src={avatar}>
            </img>
            <p>
              <span className='text-gray-400 text-14'> Hi, </span> {' '}
              <span className='text-gray-400 ml-1 font-bold text-14'>Kyle</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar;