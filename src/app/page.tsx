import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader, ItemsCarousel } from './components/utils'
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
      <section className="HeroBg mt-7 sm:px-6" >
        <div className='flex justify-between align-middle relative'>
          <div className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] pt-8 ml-8">
            <h2 className="text-2xl md:text-[32px] font-[700] text-my-pri-text-color">Online Shopping Made Easier</h2>
            <p className="font-[500] mt-4">Show them the love this summer, and get 50% off your purchase</p>
          </div>
          <Image src="/img/t-shirt.png" className="hidden lg:block lg:right-5 xl:right-28 absolute" alt="T-shirt Image" width={253.79} height={244.33}></Image>
        </div>

        <div className='ml-8 mt-10 relative z-0'>
          <i className='absolute left-0 top-0 h-[40px] w-[107px] z-[1] rounded-md bg-[#FF56F6] -rotate-[10deg]'></i>
          <Button variant="filled" className="block mb-2 capitalize z-[2] bg-my-pri-text-color relative">
            Shop Now
          </Button>
        </div>
      </section>

      <section className="mt-14 pb-2">
        <PriSectionHeader title="New Release"></PriSectionHeader>
        <ItemsCarousel className='gap-x-4'>
          {Items.map((item, i) => {
            return (
              <Link href={item.link} className='bg-[#FBFBFB] p-2 rounded-sm' key={i}>
                <Image src={item.img} className="rounded-xl" alt={item.name} width={130} height={170}></Image>
                <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2'>{item.name}</h3>
                <p className='font-bold mt-1'> {item.price}</p>
                <Rating readonly value={item.rating} className='my-1 -ml-1' />
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
              <Link href={item.link} className='bg-[#FBFBFB] p-2 rounded-sm' key={i}>
                <Image src={item.img} className="rounded-xl" alt={item.name} width={130} height={170}></Image>
                <h3 className='text-[#7E7E7E] text-[12px] font-bold mt-2'>{item.name}</h3>
                <p className='font-bold mt-1'> {item.price}</p>
                <Rating readonly value={item.rating} className='my-1 -ml-1' />
              </Link>
            )
          })}
        </ItemsCarousel>
      </section>

    </div>
  )
}
