import {FadeLoader} from "react-spinners";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <FadeLoader
        // color={color}
        loading={true}
        // cssOverride={override}
        // size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
}