const params = new URLSearchParams(window.location.search)
const version = params.get('version') || 'latest'

export const url = ['./json-file', version === 'latest' ? 'api.json' : `${version}-api.json`]
  .filter((item) => !!item)
  .join('/')
