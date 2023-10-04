# build
FROM node:20-alpine
WORKDIR /app

COPY package.json .
COPY .env.prod .env

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

RUN rm pnpm-lock.yaml tsconfig.json tsconfig.node.json .env.prod .eslintrc.cjs docker-compose.yaml index.html 
RUN rm -r public src

EXPOSE 5173
CMD [ "pnpm", "run", "preview" ]

