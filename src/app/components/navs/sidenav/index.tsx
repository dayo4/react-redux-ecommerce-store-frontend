'use client'
import { Button } from "@/app/components/materials";
import Icon from '@mdi/react';
import {
   mdiArrowRight,
   mdiArrowRightThin,
   mdiMenu
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import {useRouter,usePathname} from 'next/navigation'


/* Images and Icons Import */
import NewRealeasesIcon from '@/assets/icons/cate/new-release.svg';
import ClothingIcon from '@/assets/icons/cate/clothing.svg';
import ShoesIcon from '@/assets/icons/cate/shoes.svg';
import AccessoriesIcon from '@/assets/icons/cate/accessories.svg';
import ActivewearIcon from '@/assets/icons/cate/activewear.svg';
import GiftsIcon from '@/assets/icons/cate/gifts.svg';
import InspirationIcon from '@/assets/icons/cate/inspiration.svg';

export const SideNav = ({ }: SideNavProps) => {

   const {push} = useRouter()
   const pathname = usePathname()

   const NavLinks = [
      { title: "New Release", href: "/", icon: NewRealeasesIcon },
      { title: "Clothing", href: "/", icon: ClothingIcon },
      { title: "Shoes", href: "/", icon: ShoesIcon },
      { title: "Accessories", href: "/", icon: AccessoriesIcon },
      { title: "Activewear", href: "", icon: ActivewearIcon },
      { title: "Gifts & Living", href: "", icon: GiftsIcon },
      { title: "Inspiration", href: "", icon: InspirationIcon },
   ]

   return (
      <aside className="hidden lg:block h-full min-w-[210px] absolute top-0 left-0 bg-white pt-[65px] z-[100] overflow-hidden border-r border-gray-200">
         <div className='flex justify-center h-full overflow-y-scroll translate-x-[17px]'>

            <section className="mt-14">
               <h1 className="font-bold text-[24px] mb-6 text-my-pri-text-color">Explore</h1>
               <div className="pb-12">
                  {NavLinks.map((link, i) => {
                     return (

                        <Button variant="text" className={(pathname === link.href ? "text-my-pri-color border-l-2 border-l-my-pri-color " : "")+" block w-full mb-2 capitalize overflow-hidden relative"} key={i}>
                           <Link href={link.href}  className={"flex pr-4 font-[600]"} >
                              <Image src={link.icon} alt={link.title} className='mr-4' height={22} width={22}></Image>
                              <span className="mt-[3px]">{link.title}</span>
                           </Link>
                           {/* <Icon path={mdiArrowRight} size={0.8} className="absolute top-[30%] -left-[6px]"></Icon> */}
                        </Button>
                     )
                  })}
               </div>
               {/* <div className="pb-12"></div> */}
            </section>

         </div>
      </aside>
   )
}

interface SideNavProps {
   // children: React.ReactNode
}