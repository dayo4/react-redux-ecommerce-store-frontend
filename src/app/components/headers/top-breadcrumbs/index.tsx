import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

export const TopBreadcrumb = ({
    links
}: TopBreadcrumbProps) => {
    return (
        <div>
            {links.map((link, i) => {
                return (
                    <Link href={link.href} key={i}>
                        {link.title + (i < links.length ? ' / ' : '')}
                    </Link>
                )
            })}
        </div>
    )
}

interface Links {
    title: string
    href: Url
}

interface TopBreadcrumbProps {
    links: Links[]
}