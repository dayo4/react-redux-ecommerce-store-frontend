import { FadeLoader } from "react-spinners";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex justify-center align-middle bg-neutral-500">
            <FadeLoader
                color={'#3690FF'}
                loading={true}
                // cssOverride={override}
                // size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}