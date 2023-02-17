import { ReactElement } from 'react'
import Link from 'next/link'
import { isDevelopment } from '@/utils/is-development'

interface Props {
  href: string
  children: string | ReactElement
}

const CustomLink: React.FC<Props> = (props) => {
  const { href, children, ...rest } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink && !isDevelopment()) {
    return <Link href={href}>{children}</Link>
  }

  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </Link>
  )
}

export default CustomLink
