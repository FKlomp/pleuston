FROM node:8-alpine
MAINTAINER Ocean Protocol <devops@oceanprotocol.com>

RUN apk add --no-cache --update git python krb5 krb5-libs gcc make g++ krb5-dev bash

COPY . pleuston
WORKDIR pleuston

RUN npm install -g npm
RUN npm install

ENTRYPOINT ["npm", "start"]

# Expose listen port
EXPOSE 3000