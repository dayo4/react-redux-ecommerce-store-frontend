import Image from 'next/image'
import { } from '@/redux'
import { PriSectionHeader, TopBreadcrumb } from './components/headers'

export default function Home() {

  return (
    <section className="">
      <PriSectionHeader title='New Release'></PriSectionHeader>

      <div className='h-[350px] w-full bg-home-hero bg-no-repeat bg-cover' ></div>
    </section>
  )
}
