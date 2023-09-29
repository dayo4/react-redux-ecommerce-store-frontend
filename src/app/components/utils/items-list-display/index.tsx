
export const ItemsListDisplay = ({
    className,
    children
}: ItemsListDisplayProps) => {
    return (
        <div className="w-full">
            <div className={className + ' ' + 'flex align-middle'}>
                {children}
            </div>
        </div>
    )
}

interface ItemsListDisplayProps {
    className?: string
    children: React.ReactNode
}