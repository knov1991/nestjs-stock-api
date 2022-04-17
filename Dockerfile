FROM node:17

WORKDIR /app

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

VOLUME [ "/app/node_modules" ]

CMD ["yarn", "start:dev"]