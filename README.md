# Guildline install project

1. Copy .env.example and rename to .env
2. Open "cmd" or "terminal" run command `npm install`
3. Open mysql and create schema name "log-api"
4. Run command `npm run migration` to create table in database
5. Run application with command `npm run dev`

#Fix bug npm install in macOSX https://stackoverflow.com/questions/14803978/npm-global-path-prefix

# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

