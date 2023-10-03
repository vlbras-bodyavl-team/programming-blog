# build
FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build

# prod
FROM node:18-alpine as prod
WORKDIR /usr/src/app

COPY package.json .
COPY vite.config.ts .
COPY --from=build /usr/src/app/dist /usr/src/app/dist
COPY .env.prod .env

RUN npm install -g pnpm
RUN pnpm install
RUN rm pnpm-lock.yaml

EXPOSE 5173

CMD [ "pnpm", "run", "preview" ]