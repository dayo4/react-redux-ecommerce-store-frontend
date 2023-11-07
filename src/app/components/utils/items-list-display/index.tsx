
export const ItemsListDisplay = ({
    className,
    children
}: ItemsListDisplayProps) => {
    return (
        <div className="w-full">
            <div className={className + ' ' + 'flex items-center'}>
                {children}
            </div>
        </div>
    )
}

interface ItemsListDisplayProps {
    className?: string
    children: React.ReactNode
}