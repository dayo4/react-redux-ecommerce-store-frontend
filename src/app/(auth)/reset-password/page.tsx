'use client'
import { TopBreadcrumb } from "@/app/components/utils";
import {
    Input,
    Button,
} from "@material-tailwind/react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import Icon from '@mdi/react';
import {
    mdiArrowLeft,
} from '@mdi/js';
import { useState } from "react";
import { useDispatch, useSelector } from '@/redux'
import { authApi, ResetData } from '@/redux/queries/authApi'


export default function Login(props: React.PropsWithChildren) {
    const [stage, setStage] = useState(1)
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const { push } = useRouter()
    const dispatch = useDispatch()

    const { usePasswordResetMutation } = authApi;

    const [triggerReset, { data, error, isLoading, }] = usePasswordResetMutation()

    const sendEmail = async (data:ResetData) => {
        try {
            const result = await triggerReset(data)
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
                { title: "Reset Password", href: "/reset-password" },
            ]} />

            {
                stage === 1 ?
                    PasswordResetState1() :
                    PasswordResetState2()
            }

        </div>
    )

    function PasswordResetState1() {
        return (
            <form className="pt-12 lg:px-16">
                <h1 className="text-3xl font-bold mb-14">Forgot password?</h1>

                <div className="mb-8">
                    <p>Enter the email address you used when you joined and we’ll send you code to reset your password.</p>
                </div>
                <div className="mb-8">
                    <Input onChange={(e) => setEmail(e.target.value)} value={email} variant="standard" type={"email"} placeholder='Email' name='email' className="bg-gray-100 px-2 text-xl" />
                </div>

                <Button onClick={() => /* setStage(2) */sendEmail({ email })} className="w-full mb-8">Continue</Button>

                <Button onClick={() => push('/login')} variant="text" className="w-full items-center justify-center mb-8 flex bg-white text-black">
                    <Icon path={mdiArrowLeft} size={1} />
                    <span className="mt-1 ml-2">Go Back</span>
                </Button>
            </form>
        )
    }

    function PasswordResetState2() {
        return (
            <form className="pt-12 lg:px-16">
                <h1 className="text-3xl font-bold mb-14">Forgot password?</h1>

                <div className="mb-8">
                    <p>We sent the code to <b> {" "+email}</b></p>
                </div>
                <div className="mb-8">
                    <Input onChange={(e) => setCode(e.target.value)} value={code} variant="standard" type={"text"} placeholder='Reset Code' name='code' className="bg-gray-100 px-2 text-xl" />
                </div>

                <Button className="w-full mb-8">Reset Password</Button>

                <div className="mb-8 font-medium flex ">
                    <span className="text-gray-600">You didn't receive the email? </span>
                    <p onClick={() => setStage(1)} className="text-my-pri-color ml-1 cursor-pointer"> Click to resend</p>
                </div>

                <Button onClick={() => setStage(1)} variant="text" className="w-full items-center justify-center mb-8 flex bg-white text-black">
                    <Icon path={mdiArrowLeft} size={1} />
                    <span className="mt-1 ml-2">Go Back</span>
                </Button>
            </form>
        )
    }
}