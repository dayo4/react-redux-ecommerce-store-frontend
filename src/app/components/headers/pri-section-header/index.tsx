
export const PriSectionHeader = ({
    title
}: PriSectionHeaderProps) => {
    return (
        <div>
            {title}
        </div>
    )
}

interface PriSectionHeaderProps {
    title: string
}