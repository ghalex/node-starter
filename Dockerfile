FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

ENV TS_NODE_BASEURL=./dist
ENV NODE_ENV=production

CMD [ "npm", "start"]