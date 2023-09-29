// import { Button } from "@/app/components/materials";

export const PriSectionHeader = ({
    title,
    extra
}: PriSectionHeaderProps) => {
    return (
        <div className="flex align-middle justify-between relative my-2 text-my-sec-text-color">
            <i className="absolute -top-2 left-0 h-[3px] w-36 br bg-gradient-to-r rounded-full from-my-pri-color to-transparent"></i>
            <h1 className="font-bold text-[18px] capitalize">
                {title}
            </h1>
            <div className="">
                {/* <Button variant="text">Button</Button> */}
                {extra}
            </div>
        </div>
    )
}

interface PriSectionHeaderProps {
    title: string | string[]
    extra?: any
}