import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import Icon from '@mdi/react';
import {
    mdiAlert,
    mdiAlertBox,
    mdiArrowRight,
    mdiHeart, mdiHeartOutline, mdiHome, mdiMagnify, mdiStoreSearch, mdiTrashCan, mdiTrashCanOutline
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
        <Breadcrumbs
            separator={
                <Icon path={mdiArrowRight} size={1} />
            }
            className="rounded-full border border-white bg-gradient-to-tr from-gray-900 to-gray-800 p-1 mt-5 mb-2"
        >
            <Link href={"/"} className="rounded-full bg-white px-3 py-1 font-medium text-gray-900">
                {<Icon path={mdiHome} size={1} />}
            </Link>
            {links.map((link, i) => {
                return (
                    <Link href={link.href} className="rounded-full bg-white px-3 py-1 font-medium text-gray-900" key={i}>
                        {link.title}
                    </Link>
                )
            })}

        </Breadcrumbs>
    )
}

interface Links {
    title: string
    href: Url
}

interface TopBreadcrumbProps {
    links: Links[]
}