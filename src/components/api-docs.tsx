import '@stoplight/elements/styles.min.css'
import { API } from '@stoplight/elements'

const APIDocs = () => {
  return (
    <div style={{ height: '100%' }}>
      <API apiDescriptionUrl="/qdc-open-api.json" />
    </div>
  )
}

export default APIDocs
