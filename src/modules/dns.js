import dns from 'dns'

const dns = (url) => {
  return new Promise(function(resolve, reject) {
    dns.resolve4( url, (err, addresses) => {
      if (err) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

export default dns
