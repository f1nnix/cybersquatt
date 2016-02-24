# cybersquatt

A simple module for checking free names in different domain zones, social networks, etc. Supports promises. Example (for 02/24/2016):

```js
> cybersquatt('digisec').then((results)=> console.log(results))
> {
    domains: { com: false, org: true, net: false, info: true },
    socials: { facebook: true, twitter: false, github: false }
  }
```

Simple and fast (~1 sec/name). **Use it for Good, Luke :).**

#### Features

Cybersquatt supports checking for following services:

* domains: .COM, .NET, .ORG, .INFO
* social accounts: Facebook, Twitter, Github

## Install

```
npm install cybersquatt --save
```

## Usage

```js
var cybersquatt = require('cybersquatt')

// returns Promise, so parse data or transport further in chain
cybersquatt('digisec')
.then(function(results) {
  console.log(results)
})
```

## TODO

* improve DNS check, use whois for non-resolved domains
* add more social networks // services

## License

Copyright (c) 2016, Ilya Rusanen. (MIT License)

See LICENSE for more info.
