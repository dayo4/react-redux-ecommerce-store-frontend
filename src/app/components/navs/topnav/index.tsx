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