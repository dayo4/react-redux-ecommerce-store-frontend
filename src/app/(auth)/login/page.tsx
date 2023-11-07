'use client'
import { TopBreadcrumb } from "@/app/components/utils";
import {
    Input,
    Button,
} from "@material-tailwind/react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import GoogleIcon from '@/assets/icons/google.svg';
import { useDispatch, useSelector } from '@/redux'
import { authApi, LoginData } from '@/redux/queries/authApi'
import { useState } from "react";


export default function Login(props: React.PropsWithChildren) {
    const { push } = useRouter()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { useLoginUserMutation } = authApi;

    const [triggerLogin, { data, error, isLoading, }] = useLoginUserMutation()

    const login = async (loginData: LoginData) => {
        try {
            const result = await triggerLogin(loginData)
            if (result) {
                console.log(result)
                // setStage(2)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <TopBreadcrumb links={[
                { title: "Login", href: "/login" },
            ]} />

            <form className="pt-12 lg:px-16">
                <h1 className="text-3xl font-bold mb-14">Welcome Back</h1>

                <div className="mb-8">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} variant="standard" type={"email"} placeholder='Email' name='email' className="bg-gray-100 px-2 text-xl" />
                </div>
                <div className="mb-8">
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} variant="standard" type={"password"} placeholder='Password' name='password' className="bg-gray-50 px-2 text-xl" />
                </div>

                <div className="mb-8 text-right font-medium">
                    <Link href={'/reset-password'} className="text-my-pri-color">Forgot Password?</Link>
                </div>

                <Button onClick={() => login({ email, password })} className="w-full mb-8">Log in</Button>

                <div className="mb-8 font-medium">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link href={'/register'} className="text-my-pri-color"> Sign Up</Link>
                </div>

                <Button variant="outlined" className="w-full items-center justify-center mb-8 flex bg-white text-black">
                    <Image src={GoogleIcon} placeholder='empty' alt='google icon' width={22} height={22} className='mr-2' />
                    <span className="mt-1">Log in with Google</span>
                </Button>
            </form>
        </div>
    )
}