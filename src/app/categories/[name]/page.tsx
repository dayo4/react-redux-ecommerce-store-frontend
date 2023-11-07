'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector, CounterSlice } from '@/redux'
import { PriSectionHeader, ItemsCarousel } from '@/app/components/utils'
import { Button, Rating } from "@material-tailwind/react";

import { useSearchParams, usePathname, useParams } from 'next/navigation'
import { userApi } from '@/redux/queries/userApi'
import { productApi } from '@/redux/queries/productApi'


export default function Home() {

  const dispatch = useDispatch()
  // const user = useSelector((state) => state.userApi)
  const { useGetCategoryProductsQuery } = productApi;
  const searchParams = useSearchParams()
  const params = useParams()

  const { data, isLoading, error } = useGetCategoryProductsQuery(null)
  console.log(data)
  // const { data: user } = useGetUserByIdQuery({ id: "" })

  const Items = [
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 4.9 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 2.4 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4.4 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3.3 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 4.5 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4.1 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3.8 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 3.0 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4.6 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4.4 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3.3 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 4.5 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4.1 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3.8 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 3.0 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4.6 },

  ]

  return (
    <div className="">

      <section className="mt-14 pb-2">
        <PriSectionHeader title={String(searchParams.get('title') || params.name)}></PriSectionHeader>
        <div className='gap-x-3 gap-y-6 flex flex-wrap items-center'>
          {Items.map((item, i) => {
            return (
              <Link href={item.link} className='basis-[calc(50%-12px)] sm:basis-[calc(33.33%-12px)] md:basis-[calc(25%-12px)] xl:basis-[calc(20%-12px)] bg-[#FBFBFB] p-2 rounded-sm' key={i}>
                <div className='flex justify-center h-[calc(100%-88px)]'>
                  <Image src={item.img} placeholder='empty' className="rounded-xl" alt={item.name} width={200} height={200}></Image>
                </div>
                <div className='h-[80px]'>
                  <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2 whitespace-nowrap overflow-hidden'>{item.name}</h3>
                  <p className='font-bold mt-1'> {item.price}</p>
                  {/* <Rating readonly value={item.rating} className='my-1 -ml-1' /> */}
                  <div className="flex items-center">
                    <svg className="w-5 h-5 -ml-1 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-1 text-sm font-bold text-gray-500 dark:text-white">{item.rating}</p>
                    {/* <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">41 reviews</a> */}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-14 pb-2">

      </section>

    </div>
  )
}
