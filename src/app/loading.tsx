// import { FadeLoader } from "react-spinners";
import { Spinner } from "@/app/components/materials";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex justify-center align-middle w-full h-full bg-neutral-300">
            {/* <FadeLoader
                color={'#3690FF'}
                loading={true}
                // cssOverride={override}
                // size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}
                  <Spinner  color="green" className="h-14 w-14" />
        </div>
    )
}