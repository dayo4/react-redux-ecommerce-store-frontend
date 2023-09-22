import Image from 'next/image'
import { } from '@/redux'
import { PriSectionHeader, TopBreadcrumb } from './components/headers'

export default function Home() {

  return (
    <div className="">
      <section className="HeroBg mt-2 flex justify-between align-middle px-6" >
        <div className="max-w-[250px] lg:max-w-[400px]">
          <h2 className="text-[32px] font-[700] text-my-pri-text-color">Online Shopping Made Easier</h2>
          <p className="font-[500]">Show them the love this summer, and get 50% off your purchase</p>
        </div>
        <Image src="/img/t-shirt.png" className="hidden lg:block lg:mr-5 xl:mr-28" alt="T-shirt Image" width={253.79} height={244.33}></Image>
      </section>
      <section className="HeroBg mt-2 flex justify-between align-middle px-6" >
        <div className="max-w-[250px] lg:max-w-[400px]">
          <h2 className="text-[32px] font-[700] text-my-pri-text-color">Online Shopping Made Easier</h2>
          <p className="font-[500]">Show them the love this summer, and get 50% off your purchase</p>
        </div>
        <Image src="/img/t-shirt.png" className="hidden lg:block lg:mr-5 xl:mr-28" alt="T-shirt Image" width={253.79} height={244.33}></Image>
      </section>
      <section className="HeroBg mt-2 flex justify-between align-middle px-6" >
        <div className="max-w-[250px] lg:max-w-[400px]">
          <h2 className="text-[32px] font-[700] text-my-pri-text-color">Online Shopping Made Easier</h2>
          <p className="font-[500]">Show them the love this summer, and get 50% off your purchase</p>
        </div>
        <Image src="/img/t-shirt.png" className="hidden lg:block lg:mr-5 xl:mr-28" alt="T-shirt Image" width={253.79} height={244.33}></Image>
      </section>
      <section className="HeroBg mt-2 flex justify-between align-middle px-6" >
        <div className="max-w-[250px] lg:max-w-[400px]">
          <h2 className="text-[32px] font-[700] text-my-pri-text-color">Online Shopping Made Easier</h2>
          <p className="font-[500]">Show them the love this summer, and get 50% off your purchase</p>
        </div>
        <Image src="/img/t-shirt.png" className="hidden lg:block lg:mr-5 xl:mr-28" alt="T-shirt Image" width={253.79} height={244.33}></Image>
      </section>

      <section className="mt-14">
        <PriSectionHeader title="New Release"></PriSectionHeader>
      </section>
    </div>
  )
}
