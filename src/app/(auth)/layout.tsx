'use client'
import { Carousel } from "@material-tailwind/react";
import Image from 'next/image'
import Authpage1 from '@/assets/imgs/authpage1.jpg';
import Authpage2 from '@/assets/imgs/authpage2.jpg';


export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <div>
            <div className="flex gap-x-8 justify-center align-middle">
                <section className="basis-11/12 sm:basis-9/12 md:basis-7/12 lg:basis-1/2">

                    {children}
                </section>

                <section className="hidden lg:block lg:basis-1/2">
                    <Carousel autoplay loop prevArrow={() => null} nextArrow={() => null}  className="rounded-xl">
                        <div className="relative">
                            <img
                                src={Authpage1.src}
                                alt={""}
                                className="p-1 w-full h-full"
                            />
                            <div className="absolute inset-0 max-w-full px-12 pt-16 text-white">
                                <h2 className="text-[36px] mt-28 font-bold">
                                    List, Sell, Thrive, Repeat.
                                </h2>
                                <p className="text-[19px] mt-6">
                                    Reach more customers and increase sales with Reni
                                </p>
                                <p className="mt-24 text-[19px]">
                                    Finally, all your work in one place.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={Authpage2.src}
                                alt={""}
                                className="p-1 w-full h-full"
                            />
                            <div className="absolute inset-0 max-w-full px-12 pt-16 text-white">
                                <h2 className="text-[36px] mt-28 font-bold">
                                    Shop Securely
                                </h2>
                                <p className="text-[19px] mt-6">
                                    Your Trusted Destination for Safe Online Shopping.
                                </p>
                                <p className="mt-24 text-[19px]">
                                    Finally, an all in one e-commerce store.
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </section>
            </div>
        </div>
    );
}