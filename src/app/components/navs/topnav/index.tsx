import Logo from '@/assets/icons/logo.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import NavCartIcon from '@/assets/icons/nav-cart.svg';
import FunnelMenuIcon from '@/assets/icons/funnel-menu.svg';
import Image from 'next/image'
import Icon from '@mdi/react';
import {
   mdiMagnify
} from '@mdi/js';
import {
   Input,
   Button,
   Avatar,
   IconButton,
} from "@/app/components/materials";

export const TopNav = ({
   // children,
}: TopNavProps) => {
   return (
      <div className="flex justify-between align-middle h-[65px] absolute top-0 left-0 z-[200] bg-white w-full border-b-2 border-my-pri-color">
         <Image src={Logo} alt='Store logo' width={162} height={31.05} className="ml-12"></Image>
         <div className="hidden md:flex align-middle mt-3">
            {/* <label  className="text-sm text-navy-700 dark:text-white font-bold">Default</label> */}
            {/* <input type="search" placeholder="Search here" className="mt-2 flex h-11 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg outline-none border-gray-300" /> */}
            <Input
               label="Search"
               type={'search'}
               // className='mt-6'
               icon={<Icon path={mdiMagnify} className='cursor-pointer' size={1.1} />}
            />
         </div>
         <div className='flex mx-4'>
            <Image src={PhoneIcon} alt="Phone Icon" className='mr-6 cursor-pointer' height={22}></Image>
            <Image src={NavCartIcon} alt="NavCart Icon" className='mr-6 cursor-pointer' height={26}></Image>
            <Image src={FunnelMenuIcon} alt="Menu Icon" className='mr-6 cursor-pointer' height={30}></Image>
         </div>
      </div>
   )
}

interface TopNavProps {
   // children: React.ReactNode
}