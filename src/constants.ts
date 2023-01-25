export const APIs = [
  {
    label: 'Quran.com Auth V1',
    value: '/qdc-auth-v1',
    group: 'Quran.com Auth',
  },

  {
    label: 'Quran.com V4',
    value: '/qdc-v4',
    group: 'Quran.com',
  },
]

const groups = ['Quran.com Auth', 'Quran.com']

export const APIGroups = groups.map((group) => ({
  label: group,
  options: APIs.filter((api) => api.group === group),
}))
