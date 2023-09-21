import Logo from '@/assets/icons/logo.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import NavCartIcon from '@/assets/icons/nav-cart.svg';
import FunnelMenuIcon from '@/assets/icons/funnel-menu.svg';
import Image from 'next/image'

export const TopNav = ({
   // children,
}: TopNavProps) => {
   return (
      <div className="flex justify-between align-middle h-[65px] border-b-2 border-my-pri-color">
         <Image src={Logo} alt='Store logo' width={162} height={31.05} className="ml-12"></Image>
         <div className="">
            {/* <label  className="text-sm text-navy-700 dark:text-white font-bold">Default</label> */}
            <input type="search" placeholder="Search" className="mt-2 flex h-11 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg outline-none border-gray-300" />
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