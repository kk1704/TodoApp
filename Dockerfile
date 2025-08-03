FROM node:20-alpine

LABEL maintainer="Kundan"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "index.js"]