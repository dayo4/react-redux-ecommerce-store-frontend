'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector, CounterSlice } from '@/redux'
import { useGetUserByIdQuery } from '@/redux/queries'
import { PriSectionHeader, ItemsCarousel } from '@/app/components/utils'
import { Button, Rating } from "@/app/components/materials";
import { user } from "@/redux/dummy";

import { useSearchParams, usePathname, useParams } from 'next/navigation'


export default function Home() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  // const user = useSelector((state) => state.userApi)
  const { decrement, increment } = CounterSlice
  const searchParams  = useSearchParams()
  const params = useParams()

  // const { data: user } = useGetUserByIdQuery({ id: "" })

  const Items = [
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 2 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4 },
  ]

  return (
    <div className="">

      <section className="mt-14 pb-2">
        <PriSectionHeader title={String(searchParams.get('title') || params.name)}></PriSectionHeader>
        <div className='gap-x-3 gap-y-6 flex flex-wrap align-middle'>
          {Items.map((item, i) => {
            return (
              <Link href={item.link} className='basis-[calc(50%-12px)] sm:basis-[calc(33.33%-12px)] md:basis-[calc(25%-12px)] xl:basis-[calc(20%-12px)] bg-[#FBFBFB] p-2 rounded-sm' key={i}>
                <div className='flex justify-center h-[calc(100%-88px)]'>
                  <Image src={item.img} className="rounded-xl" alt={item.name} width={200} height={200}></Image>
                </div>
                <div className='h-[80px]'>
                  <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2'>{item.name}</h3>
                  <p className='font-bold mt-1'> {item.price}</p>
                  <Rating readonly value={item.rating} className='my-1 -ml-1' />
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
