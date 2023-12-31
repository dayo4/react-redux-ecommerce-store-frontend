'use client'
import Icon from '@mdi/react';
import {
    mdiArrowLeft,
    mdiArrowRight,
    mdiHeart, mdiHeartOutline, mdiMagnify, mdiStoreSearch, mdiTrashCan,
    mdiTrashCanOutline
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
import { useState } from 'react';



export default function Reviews() {
    const [active, setActive] = useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };


    const TABLE_HEAD = ["Product", "Price", "Quantity", "Action", "Subtotal"];

    const TABLE_ROWS = [
        {
            img: "/img/item1.png",
            name: "Custom Gown",
            price: "$2,500",
            quantity: "2",
            action: "Delete",
            subtotal: "$5,000",
        },
        {
            img: "/img/item1.png",
            name: "Custom Gown",
            price: "$2,500",
            quantity: "2",
            action: "Delete",
            subtotal: "$5,000",
        },
        {
            img: "/img/item1.png",
            name: "Custom Gown",
            price: "$2,500",
            quantity: "2",
            action: "Delete",
            subtotal: "$5,000",
        },
    ];

    return (
        <div className='md:px-10'>
            <TopBreadcrumb links={[
                { title: "Cart", href: "/cart" },
            ]} />

            <Card className="shadow-none border border-gray-200">
                {/* <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Recent Transactions
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about the last transactions
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                type={'search'}
                                icon={<Icon path={mdiMagnify} className='cursor-pointer' size={1.1} />}
                            />
                        </div>
                        <Button className="flex items-center gap-3" size="sm">
                            Download
                        </Button>
                    </div>
                </div>
            </CardHeader> */}
                <CardBody className="overflow-auto px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="leading-none opacity-70"
                                        >
                                            <b>{head}</b>
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(
                                (
                                    {
                                        img,
                                        name,
                                        price,
                                        quantity,
                                        action,
                                        subtotal
                                    },
                                    index,
                                ) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={img}
                                                        alt={name}
                                                        height={60}
                                                        width={80}
                                                        className="border border-blue-gray-50 bg-blue-gray-50/50 p-1"
                                                    />
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold"
                                                    >
                                                        {name}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {price}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <input className='w-[60px] text-center border-[1px] border-[#cacaca] p-1 rounded-md focus:outline-my-pri-color' type={'number'} min={0}></input>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Detele Item">
                                                    <IconButton variant="text">
                                                        <Icon size={0.9} path={mdiTrashCanOutline} color={'#EA4335'} />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {subtotal}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex justify-end border-t border-blue-gray-50 p-4">
                    <div className="flex items-center gap-8">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={prev}
                            disabled={active === 1}
                        >
                            <Icon path={mdiArrowLeft} size={1} />
                        </IconButton>
                        <Typography color="gray" className="font-normal">
                            Page <strong className="text-gray-900">{active}</strong> of{" "}
                            <strong className="text-gray-900">10</strong>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={next}
                            disabled={active === 1}
                        >
                            <Icon path={mdiArrowRight} size={1} />
                        </IconButton>
                    </div>

                </CardFooter>
            </Card>

            <div className='flex my-12 pb-14'>

                <Card className='basis-11/12 sm:basis-9/12 md:basis-6/12 xl:basis-5/12 border border-gray-300 shadow-none  font-medium'>
                    <CardHeader className='text-xl' floated={false} shadow={false}>
                        Cart Total
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
                        <p className='flex justify-between border-b-2 font-bold py-2'>
                            <span>Total:</span>
                            <span>$1750</span>
                        </p>
                    </CardBody>
                    <CardFooter className='flex justify-center'>
                        <Link href={"/cart/checkout"} className='mb-2'>
                            <Button variant="filled" className="bg-my-pri-color rounded-md">
                                Process to checkout
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
