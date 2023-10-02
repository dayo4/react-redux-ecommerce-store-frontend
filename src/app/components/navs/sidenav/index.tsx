'use client'
import { Button } from "@material-tailwind/react";
import Icon from '@mdi/react';
import { debounce } from "lodash";
import { useDispatch, useSelector, NavSlice } from '@/redux'
import { useGetAllCategoriesQuery } from '@/redux/queries'
import {
   mdiArrowRight,
   mdiArrowRightThin,
   mdiCloseOutline,
   mdiHomeGroup,
   mdiMenu
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'


/* Images and Icons Import */
import NewRealeasesIcon from '@/assets/icons/cate/new-release.svg';
import ClothingIcon from '@/assets/icons/cate/clothing.svg';
import ShoesIcon from '@/assets/icons/cate/shoes.svg';
import AccessoriesIcon from '@/assets/icons/cate/accessories.svg';
import ActivewearIcon from '@/assets/icons/cate/activewear.svg';
import GiftsIcon from '@/assets/icons/cate/gifts.svg';
import InspirationIcon from '@/assets/icons/cate/inspiration.svg';
import { useEffect, useState } from "react";

export const SideNav = ({ }: SideNavProps) => {
   const { hideSideNAv, showSideNAv, setBigScreen, setSmallScreen } = NavSlice
   const dispatch = useDispatch()

   useEffect(() => {
      // Debounce the resize event handler
      const handleResize = debounce(() => {
         if (window.innerWidth < 1024) {
            dispatch(setSmallScreen(true));
            dispatch(setBigScreen(false));
         } else {
            dispatch(setSmallScreen(false));
            dispatch(setBigScreen(true));
         }
      }, 100);
      handleResize()

      window.addEventListener("resize", handleResize)

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   })

   const nav = useSelector((state) => state.nav)
   const { push } = useRouter()
   const pathname = usePathname()

   const NavLinks = [
      { title: "New Arrivals", href: "/categories/new-arrivals", icon: NewRealeasesIcon },
      { title: "Clothing", href: "/categories/clothing", icon: ClothingIcon },
      { title: "Shoes", href: "/categories/shoes", icon: ShoesIcon },
      { title: "Accessories", href: "/categories/accessories", icon: AccessoriesIcon },
      { title: "Activewear", href: "/categories/activewear", icon: ActivewearIcon },
      { title: "Gifts & Living", href: "/categories/gifts", icon: GiftsIcon },
      { title: "Inspiration", href: "/categories/inspiration", icon: InspirationIcon },
   ]

   function handleSideNav() {
      if (nav.status && nav.isSmallScreen) {
         dispatch(hideSideNAv())
      }
      else {
         dispatch(showSideNAv())
      }
   }

   const { data, isLoading, error } = useGetAllCategoriesQuery(null)
   // console.log(data)

   return (
      <aside className={(!nav.status ? " ShrinkOnSmallScreen " : " ExpandOnSmallScreen ") + " h-full lg:min-w-[210px] absolute top-0 left-0 bg-white pt-[65px] z-[100] overflow-hidden border-r border-gray-200 transition-all shadow-lg lg:shadow-md overflow-x-hidden"}>
         <div className='flex justify-center h-full overflow-y-scroll translate-x-[17px]'>

            <section className="mt-14 relative">
               <Icon onClick={() => handleSideNav()} path={mdiCloseOutline} size={0.9} className="absolute -top-10 right-0 lg:hidden hover:bg-gray-300 active:bg-gray-400 transition-all rounded-md cursor-pointer" />
               <h1 className="font-bold text-[24px] mb-6 text-my-pri-text-color">Explore</h1>
               <div className="pb-12">
                  <Button variant="text" className={(pathname === '/' ? "text-my-pri-color border-l-2 border-l-my-pri-color " : "") + " block w-full mb-2 capitalize overflow-hidden relative"}>
                     <Link href={'/'} className={"flex pr-4 font-[600]"} >
                        {/* <Image src={link.icon} alt={link.title} className='mr-4' height={22} width={22}></Image> */}
                        <Icon path={mdiHomeGroup} size={1} className='text-yellow-700 mr-4'></Icon>
                        <span className="mt-[3px]">Home</span>
                     </Link>
                     {/* <Icon path={mdiArrowRight} size={0.8} className="absolute top-[30%] -left-[6px]"></Icon> */}
                  </Button>

                  {NavLinks.map((link, i) => {
                     return (

                        <Button variant="text" className={(pathname === link.href ? "text-my-pri-color border-l-2 border-l-my-pri-color " : "") + " block w-full mb-2 capitalize overflow-hidden relative"} key={i}>
                           <Link href={{ pathname: link.href, query: { title: link.title } }} className={"flex pr-4 font-[600]"} >
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