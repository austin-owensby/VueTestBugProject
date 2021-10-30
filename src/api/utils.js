import debug from 'debug'

const log = debug('demo:api')

export function fetch(label, payload) {
  log(`fetching ${label}`)
  return new Promise((resolve, reject) => {
    log(`fetched ${label}`)
    resolve(payload)
  })
}
