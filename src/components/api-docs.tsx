import '@stoplight/elements/styles.min.css'
import { API } from '@stoplight/elements'
import Select from 'react-select'
import { APIs } from '@/constants'
import { useRouter } from 'next/router'

const options = APIs.map((api) => ({ value: api.url, label: api.title }))

type Props = {
  basePath: string
  apiDescriptionUrl: string
}

const APIDocs = ({ basePath, apiDescriptionUrl }: Props) => {
  const router = useRouter()
  return (
    <div style={{ height: '100%' }}>
      <div className="h-12 flex items-center justify-between px-4 border-b">
        <div>Quran Foundation API Docs</div>
        <Select
          options={options}
          defaultValue={options.find((option) => option.value === basePath)}
          onChange={(val) => {
            const path = val?.value
            if (path) {
              router.push(path)
            }
          }}
        ></Select>
      </div>
      <API basePath={basePath} apiDescriptionUrl={apiDescriptionUrl} />
    </div>
  )
}

export default APIDocs
