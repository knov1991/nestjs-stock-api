FROM node:17

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main"]