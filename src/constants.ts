export const APIs = [
  {
    label: 'V1 APIs',
    value: '/qdc-auth-v1',
    group: 'Quran.com Auth',
  },
  {
    label: 'V4 APIs',
    value: '/qdc-v4',
    group: 'Quran.com Backend',
  },
  {
    label: 'Getting started With OAuth 2.0',
    value: '/guides/getting-started-with-oauth2',
    group: 'Quran.com Auth',
  },
  {
    label: 'Getting started With OAuth 2.0',
    value: '/guides/scopes',
    group: 'Quran.com Auth',
  },
  // {
  //   label: 'Quran.com OAuth2 Server',
  //   value: '/qdc-oauth2',
  //   group: 'Quran.com Auth',
  // },
]

const groups = ['Quran.com Auth', 'Quran.com Backend']

export const APIGroups = groups.map((group) => ({
  label: group,
  options: APIs.filter((api) => api.group === group),
}))

export const websiteName = 'Quran Foundation API Docs'
