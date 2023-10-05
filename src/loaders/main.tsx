'use client'
import {
    Input,
    Button,
} from "@material-tailwind/react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useDispatch, useSelector } from '@/redux'
import { } from '@/redux/queries'
import { useState } from "react";


export default function MainLoader(props: React.PropsWithChildren) {
    const { push } = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className="flex justify-center align-middle h-full w-full absolute bg-gray-200 bg-opacity-25">
            <div className="MainLoaderSpinner"></div>
        </div>
    )
}