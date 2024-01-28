FROM node:18

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
COPY . .

ARG NEXT_PUBLIC_API_URL

RUN yarn build

EXPOSE 9000

CMD yarn start