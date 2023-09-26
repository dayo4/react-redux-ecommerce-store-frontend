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
         <div className='flex justify-center align-middle w-[90px] lg:w-[132px] lg:h-[31px] lg:mt-3'>
            <img src={"/icons/logo.svg"} alt='Store logo' /* width={162} height={31.05} */ className="max-w-full max-h-full ml-8 sm:ml-12" />
         </div>
         <div className="hidden md:flex align-middle mt-3">
            {/* <input type="search" placeholder="Search here" className="mt-2 flex h-11 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg outline-none border-gray-300" /> */}
            <Input
               label="Search"
               type={'search'}
               icon={
               // <Button variant='text' className='p- text-gray-600'>
                  <Icon path={mdiMagnify} className='cursor-pointer p-1 rounded-md hover:bg-gray-400 active:bg-gray-500 transition-colors' size={1.1} />
               // </Button>
               }
            />
         </div>
         <div className='flex align-middle mx-4 mt-3'>
            <IconButton variant='text' className='mr-2 p-0'>
               <Image src={PhoneIcon} alt="Phone Icon" height={22} width={22}></Image>
            </IconButton>
            <IconButton variant='text' className='mr-2'>
               <Image src={NavCartIcon} alt="NavCart Icon" height={26} width={26}></Image>
            </IconButton>
            <IconButton variant='text' className='mr-0 md:mr-6'>
               <Image src={FunnelMenuIcon} alt="Menu Icon" height={30} width={30}></Image>
            </IconButton>
         </div>
      </div>
   )
}

interface TopNavProps {
   // children: React.ReactNode
}