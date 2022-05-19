FROM node:18-alpine3.14

RUN apk add --no-cache tini && mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install && npm cache clean --force
COPY . .

EXPOSE 8888

CMD ["/sbin/tini", "--", "node", "index.js"]