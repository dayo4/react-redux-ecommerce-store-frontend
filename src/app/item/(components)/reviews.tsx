'use client'
import Icon from '@mdi/react';
import {
    mdiHeart, mdiHeartOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader } from '@/app/components/utils'
import { Button, Rating, Textarea } from "@material-tailwind/react";

export default function Reviews() {

    const Items = [
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it i could give anything for it i could give anything for it.", rating: 4 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 2.1 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 4.8 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 3.4 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 4.0 },
    ]

    return (
        <div className="">
            <div className='max-w-[500px] mb-12'>
                <Textarea label='Add Review'></Textarea>
            </div>

            <PriSectionHeader title="Reviews"></PriSectionHeader>
            <div className='mt-6'>
                {Items.map((review, i) => {
                    return (
                        <div className='flex ' key={i}>
                            {/* <Rating readonly value={review.rating} className='my-1 -ml-1' /> */}
                            <div className="flex items-center mt-1 w-[70px]">
                                <svg className="w-5 h-5 -ml-1 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="ml-1 text-sm font-bold text-gray-500 dark:text-white">{review.rating}</p>
                            </div>
                            <div className='px-5 ml-6'>
                                <p className='font-[500] text-[#8C8C8C] text-[14px] mt-1'> {review.desc}</p>
                                <h3 className='text-my-pri-text-color text-[17px] font-bold mt-2'>{review.name}</h3>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}
