'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector, CounterSlice } from '@/redux'
import { useGetUserByIdQuery } from '@/redux/queries'
import { PriSectionHeader, ItemsCarousel } from './components/utils'
import { Button, Rating } from "@material-tailwind/react";
import { user } from "@/redux/dummy";

export async function getServerSideProps() {
  // This function runs on the server-side
  // You can fetch data here and pass it as props to the component
  // const data = await fetchDataSomehow();

  return {
    // props: {
    //   data,
    // },
  };
}
export default function Home() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  // const user = useSelector((state) => state.userApi)
  const { decrement, increment } = CounterSlice

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
  ]

  return (
    <div className="">
      <section className="HeroBg mt-7 sm:px-6" >
        <div className='flex justify-between items-center relative'>
          <div className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] pt-8 ml-8">
            <h2 className="text-2xl md:text-[32px] font-[700] text-my-pri-text-color">Online Shopping Made Easier</h2>
            <p className="font-[500] mt-4">Show them the love this summer, and get 50% off your purchase</p>
          </div>
          <Image src="/img/t-shirt.png" className="hidden lg:block lg:right-5 xl:right-28 absolute" alt="T-shirt Image" width={253.79} height={244.33}></Image>
        </div>

        <div className='ml-8 mt-10 relative z-0'>
          <i className='absolute left-0 top-0 h-[40px] w-[107px] z-[1] rounded-md bg-[#FF56F6] -rotate-[10deg]'></i>
          <Button onClick={() => dispatch(increment())} variant="filled" className="block mb-2 capitalize z-[2] bg-my-pri-text-color relative">
            Shop Now
          </Button>
        </div>
      </section>
      <section>


      </section>
      <section className="mt-14 pb-2">
        <PriSectionHeader title="New Release"></PriSectionHeader>
        <ItemsCarousel className='gap-x-4'>
          {Items.map((item, i) => {
            return (
              <Link href={item.link} className='min-w-[150px] max-w-[200px] bg-[#FBFBFB] p-2 rounded-sm' key={i}>
                <div className='flex justify-center h-[calc(100%-88px)]'>
                  <Image src={item.img} placeholder='empty' className="rounded-xl" alt={item.name} width={130} height={170}></Image>
                </div>
                <div className='h-[80px]'>
                  <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2 whitespace-nowrap overflow-hidden'>{item.name}</h3>
                  <p className='font-bold mt-1'> {item.price}</p>
                  <div className="flex items-center mt-1">
                    <svg className="w-5 h-5 -ml-1 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-1 text-sm font-bold text-gray-500 dark:text-white">{item.rating}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </ItemsCarousel>
      </section>

      <section className="mt-14 pb-2">
        <PriSectionHeader title="Top Rated"></PriSectionHeader>
        <ItemsCarousel className='gap-x-4'>
          {Items.map((item, i) => {
            return (
              <Link href={item.link} className='min-w-[150px] max-w-[200px] bg-[#FBFBFB] p-2 rounded-sm' key={i}>
                <div className='flex justify-center h-[calc(100%-88px)]'>
                  <Image src={item.img} placeholder='empty' className="rounded-xl" alt={item.name} width={130} height={170}></Image>
                </div>
                <div className='h-[80px]'>
                  <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2 whitespace-nowrap overflow-hidden'>{item.name}</h3>
                  <p className='font-bold mt-1'> {item.price}</p>
                  <div className="flex items-center mt-1">
                    <svg className="w-5 h-5 -ml-1 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-1 text-sm font-bold text-gray-500 dark:text-white">{item.rating}</p>                  </div>
                </div>
              </Link>
            )
          })}
        </ItemsCarousel>
      </section>

    </div>
  )
}
