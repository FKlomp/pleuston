# plankton-frontend

![200w](https://user-images.githubusercontent.com/90316/40921040-9de4f73e-680e-11e8-8631-d2101d847f90.gif)

[![css bigchaindb](https://img.shields.io/badge/css-bigchaindb-39BA91.svg)](https://github.com/bigchaindb/stylelint-config-bigchaindb)
[![js ascribe](https://img.shields.io/badge/js-ascribe-39BA91.svg)](https://github.com/ascribe/javascript)

## Development

The web app is a single page React app, created with [`create-react-app`](https://github.com/facebook/create-react-app).

To start development, clone this repo, install all dependencies, and start the development server:

```bash
git clone git@github.com:oceanprotocol/plankton-frontend.git
cd plankton-frontend/

npm i
npm start

# production build
npm run build
```

### Code style

Code style for JavaScript and stylesheets (we're using [styled-components](https://www.styled-components.com)) is enforced before every commit. You won't be able to commit any code with linting errors present so make sure to fix all warnings before committing.

Code style follows [eslint-config-ascribe](https://github.com/ascribe/javascript) and [stylelint-config-bigchaindb](https://github.com/bigchaindb/stylelint-config-bigchaindb).