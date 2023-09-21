import Icon from '@mdi/react';
import {
   mdiMenu
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
/* Images and Icons Import */
import NewRealeasesIcon from '@/assets/icons/cate/new-release.svg';
import ClothingIcon from '@/assets/icons/cate/clothing.svg';
import ShoesIcon from '@/assets/icons/cate/shoes.svg';
import AccessoriesIcon from '@/assets/icons/cate/accessories.svg';
import ActivewearIcon from '@/assets/icons/cate/activewear.svg';
import GiftsIcon from '@/assets/icons/cate/gifts.svg';
import InspirationIcon from '@/assets/icons/cate/inspiration.svg';

export const SideNav = ({ }: SideNavProps) => {

   const NavLinks = [
      { title: "New Release", href: "", icon: NewRealeasesIcon },
      { title: "Clothing", href: "", icon: ClothingIcon },
      { title: "Shoes", href: "", icon: ShoesIcon },
      { title: "Accessories", href: "", icon: AccessoriesIcon },
      { title: "Activewear", href: "", icon: ActivewearIcon },
      { title: "Gifts & Living", href: "", icon: GiftsIcon },
      { title: "Inspiration", href: "", icon: InspirationIcon },
   ]

   return (
      <aside className="flex justify-center h-full min-w-[260px] border-r-2 border-my-pri-color">

         <div className="mt-14">
            <h1 className="font-bold text-[24px] mb-6">Explore</h1>
            <div className="">
               {NavLinks.map((link, i) => {
                  return (
                     <Link href={link.href} className="flex pr-4 py-2 mb-2" key={i}>
                        <Image src={link.icon} alt={link.title} className='mr-4' height={22}></Image>
                        <span>{link.title}</span>
                     </Link>
                  )
               })}
            </div>
         </div>
         {/* <div className='flex mx-4'> */}
         {/* </div> */}
         {/* <Icon className=""
         path={mdiMenu}
         size={1.1} /> */}
      </aside>
   )
}

interface SideNavProps {
   // children: React.ReactNode
}