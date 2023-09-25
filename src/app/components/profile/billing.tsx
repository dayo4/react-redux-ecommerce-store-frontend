import Icon from '@mdi/react';
import {
    mdiAlert,
    mdiAlertBox,
    mdiHeart, mdiHeartOutline, mdiMagnify, mdiStoreSearch, mdiTrashCan, mdiTrashCanOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import { PriSectionHeader } from '@/app/components/headers'
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
    Checkbox,
    Alert
} from "@/app/components/materials";



export default function Checkout() {

    return (
        <div className=''>
            <div className='flex mb-10'>
                <Button variant="filled" className="bg-my-pri-color w-28 rounded-md mr-3">
                    Log In
                </Button>
                <Button variant="outlined" className="rounded-md w-28">
                    Sign Up
                </Button>
            </div>

            <h1 className='font-[500] text-4xl mb-8'>Billing Details</h1>

            <section className=''>
                <h1 className='font-bold mb-8 relative'>
                    Personal details
                    <i className='absolute w-[calc(100%-130px)] border-gray-500 border-b-2 top-[49%] left-[130px]'></i>
                </h1>

                <div className='mb-8'>
                    <h3 className='font-bold mb-2 text-gray-500'>First Name</h3>
                    <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                </div>

                <h1 className='font-bold mb-8 mt-12 relative'>
                    Personal details
                    <i className='absolute w-[calc(100%-130px)] border-gray-500 border-b-2 top-[49%] left-[130px]'></i>
                </h1>

                <div className='mb-8'>
                    <h3 className='font-bold mb-2 text-gray-500'>First Name</h3>
                    <Input variant='standard' type='text' className='w-full bg-[#F5F5F5] pl-2' />
                </div>

                <Checkbox
                    label={
                        <div>
                            <Typography variant="small" color="gray" className="font-normal">
                                Save this information for faster check-out next time
                            </Typography>
                        </div>
                    }
                />

                <Alert variant='ghost' icon={<Icon className='text-[#FBBC05]' path={mdiAlertBox} size={1} />} className='bg-transparent pl-[10px] text-gray-600 font-bold text-sm'>Note: The above details will be used to create an account for this user to facilitate future purchases here. </Alert>



            </section>
        </div>
    )
}
