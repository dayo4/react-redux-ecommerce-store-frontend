// import { FadeLoader } from "react-spinners";
'use client'
import { Spinner } from "@material-tailwind/react";
import Loader from '../loaders/main'

export default function Loading() {

    return (
        <Loader />
        // <div className="flex justify-center items-center w-full h-full bg-neutral-300">
        //     {/* <FadeLoader
        //         color={'#3690FF'}
        //         loading={true}
        //         // cssOverride={override}
        //         // size={150}
        //         aria-label="Loading Spinner"
        //         data-testid="loader"
        //     /> */}
        //           <Spinner  color="green" className="h-14 w-14" />
        // </div>
    )
}