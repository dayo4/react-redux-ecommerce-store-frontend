'use client'
import Logo from '@/assets/icons/logo.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import NavCartIcon from '@/assets/icons/nav-cart.svg';
import FunnelMenuIcon from '@/assets/icons/funnel-menu.svg';
import { useDispatch, useSelector, NavSlice } from '@/redux'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '@mdi/react';
import {
   mdiAccountPlusOutline,
   mdiLoginVariant,
   mdiMagnify
} from '@mdi/js';
import {
   Input,
   Button,
   Avatar,
   IconButton,
   Badge,
   Menu,
   MenuHandler,
   MenuList,
   MenuItem,
   Typography
} from "@material-tailwind/react";

export const TopNav = ({
   // children,
}: TopNavProps) => {
   const dispatch = useDispatch()
   const nav = useSelector((state) => state.nav)
   const { hideSideNAv, showSideNAv } = NavSlice

   function handleSideNav() {
      if (nav.status && nav.isSmallScreen) {
         dispatch(hideSideNAv())
      }
      else {
         dispatch(showSideNAv())
      }
   }

   const UserMenu = () => {
      return (
         <Menu>
            <MenuHandler>
               <Avatar
                  variant="circular"
                  alt="tania andrew"
                  className="cursor-pointer mr-4 border border-gray-500 p-0.5"
                  size='sm'
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
               />
            </MenuHandler>
            <MenuList>
               <MenuItem className="flex items-center gap-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2}
                     stroke="currentColor"
                     className="h-4 w-4"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                  </svg>
                  <Link href={'/profile'}>
                     <Typography variant="small" className="font-normal">
                        My Profile
                     </Typography>
                  </Link>
               </MenuItem>
               <MenuItem className="flex items-center gap-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2}
                     stroke="currentColor"
                     className="h-4 w-4"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                     />
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                  </svg>
                  <Typography variant="small" className="font-normal">
                     Settings
                  </Typography>
               </MenuItem>
               <MenuItem className="flex items-center gap-2">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2}
                     stroke="currentColor"
                     className="h-4 w-4"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                     />
                  </svg>
                  <Typography variant="small" className="font-normal">
                     Help
                  </Typography>
               </MenuItem>
               <hr className="my-2 border-blue-gray-50" />
               <MenuItem className="flex items-center gap-2 ">
                  <Icon path={mdiLoginVariant} size={0.7} />
                  <Link href={'/login'}>
                     <Typography variant="small" className="font-normal">
                        Sign In
                     </Typography>
                  </Link>
               </MenuItem>
               <MenuItem className="flex items-center gap-2 ">
                  <Icon path={mdiAccountPlusOutline} size={0.7} />
                  <Link href={'/register'}>
                     <Typography variant="small" className="font-normal">
                        Create Account
                     </Typography>
                  </Link>
               </MenuItem>
            </MenuList>
         </Menu>
      )
   }

   return (
      <div className="flex justify-between items-center h-[65px] absolute top-0 left-0 z-[200] bg-white w-full border-b border-gray-200">
         {/* <div className='flex justify-center items-center w-[90px] lg:w-[132px] lg:h-[31px] lg:mt-3'> */}
         <Link href={'/'} className='flex justify-center items-center w-[90px] lg:w-[132px] lg:h-[31px]'>
            <img src={"/icons/logo.svg"} alt='Store logo' /* width={162} height={31.05} */ className="max-w-full max-h-full ml-8 sm:ml-12" />
         </Link>
         {/* </div> */}
         {/* <div className="items-center mt-3"> */}
            {/* <input type="search" placeholder="Search here" className="mt-2 flex h-11 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-lg outline-none border-gray-300" /> */}
            {/* <Input
               label="Search"
               type={'search'}
               icon={
                  // <Button variant='text' className='p- text-gray-600'>
                  <Icon path={mdiMagnify} className='cursor-pointer p-1 rounded-md hover:bg-gray-400 active:bg-gray-500 transition-colors' size={1.1} />
                  // </Button>
               }
            /> */}
         {/* </div> */}
         <div className='flex items-center mx-4'>
            <UserMenu></UserMenu>
            {/* <IconButton variant='text' className='mr-2 p-0'>
               <Image src={PhoneIcon} alt="Phone Icon" height={22} width={22}></Image>
            </IconButton> */}
            <div className='md:mr-4 lg:mr-6'>
               <Badge color='pink' className='top-3 right-4 w-2'>
                  <IconButton variant='text' className='mr-2'>
                     <Link href={'/cart'}>
                        <Image src={NavCartIcon} alt="NavCart Icon" height={26} width={26}></Image>
                     </Link>
                  </IconButton>
               </Badge>
            </div>
            <IconButton onClick={() => handleSideNav()} variant='text' className='mr-0 md:mr-6 lg:hidden'>
               <Image src={FunnelMenuIcon} alt="Menu Icon" height={30} width={30}></Image>
            </IconButton>
         </div>
      </div>
   )
}

interface TopNavProps {
   // children: React.ReactNode
}