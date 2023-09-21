import Icon from '@mdi/react';
import {
   mdiMenu
} from '@mdi/js';
import Logo from '@/assets/icons/logo.svg';
import Image from 'next/image'

export const TopNav = ({
   // children,
}: TopNavProps) => {
   return (
      <div className="flex justify-between align-middle h-[65px] border-b-2 border-my-pri-color">
         {/* <div className=''> */}
            <Image src={Logo} alt='Reni store logo' width={162} height={31.05}></Image>
            <div className="mb-3">
                {/* <label  className="text-sm text-navy-700 dark:text-white font-bold">Default</label> */}
                <input type="search" placeholder="search" className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"/>
            </div>
         {/* </div> */}
         <Icon className=""
            path={mdiMenu}
            size={1.1} />
      </div>
   )
}

interface TopNavProps {
   // children: React.ReactNode
}