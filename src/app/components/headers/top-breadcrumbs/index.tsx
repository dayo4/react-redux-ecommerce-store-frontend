
export const TopBreadcrumb = ({
    links
}: TopBreadcrumbProps) => {
    return (
        <div>
            {links.map((link) => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}

interface TopBreadcrumbProps {
    links: string[]
}