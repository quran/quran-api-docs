import '@stoplight/elements/styles.min.css'
import { API } from '@stoplight/elements'
import Select from 'react-select'
import { APIGroups, APIs } from '@/constants'
import { useRouter } from 'next/router'
import { useState } from 'react'

// @ts-ignore
import useMobileDetect from 'use-mobile-detect-hook'

type Props = {
  basePath: string
  apiDescriptionUrl: string
}

type Layout = 'sidebar' | 'stacked'
const APIDocs = ({ basePath, apiDescriptionUrl }: Props) => {
  const router = useRouter()
  const detectMobile = useMobileDetect()
  // const [layout, setLayout] = useState('sidebar' as Layout)
  const layout = detectMobile.isMobile() ? 'stacked' : 'sidebar'

  return (
    <div style={{ height: '100%' }}>
      <div className="h-12 flex items-center justify-between px-4 border-b">
        <div>Quran Foundation API Docs</div>
        <Select
          className="w-32 md:w-56"
          options={APIGroups}
          defaultValue={APIs.find((option) => option.value === basePath)}
          onChange={(val) => {
            const path = val?.value
            if (path) {
              router.push(path)
            }
          }}
        ></Select>
      </div>
      <div className="px-4 py-8 md:p-0 h-full">
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
