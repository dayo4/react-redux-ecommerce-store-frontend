import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader, TopBreadcrumb } from './components/headers'
import { Button, Rating } from "@/app/components/materials";

export default function Home() {

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
  ]

  return (
    <div className="">
      <section className="HeroBg mt-2 px-6" >
        <div className='flex justify-between align-middle relative'>
          <div className="max-w-[250px] lg:max-w-[400px] pt-8 ml-8">
            <h2 className="text-[32px] font-[700] text-my-pri-text-color">Online Shopping Made Easier</h2>
            <p className="font-[500] mt-3">Show them the love this summer, and get 50% off your purchase</p>
          </div>
          <Image src="/img/t-shirt.png" className="hidden lg:block lg:right-5 xl:right-28 absolute" alt="T-shirt Image" width={253.79} height={244.33}></Image>
        </div>

        <div className='ml-8 mt-6'>
          <Button variant="filled" className="block mb-2 capitalize bg-my-pri-text-color">
            Shop Now
          </Button>
        </div>
      </section>


      <section className="mt-14 pb-2">
        <PriSectionHeader title="New Release"></PriSectionHeader>
        <div className='flex flex-wrap gap-x-5 gap-y-3 align-middle mt-6'>
          {Items.map((item, i) => {
            return (
              <Link href={item.link} className='bg-[#FBFBFB] p-2 rounded-sm'>
                <Image src={item.img} className="rounded-xl" alt={item.name} width={148} height={198} key={i}></Image>
                <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2'>{item.name}</h3>
                <p className='font-bold text-xl mt-1'> {item.price}</p>
                <Rating readonly value={item.rating} className='my-1 -ml-1' />
              </Link>
            )
          })}

        </div>
      </section>

    </div>
  )
}
