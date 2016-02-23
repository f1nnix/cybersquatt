import Promise from 'bluebird'
import request from 'request'

const facebook = (name) => {
  return _checkFor404(`https://www.facebook.com/${name}`)
}

const twitter = (name) => {
  return _checkFor404(`https://twitter.com/${name}`)
}

const github = (name) => {
  return _checkFor404(`https://github.com/${name}`)
}

const _checkFor404 = (url) => {
  return new Promise(function(resolve, reject) {
    request({
      followAllRedirects: true,
      url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
        'Accept-Encoding': 'gzip,deflate,sdch',
        'Accept-Language': 'en-US,en;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3'
      }
    }, (error, response, body) => {
      if(response.statusCode === 404) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

export {
  facebook,
  twitter,
  github
}
