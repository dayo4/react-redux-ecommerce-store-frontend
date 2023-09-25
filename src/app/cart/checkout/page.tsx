import Icon from '@mdi/react';
import {
    mdiHeart, mdiHeartOutline, mdiMagnify, mdiStoreSearch, mdiTrashCan, mdiTrashCanOutline
} from '@mdi/js';
import Image from 'next/image'
import Link from 'next/link'
import { } from '@/redux'
import MastercardIcon from '@/assets/icons/pay/mastercard.svg';
import VisaIcon from '@/assets/icons/pay/visa.svg';
import BkashIcon from '@/assets/icons/pay/bkash.svg';
import NagadIcon from '@/assets/icons/pay/nagad.svg';

import { TopBreadcrumb } from '@/app/components/headers'
import BillingComponent from '@/app/components/profile/billing'
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
    Radio,
} from "@/app/components/materials";



export default function Checkout() {

    return (
        <div>
            <TopBreadcrumb links={[
                {title: "Cart", href: "/cart"},
                {title: "Checkout", href: "/cart/checkout"},
            ]} />

            <div className='flex flex-wrap justify-center lg:justify-between'>
                <section className='p-3 basis-11/12 lg:basis-5/12'>
                    <BillingComponent />
                </section>

                <section className='p-3 basis-11/12 lg:basis-5/12'>
                    <Card className='basis-11/12 sm:basis-9/12 md:basis-5/12 xl:basis-4/12 border-[1px] border-[#cacaca] font-[500]'>
                        <CardHeader className='text-' floated={false} shadow={false}>
                            <div className="flex justify-between align-middle px-1">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={"/img/item1.png"}
                                        alt={""}
                                        height={20}
                                        width={40}
                                        className="p-1"
                                    />
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold"
                                    >
                                        Joli Dress
                                    </Typography>
                                </div>
                                <div>
                                    $1750
                                </div>
                            </div>
                            <hr className='mt-7' />
                        </CardHeader>
                        <CardBody>
                            <p className='flex justify-between border-b-2 py-2'>
                                <span>Subtotal:</span>
                                <span>$1750</span>
                            </p>
                            <p className='flex justify-between border-b-2 py-2'>
                                <span>Shipping:</span>
                                <span>Free</span>
                            </p>
                            <p className='flex justify-between border-b-2 py-2 font-bold'>
                                <span>Total:</span>
                                <span>$1750</span>
                            </p>
                        </CardBody>
                        <CardFooter className=''>
                            <div className='flex justify-between align-middle'>
                                <Radio name='payment' label={
                                    <Typography className="font-medium">
                                        Bank
                                    </Typography>
                                } />
                                <div>
                                    <Tooltip content="Master Card">
                                        <Button variant='text' className='mr-1 p-1'>
                                            <Image src={MastercardIcon} alt="Payment logo" height={40} width={30}></Image>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip content="Visa Card">
                                        <Button variant='text' className='mr-1 p-1'>
                                            <Image src={VisaIcon} alt="Payment logo" height={40} width={30}></Image>
                                        </Button>
                                    </Tooltip>
                                </div>
                            </div>
                            <div>
                                <Radio name='payment' label={
                                    <Typography className="font-medium">
                                        Cash On Delivery
                                    </Typography>
                                } />
                            </div>


                            <div className='flex justify-center mt-10'>
                                <Button variant="filled" className="mb-2 bg-my-pri-color rounded-md">
                                    <Link href={"/cart/checkout"} >
                                        Place Order
                                    </Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </section>
            </div>
        </div>
    )
}
