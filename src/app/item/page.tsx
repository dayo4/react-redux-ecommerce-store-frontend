import Icon from '@mdi/react';
import {
  mdiHeart, mdiHeartOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader, TopBreadcrumb } from '@/app/components/headers'
import { Button, Rating, Input } from "@/app/components/materials";
import Reviews from "./(components)/reviews"

export default function Home() {

  const Items = [
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 2 },
    { name: "Printed Gown", link: "/item", img: "/img/item3.png", price: "$39.00", rating: 4 },
    { name: "Printed Gown", link: "/item", img: "/img/item1.png", price: "$39.00", rating: 3 },
    { name: "Printed Gown", link: "/item", img: "/img/item2.png", price: "$39.00", rating: 4 },
  ]

  return (
    <div className="">
      <section className="mt-2 px-6" >
        <div className='flex justify-center gap-x-14'>

          <section className='basis-2/3 max-w-[500px]'>
            <div className='min-h-[500px] relative rounded-md bg-[#F6F6F6] border-2'>
              <Image src={"/img/t-shirt.png"} className="rounded-md w-full h-full" fill alt={""}></Image>
            </div>
            <div className='overflow-y-hidden w-full'>
              <div className='flex align-middle pt-1 pb-2 gap-3 overflow-x-scroll translate-y-5'>
                {Array.of(7, 2, 3, 4, 5, 6).map((img, i) => {
                  return (
                    <div className='h-32 w-32 min-w-[128px] rounded-md bg-[#FCFCFC] cursor-pointer shadow-sm relative' key={i}>
                      <Image src={"/img/t-shirt.png"} className="rounded-md w-full h-full" fill alt={""}></Image>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className='basis-1/3 p-2'>
            <div>
              <h3 className='flex justify-between mt-3 mb-5'>
                <p className='text-my-pri-color text-[12px] font-[500] mt-2'>FASHION</p>
                <Icon className=""
                  path={mdiHeartOutline}
                  size={1.1} />
              </h3>

              <h1 className='text-my-sec-text-color text-xl font-bold'>Personalized T-Shirt</h1>

              <div className='flex justify-between align-middle mt-3 mb-5'>
                <p className='text-[#7275A1] text-[12px] font-[500] mt-2'>Size:  <b>XL</b></p>
                <Rating readonly value={4} className='my-1 -ml-1' />
              </div>

              <div className='flex justify-between align-middle mt-3 mb-5'>
                <p className='text-[#7275A1] text-[12px] font-[600] mt-2 mr-4'>Quantity:</p>
                <Input size='md' label='How Many' color='gray' className='w-[80px]' type={'number'} />
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


      <section className="mt-14 pb-2">
        <PriSectionHeader title="You May Also Like"></PriSectionHeader>
        <div className='flex flex-wrap gap-x-5 gap-y-3 align-middle mt-6'>
          {Items.map((item, i) => {
            return (
              <div className='bg-[#FBFBFB] p-2 rounded-sm'>
                <Image src={item.img} className="rounded-xl" alt={item.name} width={148} height={198} key={i}></Image>
                <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2'>{item.name}</h3>
                <p className='font-bold text-xl mt-1'> {item.price}</p>
                <Rating readonly value={item.rating} className='my-1 -ml-1' />
              </div>
            )
          })}

        </div>
      </section>

      <section className="mt-14 pb-2">
        <Reviews />
      </section>
    </div>
  )
}
