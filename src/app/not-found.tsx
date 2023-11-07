'use client'
import Link from 'next/link'
import {
  Button,
} from "@material-tailwind/react";

export default function NotFound() {
  return (
    <div className='w-full h-full flex justify-center items-center text-center'>
      <div className='basis-11/12 sm:basis-10/12 lg:basis-8/12'>
        <h1 className='text-[60px]'>404 Not Found</h1>
        <p>Could not find the page you are looking for</p>

        <Button variant="filled" className="bg-my-pri-color mb-2 my-10 rounded-md">
          <Link href={"/"} className={" flex pr-4 font-bold"} >
            Back to Home Page
          </Link>
        </Button>
      </div>
    </div>
  )
}