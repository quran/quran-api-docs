export const APIs = [
  {
    label: 'Quran.com Resource Server',
    value: '/qdc-auth-v1',
    group: 'Quran.com Auth',
  },
  {
    label: 'Quran.com V4',
    value: '/qdc-v4',
    group: 'Quran.com',
  },
  {
    label: 'Quran.com OAuth2 Server',
    value: '/qdc-oauth2',
    group: 'Quran.com Auth',
  },
]

const groups = ['Quran.com Auth', 'Quran.com']

export const APIGroups = groups.map((group) => ({
  label: group,
  options: APIs.filter((api) => api.group === group),
}))
