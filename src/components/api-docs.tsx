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
      <div className="py-8 md:p-0 h-full">
        <Navbar basePath={basePath} />
        <div className="lg:px-0 px-4 h-full">
          <API
            layout={layout}
            basePath={basePath}
            apiDescriptionUrl={apiDescriptionUrl}
          />
        </div>
      </div>
    </div>
  )
}

export default APIDocs
