'use client'
import Icon from '@mdi/react';
import {
  mdiHeart, mdiHeartOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader, TopBreadcrumb, ItemsCarousel } from '@/app/components/utils'
import { Button, Rating, Input } from "@material-tailwind/react";
import Reviews from "./(components)/reviews"
import { useDispatch, useSelector, CartSlice } from '@/redux'

export default function Item() {
  const { addToCart, updateQuantity, removeFromCart } = CartSlice

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

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
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4.6 },
  ]

  const Suggestions = () => {
    return (
      <section className="mt-16">
        <PriSectionHeader title="You May Also Like"></PriSectionHeader>
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
                  {/* <Rating readonly value={item.rating} className='my-1 -ml-1' /> */}
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
    )
  }

  return (
    <div className="">
      <TopBreadcrumb links={[
        { title: "Personalized T-Shirt", href: "/item" },
      ]} />


      <section className="mt-2" >
        <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center md:gap-x-2 xl:gap-x-14'>

          <section className='w-[100%] sm:w-[91.7%] md:w-[66.7%] mb-10'>
            <div className='flex justify-center align-middle min-h-[300px] max-h-[500px] w-full relative rounded-md object-contain bg-[#F6F6F6]'>
              {/* <img src={"/img/t-shirt.png"} className="rounded-md max-w-full max-h-full" alt={""} /> */}
              <Image src={"/img/t-shirt.png"} placeholder='empty' className="rounded-md " width={500} height={500} alt={""}></Image>
            </div>
            <ItemsCarousel className='pt-1 pb-2 gap-3'>
              {Array.of(7, 2, 3, 4, 5, 6).map((img, i) => {
                return (
                  <div className='h-32 w-32 min-w-[128px] rounded-md bg-[#FCFCFC] cursor-pointer shadow-sm relative' key={i}>
                    <Image src={"/img/t-shirt.png"} placeholder='empty' className="rounded-md w-full h-full" fill alt={""}></Image>
                  </div>
                )
              })}
            </ItemsCarousel>
          </section>

          <section className='w-[100%] sm:w-[91.7%] md:w-[33.3%] p-2'>
            <div>
              <h3 className='flex justify-between mt-3 mb-5'>
                <p className='text-my-pri-color text-[12px] font-[500] mt-2'>FASHION</p>
                <Icon className="text-red-700"
                  path={mdiHeart}
                  size={1.1} />
              </h3>

              <h1 className='text-my-sec-text-color text-xl font-bold'>Personalized T-Shirt</h1>

              <div className='flex justify-between align-middle mt-3 mb-5'>
                <p className='text-[#7275A1] text-[12px] font-[500] mt-2'>Size:  <b>XL</b></p>
                <div className="flex items-center mt-1">
                  <svg className="w-5 h-5 -ml-1 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <p className="ml-1 text-sm font-bold text-gray-500 dark:text-white">4.5</p>
                </div>
                {/* <Rating readonly value={4} className='my-1 -ml-1' /> */}
              </div>

              <div className='flex align-middle mt-3 mb-5'>
                <p className='text-[#7275A1] text-[12px] font-[600] mt-2 mr-4'>Quantity:</p>
                <input className='w-[60px] text-center border-[1px] border-[#cacaca] p-1 rounded-md focus:outline-my-pri-color' type={'number'} min={0}></input>
                {/* <Input size='md' label='How Many' color='gray' className='w-[80px]' type={'number'} /> */}
              </div>

              <div className='flex justify-between align-middle mt-3 mb-5'>
                <p className='text-my-sec-text-color text-[24px] font-[600] mt-2 mr-4'>$400.00</p>
              </div>
            </div>

            <div className='mt-3'>
              <div>
                <h3 className='text-[#7275A1] text-[14px] font-[600] mt-2 mb-3'>Description</h3>
                <p className='text-[#797979] text-[12px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
              </div>

              <div className='mt-5'>
                <h3 className='text-[#7275A1] text-[14px] font-[600] mt-2 mb-3'>Tags</h3>
                <div className='flex flex-wrap gap-2'>
                  {Array.of(7, 2, 3, 4, 5, 6).map((tag, i) => {
                    return (
                      <div className='min-w-[40px] rounded-sm text-center bg-[#EFEDFC] text-[12px] text-[#614FE0] cursor-pointer shadow-sm p-2 font-bold' key={i}>
                        Vintage
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='mt-5'>
                <h3 className='text-[#7275A1] text-[14px] font-[600] mt-2 mb-3'>Select Size (US)</h3>
                <div className='flex flex-wrap gap-y-2 gap-x-5'>
                  {Array.of(7, 2, 3, 4, 5, 6).map((tag, i) => {
                    return (
                      <div className='min-w-[40px] text-center rounded-sm border-[1px] text-[12px] border-[#F1F1F1] text-[#131212] cursor-pointer shadow-sm p-2' key={i}>
                        8.5
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='mt-5'>
                <h3 className='text-[#7275A1] text-[14px] font-[600] mt-2 mb-3'>Select Color</h3>
                <div className='flex flex-wrap gap-y-2 gap-x-5'>
                  {Array.of("#00CC9A", "#C6DEE7", "#6389CB").map((color, i) => {
                    return (
                      <div className='w-8 h-8 rounded-full border-[1px] border-[#F1F1F1] cursor-pointer shadow-sm p-2' style={{ backgroundColor: color }} key={i}>

                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='mt-10'>
                <Button variant="filled" className="w-full mb-2 bg-my-pri-color rounded-md">
                  BUY NOW
                </Button>
                <Button variant="filled" className="w-full mb-2 text-my-pri-text-color bg-[#F1F1F1] rounded-md">
                  ADD TO CART
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>


      <Suggestions />


      <section className="mt-14 pb-2">
        <Reviews />
      </section>
    </div>
  )
}
