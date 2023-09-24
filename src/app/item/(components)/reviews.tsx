import Icon from '@mdi/react';
import {
    mdiHeart, mdiHeartOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader } from '@/app/components/headers'
import { Button, Rating, Input } from "@/app/components/materials";

export default function Reviews() {

    const Items = [
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 4 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 2 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 4 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 3 },
        { name: "Fahad Abass", desc: "I really love this item, i could give anything for it.", rating: 4 },
    ]

    return (
        <div className="">

                <PriSectionHeader title="Reviews"></PriSectionHeader>
                <div className='mt-6'>
                    {Items.map((review, i) => {
                        return (
                            <div className='p-2 flex '>
                                <Rating readonly value={review.rating} className='my-1 -ml-1' />
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
