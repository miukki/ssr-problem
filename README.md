# SendGrid API use

https://www.npmjs.com/package/nodemailer-sendgrid-transport
https://spectrum.chat/zeit/general/best-way-to-introduce-a-cra-contact-form~9bed5928-3c4a-4741-be3f-b997b668476a?authed=true

# Run with Docker

```
check .docker
```

# Deploy to EC2

```
check .devops
```

# Dev mode

```
PORT=3000 node server/server.js --verbose
```

# Prod mode

```
npx next build
PORT=3000 NODE_ENV=production node server/server.js
```

# Env props configuration

```
# Change http://localhost:3000 to https://simplimate.com.au/ for production
# next.config.js for client side
module.exports = {
  compress: true,
  env: {
    API: 'http://localhost:3000',
  },
}

# .env for email and data server

➜  simplimate-nextjs git:(feature/stylesheet-rehydration) ✗ cat .env
APIKEY=
RECEIVER=
API=http://localhost:3000
```

# Babel config

```
{
  "presets": ["next/babel"],
  "plugins": [
    ["styled-components", {"ssr": true}],
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "displayName": false,
        "fileName": false,
        "minify": true,
        "transpileTemplateLiterals": true,
        "pure": true
      }
    ]
  ]
}

```
