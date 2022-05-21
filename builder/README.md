## 💁‍♀️ How to use

- Create a `.env` file
- Add the `SESSION_SECRET` environment variable
- Add the `DATABASE_URL` environment variable (must be a postgres database url)
- Intall the dependencies with `yarn install`
- For production deployment, run the following commands:
  - `yarn prisma migrate deploy` to apply migrations to the database
  - `yarn build`
  - `yarn start` to run the production build on port 3000

## The Stack

- Jaseci Studio is powered by the Remix framework, for more information visit [Remix](https://remix.run/)
- The database layer is powered by Prisma, see [Prisma](https://www.prisma.io/)
