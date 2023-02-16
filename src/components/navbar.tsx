import Select from 'react-select'
import { APIGroups, APIs, websiteName } from '@/constants'
import { useRouter } from 'next/router'

type Props = { basePath?: string }
export const Navbar = (props: Props) => {
  const router = useRouter()
  return (
    <div className="h-12 flex items-center justify-between px-4 border-b">
      <div>{websiteName}</div>
      <Select
        instanceId="navbar"
        className="w-32 md:w-56"
        options={APIGroups}
        defaultValue={APIs.find((option) => option.value === props.basePath)}
        placeholder="Select API docs"
        onChange={(val) => {
          const path = val?.value
          if (path) {
            router.push(path)
          }
        }}
      ></Select>
    </div>
  )
}
