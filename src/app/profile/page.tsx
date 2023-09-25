import Icon from '@mdi/react';
import {
    mdiHeart, mdiHeartOutline, mdiMagnify, mdiStoreSearch, mdiTrashCan, mdiTrashCanOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader, TopBreadcrumb } from '@/app/components/headers'
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
} from "@/app/components/materials";



export default function Reviews() {

    return (
        <div>
            <TopBreadcrumb links={[
                {title: "Settings", href: "/settings"},
                {title: "Profile", href: "/profile"},
            ]} />

            <div className='flex justify-center'>
                <div className='p-3 basis-11/12 md:basis-10/12'>
                    <section className='flex justify-between my-4'>
                        <span></span>
                        <span className='font-[500]'>Welcome! <span className='text-my-pri-color'>Olayinka</span></span>
                    </section>

                    <section className=''>
                        <div className='flex flex-wrap justify-between'>
                            <div className='basis-full sm:basis-10/12 lg:basis-5/12 mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600'>First Name</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 lg:basis-5/12 mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600'>First Name</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 lg:basis-5/12 mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600'>First Name</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 lg:basis-5/12 mb-8'>
                                <h3 className='font-bold mb-2 text-gray-600'>First Name</h3>
                                <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                        </div>

                        <hr className='my-8' />

                        <div className='flex flex-wrap justify-between'>
                            <h3 className='basis-full font-bold mb-4'>Password Changes</h3>
                            <div className='basis-full sm:basis-10/12 lg:basis-5/12 mb-8'>
                                <Input variant='standard' label='Old Password' autoComplete='false' type='password' className='w-full bg-[#F5F5F5] pl-2' />
                            </div>
                            <div className='basis-full sm:basis-10/12 lg:basis-5/12 mb-8'>
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
