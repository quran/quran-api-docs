import '@stoplight/elements/styles.min.css'
import { API } from '@stoplight/elements'
// @ts-ignore
import useMobileDetect from 'use-mobile-detect-hook'
import { Navbar } from './navbar'

type Props = {
  basePath: string
  apiDescriptionUrl: string
}

const APIDocs = ({ basePath, apiDescriptionUrl }: Props) => {
  const detectMobile = useMobileDetect()
  const layout = detectMobile.isMobile() ? 'stacked' : 'sidebar'

  return (
    <div style={{ height: '100%' }}>
      <div className="px-4 py-8 md:p-0 h-full">
        <Navbar basePath={basePath} />
        <API
          layout={layout}
          basePath={basePath}
          apiDescriptionUrl={apiDescriptionUrl}
        />
      </div>
    </div>
  )
}

export default APIDocs
