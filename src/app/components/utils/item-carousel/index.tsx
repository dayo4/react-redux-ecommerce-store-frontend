
export const ItemsCarousel = ({
    className,
    children
}: ItemsCarouselProps) => {
    return (
        <div className="overflow-y-hidden w-full">
            <div className={className + ' ' + 'flex items-center overflow-x-scroll translate-y-5'}>
                {children}
            </div>
        </div>
    )
}

interface ItemsCarouselProps {
    className?: string
    children: React.ReactNode
}