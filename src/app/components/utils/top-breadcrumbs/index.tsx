import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import Icon from '@mdi/react';
import {
    mdiAlert,
    mdiAlertBox,
    mdiArrowRight,
    mdiHeart, mdiHeartOutline, mdiHome, mdiHomeOutline, mdiMagnify, mdiStoreSearch, mdiTrashCan, mdiTrashCanOutline
} from '@mdi/js';
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
    Alert,
    Breadcrumbs
} from "@/app/components/materials";

export const TopBreadcrumb = ({
    links
}: TopBreadcrumbProps) => {
    return (
        <div className='rounded-md border border-gray-200 mt-5 mb-5'>
            <p
                className="flex p-1"
            >
                <Link href={"/"} className="px-1 font-medium text-gray-500 hover:text-my-pri-color">
                    {<Icon path={mdiHomeOutline} size={0.95} />}
                </Link>
                {links.map((link, i) => {
                    return (
                        <div key={i}>
                            <span className='text-xl mx-1 text-gray-500'>/</span>
                            <Link href={link.href} className="px-1 text-sm font-bold text-gray-500 hover:text-my-pri-color" key={i}>
                                <span className=''>{link.title}</span>
                            </Link>
                        </div>
                    )
                })}

            </p>
        </div>
        // <div className='overflow-hidden'>
        //     <div className='overflow-x-scroll translate-y-5'>
        //         <Breadcrumbs
        //             separator={
        //                 <span className='text-2xl'>/</span>
        //             }
        //             className="rounded-full bg-gray-200 p-1 mt-5 mb-5 max-w-full"
        //         >
        //             <Link href={"/"} className="rounded-full bg-white px-3 py-1 font-medium text-gray-600">
        //                 {<Icon path={mdiHome} size={1} />}
        //             </Link>
        //             {links.map((link, i) => {
        //                 return (
        //                     <Link href={link.href} className="rounded-full bg-white px-3 py-1 font-medium text-gray-900 max-w-[200px] whitespace-nowrap overflow-x-hidden" key={i}>
        //                         <span className=''>{link.title}</span>
        //                     </Link>
        //                 )
        //             })}

        //         </Breadcrumbs>
        //     </div>
        // </div>
    )
}

interface Links {
    title: string
    href: Url
}

interface TopBreadcrumbProps {
    links: Links[]
}