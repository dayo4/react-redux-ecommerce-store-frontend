
export const PriSectionHeader = ({
    children,
    title
}: PriSectionHeaderProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

interface PriSectionHeaderProps {
    children?: React.ReactNode
    title: string
}