'use client'
import { TopBreadcrumb } from "@/app/components/utils";
import {
    Input,
    Button,
} from "@material-tailwind/react";
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import GoogleIcon from '@/assets/icons/google.svg';
import { useDispatch, useSelector } from '@/redux'
import { authApi, RegisterData } from '@/redux/queries/authApi'
import { useState } from "react";

export default function Register(props: React.PropsWithChildren) {
    const { push } = useRouter()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const { useRegisterUserMutation } = authApi;

    const [triggerRegister, { data, error, isLoading, }] = useRegisterUserMutation()

    const register = async (registerData: RegisterData) => {
        try {
            const result = await triggerRegister(registerData)
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
                { title: "Create Account", href: "/register" },
            ]} />

            <form className="pt-12 lg:px-16">
                <h1 className="text-3xl font-bold mb-14">Create Account</h1>

                <div className="mb-8">
                    <Input value={name} onChange={(e) => setName(e.target.value)} variant="standard" type={"text"} placeholder='Name' name='name' className="bg-gray-100 px-2 text-xl" />
                </div>
                <div className="mb-8">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} variant="standard" type={"email"} placeholder='Email' name='email' className="bg-gray-100 px-2 text-xl" />
                </div>
                <div className="mb-8">
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} variant="standard" type={"password"} placeholder='Password' name='password' className="bg-gray-50 px-2 text-xl" />
                </div>

                <Button className="w-full mb-8">Create account</Button>

                <div className="mb-8 font-medium">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link href={'/login'} className="text-my-pri-color"> Log In</Link>
                </div>

                <Button variant="outlined" className="w-full align-middle justify-center mb-8 flex bg-white text-black">
                    <Image src={GoogleIcon} alt='google icon' width={22} height={22} className='mr-2' />
                    <span className="mt-1">Sign Up with Google</span>
                </Button>
            </form>
        </div>
    )
}