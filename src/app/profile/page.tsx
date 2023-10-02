'use client'
import Icon from '@mdi/react';
import {
    mdiHeart, mdiHeartOutline, mdiMagnify, mdiStoreSearch, mdiTrashCan, mdiTrashCanOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader, TopBreadcrumb } from '@/app/components/utils'
import {
    Rating,
    Input,
    Spinner,
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

export default function Reviews() {

    return (
        <div>
            <TopBreadcrumb links={[
                { title: "Settings", href: "/settings" },
                { title: "Profile", href: "/profile" },
            ]} />

            <div className='flex justify-center'>
                <div className='p-3 basis-11/12 md:basis-10/12'>
                    <section className='flex justify-between mt-4 mb-8'>
                        <span></span>
                        <span className='font-[500]'>Welcome! <span className='text-my-pri-color'>Olayinka</span></span>
                    </section>

                    <section className=''>
                        <div className='flex flex-wrap gap-x-6 justify-center'>
                            <div className='basis-full sm:basis-10/12 md:basis-[calc(50%-24px)] mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600 text-sm'>First Name</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 md:basis-[calc(50%-24px)] mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600 text-sm'>Last Name</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 md:basis-[calc(50%-24px)] mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600 text-sm'>Email</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 md:basis-[calc(50%-24px)] mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600 text-sm'>Address</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div></div>
                            <div className='mb-6'>
                                <Button variant="text" className="mb-2 rounded-md mr-3">
                                    Cancel
                                </Button>
                                <Button variant="filled" className="mb-2 bg-my-pri-color rounded-md">
                                    Save Changes
                                </Button>
                            </div>
                        </div>

                        <hr className='my-8' />

                        <div className='flex flex-wrap gap-x-6 justify-center'>
                            <h3 className='basis-full font-bold mb-4'> Change Password</h3>
                            <div className='basis-full sm:basis-10/12 md:basis-[calc(50%-24px)] mb-8'>
                                <Input variant='standard' label='Current Password' autoComplete='false' type='password' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 md:basis-[calc(50%-24px)] mb-8'>
                                <Input variant='standard' label='New Password' autoComplete='false' type='password' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div></div>
                            <div className='mb-6'>
                                <Button variant="text" className="mb-2 rounded-md mr-3">
                                    Cancel
                                </Button>
                                <Button variant="filled" className="mb-2 bg-my-pri-color rounded-md">
                                    Save Changes
                                </Button>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}
