FROM node:16.20.1-alpine

RUN yarn config set no-progress true

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "run", "dev"]