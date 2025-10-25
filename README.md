# social-media-platform

A minimal, TypeScript-first scaffold for building a social media web application (users, posts, feeds, authentication).

Features
- User registration & authentication
- Create, read, update, delete posts
- Follow/unfollow users and feed aggregation
- TypeScript-based API and client code

Quick start
```bash
# clone
git clone https://github.com/AviMath2412/social-media-platform.git
cd social-media-platform

# install dependencies
npm install

# development
npm run dev

# build for production
npm run build

# start production server
npm start
```
Note: Adjust the commands above to match the scripts in package.json if they differ.

Environment (example)
- PORT=3000
- DATABASE_URL=postgres://user:pass@localhost:5432/dbname
- JWT_SECRET=your_jwt_secret
- NODE_ENV=development

Testing
```bash
npm test
```
(Replace with the actual test command used in the repo, e.g., jest or vitest.)

Project layout (typical)
- src/ — TypeScript source (server and/or client)
- public/ — static assets
- tests/ — unit and integration tests
- package.json, tsconfig.json, .env.example

