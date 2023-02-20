enum API_GROUP {
  AUTH = 'Quran.com Auth APIs',
  OAUTH2 = 'OAuth 2/OpenId Connect',
  BACKEND = 'Quran.com Backend APIs',
}

const oAuth2List = [
  {
    label: 'Getting started With OAuth 2.0',
    value: '/guides/getting-started-with-oauth2',
    group: API_GROUP.OAUTH2,
  },
  {
    label: 'OAuth2 Tutorial',
    value: '/guides/oauth2-tutorial',
    group: API_GROUP.OAUTH2,
  },
];

const backendList = [
  {
    label: 'V4 APIs',
    value: '/qdc-v4',
    group: API_GROUP.BACKEND,
  },
  {
    label: 'Quran.com',
    value: '/qdc',
    group: API_GROUP.BACKEND,
  },
]

const authList = [
  {
    label: 'V1 APIs',
    value: '/qdc-auth-v1',
    group: API_GROUP.AUTH,
  },


  {
    label: 'Scopes',
    value: '/guides/scopes',
    group: API_GROUP.AUTH,
  },
]

export const APIs = [
  ...authList,
  ...backendList,
  ...oAuth2List
]

const groups = [API_GROUP.AUTH, API_GROUP.BACKEND, API_GROUP.OAUTH2]

export const APIGroups = groups.map((group) => ({
  label: group,
  options: APIs.filter((api) => api.group === group),
}))

export const websiteName = 'Quran Foundation API Docs'
