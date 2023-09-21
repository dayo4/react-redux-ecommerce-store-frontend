import Icon from '@mdi/react';
import {
   mdiMenu
} from '@mdi/js';
import Logo from '@/assets/icons/logo.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import FunnelMenuIcon from '@/assets/icons/funnel-menu.svg';
import Image from 'next/image'

export const TopNav = ({
   // children,
}: TopNavProps) => {
   return (
      <div className="flex justify-between align-middle h-[65px] border-b-2 border-my-pri-color">
         <Image src={Logo} alt='Store logo' width={162} height={31.05} className="ml-5"></Image>
         <div className="">
            {/* <label  className="text-sm text-navy-700 dark:text-white font-bold">Default</label> */}
            <input type="search" placeholder="Search" className="mt-2 flex h-11 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg outline-none border-gray-400" />
         </div>
         <div className='flex mx-4'>
            <Image src={PhoneIcon} alt="Phone Icon" className='mr-5 cursor-pointer' height={22}></Image>
            <Image src={FunnelMenuIcon} alt="Menu Icon" className='mr-5 cursor-pointer' height={30}></Image>
         </div>
         {/* <Icon className=""
            path={mdiMenu}
            size={1.1} /> */}
      </div>
   )
}

interface TopNavProps {
   // children: React.ReactNode
}