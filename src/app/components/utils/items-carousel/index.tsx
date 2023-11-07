import Icon from '@mdi/react';
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import {
    IconButton,
} from "@material-tailwind/react";

export const ItemsCarousel = ({
    className,
    children
}: PriSectionHeaderProps) => {
    return (
        <div className="overflow-y-hidden w-full relative">
            <div className={className + ' ' + ' ItemsCarousel flex items-center overflow-x-scroll scrollsn snap-x overscroll-x-contain translate-y-5'}>
                {children}
            </div>
                {/* <Icon path={mdiArrowLeft} size={1.2} className='text-my-pri-color absolute top-[45%] left-[3%] bg-gray-50 rounded-full'></Icon> */}
        </div>
    )
}

interface PriSectionHeaderProps {
    className?: string
    children: React.ReactNode
}