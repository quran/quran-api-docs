export const APIs = [
  {
    label: 'Quran.com Auth',
    value: '/qdc-auth-v1',
    group: 'Quran.com Auth',
  },
  {
    label: 'Quran.com V4',
    value: '/qdc-v4',
    group: 'Quran.com',
  },
  {
    label: 'Getting started With Auth',
    value: '/guides/getting-started-oauth2',
    group: 'Guides',
  },
  // {
  //   label: 'Quran.com OAuth2 Server',
  //   value: '/qdc-oauth2',
  //   group: 'Quran.com Auth',
  // },
]

const groups = ['Quran.com Auth', 'Quran.com', 'Guides']

export const APIGroups = groups.map((group) => ({
  label: group,
  options: APIs.filter((api) => api.group === group),
}))

export const websiteName = 'Quran Foundation API Docs'
