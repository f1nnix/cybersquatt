import dns from './modules/dns'
import {
  facebook,
  twitter,
  github
} from './modules/socials'

const check = (name)=> {
  return Promise.all([
    dns(`${name}.com`),
    dns(`${name}.org`),
    dns(`${name}.net`),
    dns(`${name}.info`),
    facebook(name),
    twitter(name),
    github(name),
  ])
    .then(generateReportLine(name))
}

const humanize = (name)=> {
  return (results)=> {
    return new Promise(function(resolve, reject) {
      resolve({
        domains: {
          com: results[0],
          org: results[1],
          net: results[2],
          info: results[3]
        },
        socials: {
          facebook: results[4],
          twitter: results[5],
          github: results[6]
        }
      })
    })
  }
}

export default check
