
export const SideNav = ({
   // children,
}: SideNavProps) => {
   return (
      <div className="flex justify-center w-[260px] border-r-2 border-my-pri-color">
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

interface SideNavProps {
   // children: React.ReactNode
}