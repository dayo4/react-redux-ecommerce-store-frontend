
export const ItemsCarousel = ({
    className,
    children
}: PriSectionHeaderProps) => {
    return (
        <div className="overflow-y-hidden w-full">
            <div className={className + ' ' + ' flex align-middle overflow-x-scroll translate-y-5'}>
                {children}
            </div>
        </div>
    )
}

interface PriSectionHeaderProps {
    className?: string
    children: React.ReactNode
}