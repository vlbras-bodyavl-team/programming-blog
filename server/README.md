## Description



## Installation

```bash
$ pnpm install
```

## Database setup

```bash
# set up .env
cp .env.example .env

# run db
$ docker-compose up -d

# run migrations
$ pnpm migration:run
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Other
```bash
$ npm run migration:generate --name=

$ pnpm migration:run
```